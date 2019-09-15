const express = require('express')

const { pollController } = require('./poll.controller')

const router = express.Router()

router.post('', pollController)

module.exports = {
  pollRouter: router
}
