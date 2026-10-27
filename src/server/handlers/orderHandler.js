const { updateProduct } = require('../data')

module.exports = ({ productId, order }) => {
    console.log('[API] Received ORDER')

    updateProduct(productId, { order })
}
