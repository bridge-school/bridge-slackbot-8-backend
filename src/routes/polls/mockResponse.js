const mockResponse = {
  type: 'block_actions',
  team: { id: 'TMV84JWDB', domain: 'bridge-slack-bot' },
  user: {
    id: 'UMV84JWVB',
    username: 'tuni.webdev',
    name: 'tuni.webdev',
    team_id: 'TMV84JWDB'
  },
  api_app_id: 'AMX9A467P',
  token: 'gFOCf6z3lWbUotIw4tMEbfE3',
  container: {
    type: 'message',
    message_ts: '1568163129.000700',
    channel_id: 'CMUPTGDNG',
    is_ephemeral: false
  },
  trigger_id: '758086932982.743276642453.215a4050cad9cc51f95357af2ba04cae',
  channel: { id: 'CMUPTGDNG', name: 'test2' },
  message: {
    type: 'message',
    subtype: 'bot_message',
    text: 'Poll created',
    ts: '1568163129.000700',
    username: 'BridgeBotTest',
    bot_id: 'BMXHV7CD7',
    blocks: [
      {
        type: 'section',
        block_id: 'A3Yr',
        text: {
          type: 'mrkdwn',
          text: 'This will come from the db',
          verbatim: false
        }
      },
      {
        type: 'actions',
        block_id: 'su0KJ',
        elements: [
          {
            type: 'button',
            action_id: 'pVnVg',
            text: {
              type: 'plain_text',
              text: 'Yes :thumbsup:',
              emoji: true
            },
            value: 'yes'
          },
          {
            type: 'button',
            action_id: 'KnCZ',
            text: {
              type: 'plain_text',
              text: 'No :thumbsdown:',
              emoji: true
            },
            value: 'no'
          },
          {
            type: 'button',
            action_id: 'A4b9',
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
  },
  response_url:
    'https://hooks.slack.com/actions/TMV84JWDB/743098712978/rYJnZHdxYQ8RqmxVS3rbOU3w',
  actions: [
    {
      action_id: 'pVnVg',
      block_id: 'su0KJ',
      text: { type: 'plain_text', text: 'Yes :thumbsup:', emoji: true },
      value: 'yes',
      type: 'button',
      action_ts: '1568163232.348145'
    }
  ]
}

module.exports = { mockResponse }
