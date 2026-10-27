const pingHandler = require('./handlers/pingHandler')
const newProductHandler = require('./handlers/newProductHandler')

module.exports = async (messageType, data) => {
    switch (messageType) {
        case 'PING':
            await pingHandler(data)
            break
        case 'NEW_PRODUCT':
            await newProductHandler(data)
            break
        default:
            console.log(`[Service] Message not handled: ${messageType}`)
    }
}
