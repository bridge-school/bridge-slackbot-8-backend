const axios = require('axios')

const channelsController = async (req, res, next) => {
  const params = `exclude_archived=true&types=public_channel&token=${process.env.SLACK_AUTH_TOKEN}`

  try {
    await axios(`https://slack.com/api/conversations.list?${params}`)
      .then(response => {
        const { channels } = response.data
        res.send(channels)
      })
      .catch(err => next(err))
  } catch (err) {
    next(err)
  }
}

module.exports = {
  channelsController
}
