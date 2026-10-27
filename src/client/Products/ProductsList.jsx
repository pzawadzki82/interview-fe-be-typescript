import React, { useEffect, useState } from 'react'
import GridItem from './GridItem';

const ProductsList = () => {
    const [products, setProducts] = useState([])

    useEffect(async () => {
        const response = await fetch('/api/getProducts')
        setProducts(await response.json())
    }, [])

    const addItem = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        }

        await fetch('/api/addProduct', requestOptions)

        const response = await fetch('/api/getProducts')
        setProducts(await response.json())
    }

    return (
        <div className="products-grid">
            {products.map((product, index) => <GridItem key={index} product={product} />)}
            <button onClick={addItem} type="button">Add item</button>
        </div>
    )
}

export default ProductsList
