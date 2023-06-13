import React, { useEffect, useState } from "react";
// import { useProducts } from "../context/ProductProvider";
// import ProductCard from "../Components/ProductCard";
import { public_api } from "../Endpoints/http.service";

const Cart = () => {
  // const {
  //   state: { cart, loading, error },
  // } = useProducts();
  // console.log("cartItems", cart);

  const [cart, setCart] = useState([]);

  const getAllProducts = async () => {
    const res = await public_api.get("cart");
    setCart(res.data);
  };

  useEffect(() => {
    getAllProducts();
  });

  // Function to increment the quantity of a product
  // const incrementQuantity = (productId) => {
  //   const updatedCartItems = cart.map((item) =>
  //     item.itemId === productId
  //       ? { ...item, quantity: item.quantity + 1 }
  //       : item
  //   );
  //   setCart(updatedCartItems);
  // };

  // Function to decrement the quantity of a product
  // const decrementQuantity = (productId) => {
  //   const updatedCartItems = cart.map((item) =>
  //     item.itemId === productId
  //       ? { ...item, quantity: item.quantity - 1 }
  //       : item
  //   );
  //   setCart(updatedCartItems);
  // };

  // Function to calculate the total price of the cart
  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.item_Price * item.quantity,
      0
    );
  };

  return (
    <div className="flex justify-center overflow-x-auto bg-[#101418] h-full">
      <div class="p-3">
        <table class="table-auto border-2 border-white cart-table">
          <thead class="text-xs font-semibold uppercase text-white ">
            <tr>
              <th class="p-2">
                <div class="font-semibold text-left">Product</div>
              </th>
              {/* <th class="p-2">
                <div class="font-semibold text-left">Brand</div>
              </th> */}
              <th class="p-2">
                <div class="font-semibold text-left">Product Name</div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-left">Price</div>
              </th>
              {/* <th class="p-2">
              <div class="font-semibold text-center">Quantity</div>
            </th>
            <th class="p-2">
              <div class="font-semibold text-center">Final Price</div>
            </th> */}
            </tr>
          </thead>

          <tbody class="text-sm divide-y divide-white text-white ">
            {cart.map(({ itemId, item_Name, item_Price, item_Image }) => (
              <tr>
                {/* <td class="p-2">
                <input type="checkbox" class="w-5 h-5" value="id-1" />
              </td> */}
                <td class="p-2">
                  <img
                    className="w-24 h-16"
                    src={`https://restaurant-backend-ij3t.onrender.com/${item_Image}`}
                    alt=""
                  />
                </td>
                <td class="p-2">
                  <div class="font-medium ">{item_Name}</div>
                </td>

                {/* <td class="p-2">
                  <div class="text-left capitalize">{brand}</div>
                </td> */}

                <td class="p-2">
                  <div class="text-left font-medium ">{item_Price}</div>
                </td>
                {/* <td class="p-2">
                  <div class="flex justify-center">
                    <button onClick={() => handleDelete(itemId)}>
                      <svg
                        class="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-right text-white">
          Total Price: {calculateTotalPrice()} Taka
        </p>
        <button className="btn w-48 mt-4 text-white bg-[#101418] hover:bg-[#C6A87D] d">
          Place an order
        </button>
      </div>
    </div>
  );
};

export default Cart;
