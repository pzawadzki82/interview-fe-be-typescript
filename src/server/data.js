const { getNewProduct } = require('./services/dataProvider')

const products = []

const addProduct = (product) => {
    const productToSave = {
        ...product,
        id: products.length + 1,
    }

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
