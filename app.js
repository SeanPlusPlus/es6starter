import log from 'console-emoji'
import request from 'request'
import dotenv from 'dotenv'

dotenv.config()

log(`Hitting the Slack API now :star: :star: :star:`);

const ts = Math.floor(Date.now() / 1000)
const attachments = [{
  fallback: 'Required plain-text summary of the attachment.',
  color: '#36a64f',
  pretext: 'Optional text that appears above the attachment block',
  title: 'Slack API Documentation',
  title_link: 'https://api.slack.com/',
  text: 'Optional text that appears within the attachment',
  fields: [
    {
      title: 'Priority',
      value: 'High',
      short: false,
    },
  ],
  footer: 'Slack API',
  footer_icon: 'https://platform.slack-edge.com/img/default_application_icon.png',
  ts,
}]

const username = 'webhookbot'
const icon_emoji = ':robot:'
const body = {
  username,
  icon_emoji,
  attachments,
}

const uri = process.env.SLACK_WEBHOOK_URL
const method = 'POST'
const options = {
  method,
  uri,
  body,
  json: true,
}

request(options, (err, response, body) => {
  if (err === null) {
    log('POST sucessful', 'ok')
  } else {
    console.log(response);
  }
})
