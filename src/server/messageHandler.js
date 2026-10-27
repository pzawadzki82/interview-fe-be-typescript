const pongHandler = require('./handlers/pongHandler')

module.exports = async (messageType, data) => {
    switch (messageType) {
        case 'PONG':
            await pongHandler(data)
            break
        default:
            console.log(`[API] Message not handled: ${messageType}`)
    }
}
