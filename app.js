import log from 'console-emoji'
import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())

app.get('/', (req, res) => {
  const msg = {
    message: 'Hello World!'
  }
  res.send(msg)
})

app.post('/', (req, res) => {
  console.log(req.body);
  const foo = {
    message: 'Hello POST!',
    received: req.body,
  }
  res.send(foo)
})

app.listen(3000, () => {
  log('Example app listening on port 3000!', 'ok')
})
