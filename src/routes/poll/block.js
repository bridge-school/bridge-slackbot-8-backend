// var question = 'Testing dynamic questions'

const block = [
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "*test test test*"
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
]

module.exports = {
    block
}