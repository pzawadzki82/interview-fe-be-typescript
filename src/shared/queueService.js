const axios = require('axios').default
const config = require('../config')

const subscribe = async (listener) => {
    await axios.post(`${config.apiUrl}/queue/subscribe`, {
        listener,
    })
}

const sendMessage = async (messageType, data) => {
    await axios.post(`${config.apiUrl}/queue/sendMessage`, {
        messageType,
        data,
    })
}

module.exports.sendMessage = sendMessage
module.exports.subscribe = subscribe
