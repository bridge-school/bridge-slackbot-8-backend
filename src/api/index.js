const express = require('express')

const { healthRouter } = require('../routes/health/health.router')
const { channelsRouter } = require('../routes/channels/channels.router')
const { pollsRouter } = require('../routes/polls/polls.router')

const { channelsRouter } = require('../routes/channels/channels.router')
const { pollRouter } = require('../routes/poll/poll.router')

const router = express.Router()
router.use('/health', healthRouter)
router.use('/channels', channelsRouter)
<<<<<<< HEAD
<<<<<<< HEAD
router.use('/poll', pollRouter)

// This is just for ngrok to work -- comment out the normal path for poll -- router.use('/poll', pollRouter) and use the following path:
// router.use('/', pollRouter)
=======
>>>>>>> [Feature][201] Fetch channels (#4)
=======
router.use('/polls', pollsRouter)
>>>>>>> added routes for poll, created add, update, get, delete apis

module.exports = router
