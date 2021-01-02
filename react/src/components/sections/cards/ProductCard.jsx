import React from 'react';

const ProductCard = (props) => {

    const product = props.product;
    return (
        <div className="product-card"
        style={{
            backgroundImage: `url(${product.imageUrl})`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `center center`,
            backgroundSize: `cover`
        }}>
            <div className="product-card-header">{product.title}</div>
            <div className="product-card-description">{product.description}</div>
            <div className="product-card-footer">{`Price: ${product.price}`}</div>
        </div>
    )
}

export default ProductCard;