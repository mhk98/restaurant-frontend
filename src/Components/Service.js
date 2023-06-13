import React from "react";
import "./Services.css";

const Service = ({ product }) => {
  const { item_Image } = product;
  return (
    <div className="card card-compact w-96 bg-[#101418] text-white flex items-center">
      <div class="hover01 column">
        <figure>
          <img
            className="h-80"
            src={`https://restaurant-backend-ij3t.onrender.com/${item_Image}`}
          />
        </figure>
      </div>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <button className="btn w-32 text-white bg-[#101418] hover:bg-[#C6A87D] ">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Service;
