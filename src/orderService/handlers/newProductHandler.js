const queueService = require('../../shared/queueService')
const { getRandomInt } = require('../../shared/utils')

module.exports = async ({ product }) => {
    console.log('[Service] Received NEW_PRODUCT, adding an order for product ', product.id)
    const orderData = {
        productId: product.id,
        order: getRandomInt(100, 1000),
    }

    await queueService.sendMessage('ORDER', orderData)
}
