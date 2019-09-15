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


  const url = `https://slack.com/api/chat.postMessage?${params}`

  // console.log(req.body);

  try { 
    axios.post(url)
    .then(res => {  
      // console.log(res);
    })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  pollController
}