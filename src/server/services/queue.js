const axios = require('axios').default

const ENABLE_DEBUG_LOGGING = false
const subscribers = []

const sendMessage = async (data) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const subscriber of subscribers) {
        try {
            if (ENABLE_DEBUG_LOGGING) {
                console.log('Sending to ', subscriber, data)
            }
            // eslint-disable-next-line no-await-in-loop
            await axios.post(subscriber, data)
        } catch {
            console.error(`Failed to send message to subscriber on address ${subscriber}`)
        }
    }
}

const subscribe = (listener) => {
    if (subscribers.some(subscriber => subscriber === listener)) {
        return
    }

    if (ENABLE_DEBUG_LOGGING) {
        console.log('New subscriber', listener)
    }
    subscribers.push(listener)
}

module.exports.sendMessage = sendMessage
module.exports.subscribe = subscribe
