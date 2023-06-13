import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const TopRated = () => {
  const {
    state: { products, loading, error },
  } = useProducts();
  console.log("data", products);

  let content;

  if (loading) {
    content = <p>loading</p>;
  }
  if (error) {
    content = <p>error</p>;
  }
  if (!loading && !error && products.length === 0) {
    content = <p>Nothing to show, product list is empty</p>;
  }
  if (!loading && !error && products.length) {
    content = products
      .filter((product) => product.rating >= 4)
      .map((product) => <ProductCard key={product._id} product={product} />);
  }
  return <div className="grid grid-cols-3">{content}</div>;
};

export default TopRated;
