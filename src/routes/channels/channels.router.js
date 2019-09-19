const express = require('express')

const channelsController = require('./channels.controller')

const router = express.Router()

router.get('', channelsController)

module.exports = {
  channelsRouter: router
}
