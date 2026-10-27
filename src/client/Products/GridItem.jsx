import React from 'react'
import PropTypes from 'prop-types'

const GridItem = ({ product }) => {
    console.log(product)
    const {
        photo, name, price, currency, color, order,
    } = product

    return (
        <div>
            <img src={photo} alt={name} />
            <h3>{name}</h3>
            <div>
                Order quantity:
                {order}
            </div>
        </div>
    )
}

GridItem.propTypes = {
    product: PropTypes.object,
}

export default GridItem
