import React from "react";
import ProductCard from "./cards/ProductCard"
import "./sections.css";

const sampleData = [
    {
        id: 1
        , imageUrl: '/images/sample-candle-product.jpg'
        , description: "This candle is ok."
        , title: "Forest"
        , price: 15
    }
    , {
    id: 2
    , imageUrl: '/images/sample-candle-product-1.jpg'
    , description: "This candle is Grrrrreat!"
    , title: "Lavender"
    , price: 15
    } 
    , {
    id: 3
    ,imageUrl: '/images/sample-candle-product.jpg'
    , description: "This candle is amazing!"
    , title: "Forest"
    , price: 15
    } 
];

const sampleMapper =(product)=> {
    return (
        <ProductCard 
        key={`${product.title}-${product.id}`}
        product={product}
        />
    );
}

const ProductList = (props) => {

    if(props == null){
        // return props.productData.map(props.cardMapper);
    } else {
        return (
            <div className="product-card-container">
                {sampleData.map(sampleMapper)}
            </div>   
        );
    }
}

export default ProductList;