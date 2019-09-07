const axios = require('axios')

const channelsController = async (req, res, next) => {
  const params = `exclude_archived=true&types=public_channel&token=${process.env.SLACK_AUTH_TOKEN}`
  const url = `https://slack.com/api/conversations.list?${params}`

  try {
    const response = await axios(url).then(res => res.data.channels)
    const channels = response.map(({ id, name }) => ({ id, name }))
    res.send(channels)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  channelsController
}
