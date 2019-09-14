const db = require('../../db')
const mockResponse = require('./mockResponse')

const addPollsController = async (req, res) => {
  let testData = {
    question: 'TEST question',
    channel: {
      name: 'testChannel',
      id: 001
    },
    response: {
      yes: 0,
      no: 0,
      maybe: 0
    }
  }

  db.collection('polls')
    .doc(req.params.id)
    .set(testData)
    .then(docRef => {
      console.log('docRef', docRef)
      res.status(200).send('Poll successfully created')
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
