const axios = require('axios')
const { parametize } = require('../../utils/parametize')
const { block } = require('./block')
// var question = 'Testing dynamic questions'

const pollController = async (req, res, next) => {
  const params = parametize({
    token: process.env.SLACK_BOT_TOKEN,
    channel: 'CMUPTGDNG',
    text: 'test',
  })

  // change to right end point
  const url = `https://slack.com/api/chat.postMessage?${params}&blocks=[
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "*Hardcoded but working!*"
		}
	},
	{
		"type": "actions",
		"elements": [
			{
				"type": "button",
				"text": {
					"type": "plain_text",
					"text": "Yes :thumbsup:",
					"emoji": true
				},
				"value": "yes"
			},
			{
				"type": "button",
				"text": {
					"type": "plain_text",
					"text": "No :thumbsdown:",
					"emoji": true
				},
				"value": "no"
			},
			{
				"type": "button",
				"text": {
					"type": "plain_text",
					"text": "Maybe :neutral_face:",
					"emoji": true
				},
				"value": "maybe"
			}
		]
	}
]`

  try { 
    axios.post(url)
    .then(res => {
        console.log(`statusCode: ${res.statusCode}`)
        // console.log(res)
    })
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