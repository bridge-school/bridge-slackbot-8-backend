const express = require('express')

const {
  getPollsController,
  addPollsController,
  getPollByIdController,
  updatePollsController,
  deletePollsController
} = require('./polls.controller')

const router = express.Router()

router.get('/', getPollsController)
router.get('/:id', getPollByIdController)
router.post('/', addPollsController)
router.post('/updateResponse', updatePollsController)
router.delete('/:id', deletePollsController)

module.exports = {
  pollsRouter: router
}
