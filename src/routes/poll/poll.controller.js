const axios = require('axios')
const { parametize } = require('../../utils/parametize')

const pollController = async (req, res, next) => {
  const params = parametize({
    // params: channel id, text, block
    token: process.env.SLACK_AUTH_TOKEN
  })

  // change to right end point
  const url = `https://slack.com/api/conversations.list?${params}`

  // check this
  try {
    const response = await axios(url).then(res => res.data.channels)
    const channels = response.map(({ id, name }) => ({ id, name }))
    res.send(channels)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  pollController
}

// ADD IN OTHER FILES