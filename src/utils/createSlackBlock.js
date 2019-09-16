const createSlackBlock = (block_id, question) => [
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: question
    }
  },
  {
    type: 'actions',
    block_id: block_id,
    elements: [
      {
        type: 'button',
        text: {
          type: 'plain_text',
          text: 'Yes :thumbsup:',
          emoji: true
        },
        value: 'yes'
      },
      {
        type: 'button',
        text: {
          type: 'plain_text',
          text: 'No :thumbsdown:',
          emoji: true
        },
        value: 'no'
      },
      {
        type: 'button',
        text: {
          type: 'plain_text',
          text: 'Maybe :neutral_face:',
          emoji: true
        },
        value: 'maybe'
      }
    ]
  }
]

module.exports = createSlackBlock
