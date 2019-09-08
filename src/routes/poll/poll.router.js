const express = require('express')

const { pollController } = require('./poll.controller')

const router = express.Router()

router.get('', pollController)

module.exports = {
  pollRouter: router
}
