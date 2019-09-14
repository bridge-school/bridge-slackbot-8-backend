const express = require('express')

const { healthRouter } = require('../routes/health/health.router')
const { channelsRouter } = require('../routes/channels/channels.router')
const { pollRouter } = require('../routes/poll/poll.router')

const router = express.Router()
router.use('/health', healthRouter)
router.use('/channels', channelsRouter)
router.use('/poll', pollRouter)

// This is just for ngrok to work -- comment out the normal path for poll -- router.use('/poll', pollRouter) and use the following path:
// router.use('/', pollRouter)

module.exports = router