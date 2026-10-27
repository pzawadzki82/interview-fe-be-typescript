const express = require('express')
const os = require('os')
const messageHandler = require('./messageHandler')
const config = require('../config')
const queueService = require('../shared/queueService')
const queue = require('./services/queue')
const { getNewProduct } = require('./services/dataProvider');
const {
    getProducts,
    addProduct,
} = require('./data');

const app = express()

app.use(express.static('dist'))
app.use(express.json())
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.get('/api/ping', async (req, res) => {
    await queueService.sendMessage('PING')
    res.sendStatus(200)
})

app.get('/api/getProducts', async (req, res) => {
    res.send(getProducts())
})

app.post('/queue/subscribe', (req, res) => {
    queue.subscribe(req.body.listener)
    res.sendStatus(200)
})
app.post('/queue/sendMessage', async (req, res) => {
    await queue.sendMessage(req.body)
    res.sendStatus(200)
})

app.post('/queue/receiveMessage', async (req, res) => {
    await messageHandler(req.body.messageType, req.body.data)
    res.sendStatus(200)
})

app.listen(config.apiPort, () => console.log(`[API] Listening on port ${config.apiPort}!`));

queueService.subscribe(`${config.apiUrl}/queue/receiveMessage`)
