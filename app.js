import log from 'console-emoji'
import request from 'request'
import dotenv from 'dotenv'

dotenv.config()

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL
if (SLACK_WEBHOOK_URL === undefined) {
  log('Create a .env file and add a value for SLACK_WEBHOOK_URL', 'warn')
  process.exit()
}

const ts = Math.floor(Date.now() / 1000)
const fields = [{
  title: 'Priority',
  value: 'High',
  short: true,
}]
const attachments = [{
  ts,
  fields,
  fallback: 'Required plain-text summary of the attachment.',
  color: '#36a64f',
  pretext: 'Optional text that appears above the attachment block',
  title: 'Slack API Documentation',
  title_link: 'https://api.slack.com/',
  text: 'Optional text that appears within the attachment',
  footer: 'Slack API',
  footer_icon: 'https://platform.slack-edge.com/img/default_application_icon.png',
}]

const username = 'webhookbot'
const icon_emoji = ':robot:'
const body = {
  username,
  icon_emoji,
  attachments,
}

const method = 'POST'
const options = {
  method,
  body,
  json: true,
  uri: SLACK_WEBHOOK_URL,
}

request(options, (err, response, body) => {
  if (err === null) {
    log('POST sucessful', 'ok')
  } else {
    console.log(response);
  }
})
