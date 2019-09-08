const axios = require('axios')
const { parametize } = require('../../utils/parametize')
const { block } = require('./block')

const pollController = async (req, res, next) => {
  const params = parametize({
    token: process.env.SLACK_AUTH_TOKEN,
    channel: CMV84667J,
    text: '',
    blocks: block
  })

  // change to right end point
  const url = `https://slack.com/api/chat.postMessage?${params}`

  try { 
    axios.post(url)
  } catch (err) {
    next(err)
  }

  // check this
//   try {
//     const response = await axios(url).then(res => res.data.channels)
//     const channels = response.map(({ id, name }) => ({ id, name }))
//     res.send(channels)
//   } catch (err) {
//     next(err)
//   }
}

module.exports = {
  pollController
}

// ADD IN OTHER FILES