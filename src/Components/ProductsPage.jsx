import React, { useState, useEffect } from "react";
// import ProductData from './actions/ProductData'
import axios from "axios";

export const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  function getProducts() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          setProducts(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  window.onload = function () {
    getProducts();
  };

  return (
    <div onLoad={getProducts}>
      <p className="text-white text-xl">Products:</p>
      {products && (
        <div>
          {products.map((item, i) => {
            return (
              <div>
                <div>
                  <p>
                    {""}
                    {item.title}{" "}
                  </p>

                  <p> {item.description} </p>
                </div>

                <div>
                  <p>$ {item.price}</p>

                  <img src={item.image} width={250} height={250} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
