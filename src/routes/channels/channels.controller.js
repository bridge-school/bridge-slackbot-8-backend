const axios = require('axios')
const { parametize } = require('../../utils/parametize')

const channelsController = async (req, res, next) => {
  const params = parametize({
    exclude_archived: true,
    types: 'public_channel',
    token: process.env.SLACK_AUTH_TOKEN,
  })
  const url = `https://slack.com/api/conversations.list?${params}`

  try {
    // if uses await don't need .then
    //
    // const response = await axios(url).then(res => res.data.channels)
    const result = await axios(url)
    const response = result.data.channels
    const channels = response.map(({ id, name }) => ({ id, name }))
    res.send(channels)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  channelsController,
}
