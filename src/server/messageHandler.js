const pongHandler = require('./handlers/pongHandler')
const orderHandler = require('./handlers/orderHandler')

module.exports = async (messageType, data) => {
    switch (messageType) {
        case 'PONG':
            await pongHandler(data)
            break
        case 'ORDER':
            await orderHandler(data)
            break
        default:
            console.log(`[API] Message not handled: ${messageType}`)
    }
}
