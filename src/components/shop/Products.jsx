import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
function Products() {
  let [products, setProducts] = useState([]);
  let getData = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    setProducts(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="row row-gap-5">
      {products.map((product) => {
        return <ProductCard {...product} key={product.id}/>;
      })}
    </div>
  );
}

export default Products;
