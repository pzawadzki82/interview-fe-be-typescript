const { getNewProduct } = require('./services/dataProvider')

const products = []

const updateGrossValue = (product) => {
    return {
        ...product,
        priceWithTax: product.price * 1.2
    }
}

const addProduct = (product) => {
    productToSave = updateGrossValue(product)
    product.id = products.length + 1,
    products.push(productToSave)

    return productToSave
}

const updateProduct = (productId, newData) => {
    products[productId - 1] = {
        ...products[productId - 1],
        ...newData,
    }
}

const getProducts = () => [...products]

const init = () => {
    addProduct(getNewProduct())
    addProduct(getNewProduct())
    addProduct(getNewProduct())
}

init()

module.exports = {
    addProduct,
    updateProduct,
    getProducts,
}
