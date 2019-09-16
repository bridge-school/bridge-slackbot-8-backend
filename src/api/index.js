const express = require('express')

const { healthRouter } = require('../routes/health/health.router')
const { channelsRouter } = require('../routes/channels/channels.router')
const { pollsRouter } = require('../routes/polls/polls.router')

const router = express.Router()
router.use('/health', healthRouter)
router.use('/channels', channelsRouter)
router.use('/polls', pollsRouter)

module.exports = router
