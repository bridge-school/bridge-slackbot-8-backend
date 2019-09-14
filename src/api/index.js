const express = require('express')

const { healthRouter } = require('../routes/health/health.router')
const { channelsRouter } = require('../routes/channels/channels.router')
const { pollRouter } = require('../routes/poll/poll.router')

const router = express.Router()
router.use('/health', healthRouter)
router.use('/channels', channelsRouter)

// !!! change to /poll after we have the real URL !!!
// router.use('/poll', pollRouter)

// This is just for ngrok to work
router.use('/', pollRouter)


module.exports = router
