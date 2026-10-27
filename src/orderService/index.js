const express = require('express')
const messageHandler = require('./messageHandler')
const config = require('../config')
const queueService = require('../shared/queueService')

const app = express()

app.use(express.json())
app.post('/receiveMessage', async (req, res) => {
    await messageHandler(req.body.messageType, req.body.data)
    res.sendStatus(200)
})

app.listen(config.servicePort, () => console.log(`[Service] Listening on port ${config.servicePort}!`))

queueService.subscribe(`${config.serviceUrl}/receiveMessage`)
