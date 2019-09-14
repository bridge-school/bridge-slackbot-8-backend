const express = require('express')

const {
  getPollsController,
  addPollsController,
  updatePollsController,
  deletePollsController
} = require('./polls.controller')

const router = express.Router()

router.get('/', getPollsController)
router.post('/:id', addPollsController)
router.put('/:id', updatePollsController)
router.delete('/:id', deletePollsController)

module.exports = {
  pollsRouter: router
}
