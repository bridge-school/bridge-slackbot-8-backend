const express = require('express')

const { healthRouter } = require('../routes/health/health.router')
const { channelsRouter } = require('../routes/channels/channels.router')

const router = express.Router()
router.use('/health', healthRouter)
router.use('/channels', channelsRouter)

module.exports = router
