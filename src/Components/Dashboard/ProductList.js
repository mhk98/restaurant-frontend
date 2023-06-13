import React, { useEffect, useState } from "react";
import axios from "axios";
import { private_api, public_api } from "../../Endpoints/http.service";

// import { toast } from "react-hot-toast";

const ProductList = () => {
  const [items, setItems] = useState([]);

  console.log("items", items);

  const getProduct = async () => {
    const res = await public_api.get("/item");
    setItems(res.data);
  };
  useEffect(() => {
    // fetch("https://restaurant-backend-ij3t.onrender.com/api/v1/item")
    //   .then((res) => res.json())
    //   .then((data) => setItems(data.data));
    getProduct();
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      const url = `https://restaurant-backend-ij3t.onrender.com/api/v1/item/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = items.filter((item) => item.itemId !== id);
          setItems(remaining);
        });
    }
  };

  return (
    <div class="flex flex-col justify-center items-center h-full w-full ">
      <div class="w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200">
        <header class="px-5 py-4 border-b border-gray-100">
          <div class="font-semibold text-gray-800">Products</div>
        </header>

        <div class="overflow-x-auto p-3">
          <table class="table-auto w-full">
            <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
              <tr>
                <th></th>
                <th class="p-2">
                  <div class="font-semibold text-left">Product Name</div>
                </th>
                {/* <th class="p-2">
                  <div class="font-semibold text-left">Brand</div>
                </th> */}
                <th class="p-2">
                  <div class="font-semibold text-left">In Stock</div>
                </th>
                <th class="p-2">
                  <div class="font-semibold text-left">Price</div>
                </th>
                <th class="p-2">
                  <div class="font-semibold text-center">Action</div>
                </th>
              </tr>
            </thead>

            <tbody class="text-sm divide-y divide-gray-100">
              {items.map(({ itemId, item_Name, ingredients, item_Price }) => (
                <tr>
                  <td class="p-2">
                    <input type="checkbox" class="w-5 h-5" value="id-1" />
                  </td>
                  <td class="p-2">
                    <div class="font-medium text-gray-800">{item_Name}</div>
                  </td>
                  {/* <td class="p-2">
                    <div class="text-left capitalize">{brand}</div>
                  </td> */}
                  <td class="p-2">
                    <div class="text-left">
                      {/* {status  ? (
                        <p className="text-green-500 font-medium">Available</p>
                      ) : (
                        <p className="text-red-500 font-medium">Stock out</p>
                      )} */}

                      <p className="text-green-500 font-medium">Available</p>
                    </div>
                  </td>
                  <td class="p-2">
                    <div class="text-left font-medium text-indigo-500">
                      {item_Price}
                    </div>
                  </td>
                  <td class="p-2">
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
