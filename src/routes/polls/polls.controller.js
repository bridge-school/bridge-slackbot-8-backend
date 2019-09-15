const axios = require('axios')
const { parametize } = require('../../utils/parametize')
const db = require('../../db')

const createSlackBlock = require('../../utils/createSlackBlock')
const mockResponse = require('./mockResponse')

const sendPolltoSlack = async (interactionBlock, channel) => {
  const params = parametize({
    token: process.env.SLACK_AUTH_TOKEN,
    channel: channel,
    text: 'Poll created',
    blocks: JSON.stringify(interactionBlock)
  })

  const url = `https://slack.com/api/chat.postMessage?${params}`

  try {
    axios.post(url).then(res => {
      console.log('send poll to slack successfully')
    })
  } catch (err) {
    next(err)
  }
}

const addPollsController = async (req, res) => {
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
    .then(docRef => {
      const block = createSlackBlock(docRef.id, question)
      sendPolltoSlack(block, channel_id) &&
        res
          .status(200)
          .json({ id: docRef.id, message: 'Poll successfully created' })
    })
    .catch(error => {
      res.json({ error })
    })
}

const getPollsController = async (req, res) => {
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
    .catch(error => {
      res.json({ error })
    })
}

const updatePollsController = async (req, res) => {
  let newResponse = {
    yes: 2,
    no: 3,
    maybe: 1
  }

  db.collection('polls')
    .doc(req.params.id)
    .update({
      response: newResponse
    })
    .then(res.status(200).send('Poll successfully updated'))
    .catch(error => res.json({ error }))
}

const deletePollsController = async (req, res) => {
  db.collection('polls')
    .doc(req.params.id)
    .delete()
    .then(res.status(200).send('Poll successfully deleted'))
    .catch(error => res.json({ error }))
}

module.exports = {
  addPollsController,
  getPollsController,
  updatePollsController,
  deletePollsController
}
