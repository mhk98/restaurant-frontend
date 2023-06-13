import React, { useEffect, useState } from "react";
import "./Services.css";
import Service from "./Service";
import Home from "../pages/Home";
import Feedback from "../pages/Feedback";

const Services = () => {
  const [products, setProducts] = useState([]);
  // console.log("products", products);
  useEffect(() => {
    fetch("https://restaurant-backend-ij3t.onrender.com/api/v1/item")
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);
  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-12 place-items-center mx-16 mt-16">
        {/* <h2>{products.length}</h2> */}
        {products.map((product) => (
          <Home key={product.itemId} product={product} />
        ))}
      </div>

      <Feedback></Feedback>
    </div>
  );
};

export default Services;
