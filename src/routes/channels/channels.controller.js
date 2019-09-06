<<<<<<< HEAD
const axios = require('axios')
const { parametize } = require('../../utils/parametize')

const channelsController = async (req, res, next) => {
  const params = parametize({
    exclude_archived: true,
    types: 'public_channel',
    token: process.env.SLACK_AUTH_TOKEN
  })
  const url = `https://slack.com/api/conversations.list?${params}`

  try {
    // if uses await don't need .then
    // 
    // const response = await axios(url).then(res => res.data.channels)
    const result = await axios(url);
    const response = result.data.channels;
    const channels = response.map(({ id, name }) => ({ id, name }))
    res.send(channels)
  } catch (err) {
    next(err)
  }
=======
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
>>>>>>> [Feature][201] Fetch channels (#4)
}

module.exports = {
  channelsController
}
