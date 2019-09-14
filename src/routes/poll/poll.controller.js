const axios = require('axios')
const { parametize } = require('../../utils/parametize')
const { block } = require('./block')


// this will come from POST / form
const selectedChannel = 'CMUPTGDNG'

const pollController = async (req, res, next) => {
  const params = parametize({
    token: process.env.SLACK_BOT_TOKEN,
    channel: selectedChannel,
	text: 'Poll created',
	blocks: JSON.stringify(block)
  })

  console.log(req.body);
  const url = `https://slack.com/api/chat.postMessage?${params}`

  try { 
    axios.post(url)
    .then(res => {
      //  console.log(req)
    })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  pollController
}