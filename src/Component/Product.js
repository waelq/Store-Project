import React from "react";
import "./Product.css";
import product from "./product.jpg";

function Product({ title, img, price, rate }) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rate">
          {Array(rate)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={img} alt="product" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
