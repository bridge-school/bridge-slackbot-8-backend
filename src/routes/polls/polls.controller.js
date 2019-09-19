const axios = require('axios')
const db = require('../../db')

const parametize = require('../../utils/parametize')
const createSlackBlock = require('../../utils/createSlackBlock')

const sendPolltoSlack = async (interactionBlock, channel) => {
  const params = parametize({
    token: process.env.SLACK_AUTH_TOKEN,
    channel: channel,
    text: 'Poll created',
    blocks: JSON.stringify(interactionBlock)
  })

  const url = `https://slack.com/api/chat.postMessage?${params}`

  try {
    const res = await axios.post(url)
    return res.data
  } catch (err) {
    return err
  }
}

const addPollsController = async (req, res, next) => {
  const { question, channel_name, channel_id } = req.body
  const newPoll = {
    question: question,
    channel: {
      name: channel_name,
      id: channel_id
    },
    response: {
      yes: 0,
      no: 0,
      maybe: 0
    }
  }

  db.collection('polls')
    .add(newPoll)
    .then(async docRef => {
      const block = createSlackBlock(docRef.id, question)
      const sendPolltoSlackData = await sendPolltoSlack(block, channel_id)

      if (sendPolltoSlackData.ok) {
        res.status(200).json({
          id: docRef.id,
          message: 'Poll successfully created and sent to slack'
        })
      } else {
        res.status(200).json({
          id: docRef.id,
          message:
            'Poll successfully add to db but can not send the poll to slack',
          slackErrorMessage: sendPolltoSlackData.error
        })
      }
    })
    .catch(error => next(error))
}

const getPollsController = async (req, res, next) => {
  db.collection('/polls')
    .get()
    .then(snapshot => {
      res.status(200).json({
        data: snapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
      })
    })
    .catch(error => next(error))
}

const getPollByIdController = async (req, res, next) => {
  db.collection('polls')
    .doc(req.params.id)
    .get()
    .then(snapshot => res.status(200).json(snapshot.data()))
    .catch(error => next(error))
}

const getCurrentResponse = async block_id => {
  let currentResponse = {}
  await db
    .collection('polls')
    .doc(block_id)
    .get()
    .then(snapshot => {
      currentResponse = snapshot.data().response
    })
    .catch(error => next(error))

  return currentResponse
}

const updatePollsController = async (req, res, next) => {
  const action = JSON.parse(req.body.payload).actions[0]
  const { block_id, value } = action

  const currentResponse = await getCurrentResponse(block_id)

  const newResponse = {
    ...currentResponse,
    [value]: currentResponse[value] + 1
  }

  db.collection('polls')
    .doc(block_id)
    .update({
      response: newResponse
    })
    .then(res.status(200).send('Poll successfully updated'))
    .catch(error => next(error))
}

const deletePollsController = async (req, res, next) => {
  db.collection('polls')
    .doc(req.params.id)
    .delete()
    .then(res.status(200).send('Poll successfully deleted'))
    .catch(error => next(error))
}

module.exports = {
  addPollsController,
  getPollsController,
  getPollByIdController,
  updatePollsController,
  deletePollsController
}
