import axios from "axios";
import { useEffect } from "react";

const Products = () => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => res.json(res))
    .then((json) => console.log(json));
  return (
    <>
      <ul>
        <li>Item</li>
      </ul>
    </>
  );
};

export default Products;
