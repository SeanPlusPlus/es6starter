import log from 'console-emoji'
import request from 'request'
import dotenv from 'dotenv'

dotenv.config()

const api = process.env.API_BASE
log(`Calling the API now :star:\t${api}`);
request.get(api, (err, response, body) => {
  console.log(body);
})
