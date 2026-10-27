const queueService = require('../../shared/queueService')

module.exports = async () => {
    console.log('[Service] Received PING, sending PONG...')
    await queueService.sendMessage('PONG')
}
