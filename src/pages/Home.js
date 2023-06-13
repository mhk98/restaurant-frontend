import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import axios from "axios";
import { public_api } from "../Endpoints/http.service";

const Home = ({ product, searchValue }) => {
  console.log("searchValue", searchValue);

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const storedData = localStorage.getItem("data");
  // const retrievedArray = storedData ? JSON.parse(storedData) : [];
  console.log("storedData", storedData);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  const [cartItems, setCartItems] = useState([]);

  console.log("cartItems", cartItems);

  // Function to add a product to the cart
  const addToCart = (product) => {
    const existingItem = cartItems.find(
      (item) => item.itemId === product.itemId
    );

    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.itemId === product.itemId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Function to send cart data to the backend
  const sendCartData = () => {
    axios
      .post(
        "https://restaurant-backend-ij3t.onrender.com/api/v1/cart",
        cartItems
      )
      .then((response) => {
        console.log("Cart data sent successfully:", response.data);
        // Reset the cart after sending the data to the backend
        // setCartItems([]);
      })
      .catch((error) => {
        console.error("Error sending cart data:", error);
      });
  };

  const handleClick = () => {
    addToCart(product);
    sendCartData();
  };

  // const getSearchValue = async() =>{
  //   const res = await public_api.get(`item/search/${}`)
  // }

  // useEffect(() =>{
  //   getSearchValue()
  // }, [])
  // let content;

  // if (loading) {
  //   content = <p>loading</p>;
  // }
  // if (error) {
  //   content = <p>error</p>;
  // }
  // if (!loading && !error && products.length === 0) {
  //   content = (
  //     <p className="text-white">Nothing to show, product list is empty</p>
  //   );
  // }
  // if (!loading && !error && products.length) {
  //   content = products.map((product) => (
  //     <ProductCard key={product.itemId} product={product} />
  //   ));
  // }
  return (
    <div>
      {!searchValue ? (
        <div className="card card-compact bg-[#101418] text-white flex items-center">
          <div class="hover01 column">
            <figure>
              <img src={`http://localhost:4000/${product.item_Image}`} />
            </figure>
          </div>
          <div className="card-body">
            <h2 className="card-title">{product.item_Name}</h2>
            <p>Price: {product.item_Price}</p>
            <p> {product.ingredients}</p>
            <button
              // onClick={() =>
              //   dispatch({ type: actionTypes.ADD_TO_CART, payload: product })
              // }

              onClick={handleClick}
              className="btn w-32 text-white bg-[#101418] hover:bg-[#C6A87D] "
            >
              ADD TO CART
            </button>
          </div>
        </div>
      ) : (
        <div className="card card-compact bg-[#101418] text-white flex items-center">
          <div class="hover01 column">
            <figure>
              <img src={`http://localhost:4000/${searchValue.item_Image}`} />
            </figure>
          </div>
          <div className="card-body">
            <h2 className="card-title">{searchValue.item_Name}</h2>
            <p>Price: {searchValue.item_Price}</p>
            <p> {searchValue.ingredients}</p>
            <button
              // onClick={() =>
              //   dispatch({ type: actionTypes.ADD_TO_CART, payload: product })
              // }

              onClick={handleClick}
              className="btn w-32 text-white bg-[#101418] hover:bg-[#C6A87D] "
            >
              ADD TO CART
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
