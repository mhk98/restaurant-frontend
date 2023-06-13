import axios from "axios";

export const private_api = () => {
  return axios.create({
    baseURL: "https://restaurant-backend-ij3t.onrender.com/api/v1/",
    // timeout: 10000, //max_ response time in mile second
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const public_api = axios.create({
  baseURL: "https://restaurant-backend-ij3t.onrender.com/api/v1/",
});
