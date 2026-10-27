const data = require('./mockProductData')
const { getRandomInt } = require('../../shared/utils')

const getNewProduct = () => data[getRandomInt(0, data.length)]

module.exports.getNewProduct = getNewProduct
