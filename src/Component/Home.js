import React from "react";
import "./Home.css";
import prime from "./prime.jpg";
import Product from "./Product";
import product from "./product.jpg";

function Home() {
  return (
    <div>
      <div className="home_contanier">
        <img src={prime} className="home_img" alt="home-back"></img>
      </div>
      <div className="home_row">
        <Product
          title="This is a paragraph. This is a paragraph. This is a paragraph."
          img={product}
          price={29.18}
          rate={5}
        />{" "}
        <Product
          title="This is a paragraph. This is a paragraph. This is a paragraph."
          img={product}
          price={4.2}
          rate={3}
        />{" "}
      </div>
      <div className="home_row">
        <Product
          title="This is a paragraph. This is a paragraph. "
          img={product}
          price={6.13}
          rate={2}
        />{" "}
        <Product
          title="This is a paragraph. This is a paragraph. "
          img={product}
          price={10.1}
          rate={5}
        />{" "}
        <Product
          title="This is a paragraph. This is a paragraph. "
          img={product}
          price={8.13}
          rate={4}
        />{" "}
      </div>
      <div className="home_row">
        <Product
          title="This is a paragraph. This is a paragraph. This is a paragraph.This is a paragraph."
          img={product}
          price={29.18}
          rate={5}
        />{" "}
      </div>
    </div>
  );
}

export default Home;
