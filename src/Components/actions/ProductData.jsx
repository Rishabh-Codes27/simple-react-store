import React from "react";
import axios from "axios";
import { useState } from "react";

export const ProductData = () => {
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
};
