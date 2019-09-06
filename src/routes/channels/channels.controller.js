const request = require('request')

const channelsController = (req, res, next) => {
  new Promise((resolve, reject) => {
    request(
      `https://slack.com/api/conversations.list?exclude_archived=true&types=public_channel&token=${process.env.SLACK_AUTH_TOKEN}`,
      (req, res) => {
        const { body } = res
        resolve(body)
      }
    )
  }).then(response => {
    const list = JSON.parse(response)

    const channels = list.channels.map(channel => ({
      id: channel.id,
      name: channel.name
    }))

    res.send(channels)
  })
}

module.exports = {
  channelsController
}
