import React from "react";
import "./styles.css";

interface ProductProps {
    name: string
    imgSrc: string
    price: string
    prevPrice?: string
}

const ProductCard: React.FC<ProductProps> = ({name, imgSrc, prevPrice, price}) => {
    return (
        <div className="product-card">
            <img src={imgSrc}/>

            <div className="product-card-info">
                <h3>{name}</h3>
                {prevPrice && <span className="previous-price-info">{prevPrice}</span>}
                <span className="price-info">{price}</span>
            </div>
        </div>
    )
}

export default ProductCard