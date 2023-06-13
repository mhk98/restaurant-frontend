import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import { BiSearchAlt } from "react-icons/bi";
import { public_api } from "../Endpoints/http.service";
import { useState } from "react";
import { useEffect } from "react";
import Home from "../pages/Home";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const navigate = useNavigate();

  const [key, setKey] = useState("");
  const [value, setValue] = useState([]);
  console.log("value", value);
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  const searchResult = async () => {
    const res = await public_api.get(`item/search/${key}`);

    // console.log("value", key);
    setValue(res.data);
  };

  useEffect(() => {
    searchResult();
  }, []);

  return (
    // <nav className="h-14 bg-zinc-600 rounded-full max-w-7xl mx-auto px-5 ">
    //   <ul className="h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-white">
    //     <h1>Moon Tech</h1>

    //     <li className="flex bg-white mx-auto h-8 w-full max-w-lg  rounded-full pr-3">
    //       <input
    //         className="h-8 rounded-full w-full text-sm border-0 focus:ring-0 outline-none"
    //         type="text"
    //         name="search"
    //         id="search"
    //       />
    //       <button>
    //         <BiSearchAlt />
    //       </button>
    //     </li>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/service">Service</Link>
    //     </li>
    //     <li>
    //       <Link to="/about">About</Link>
    //     </li>
    //     <li>
    //       <Link to="/dashboard">Dashboard</Link>
    //     </li>
    //     {/* <Link to="/">
    //       <li title="Wishlist" className="bg-indigo-500 p-2 rounded-full">
    //         <IoIosListBox className="text-white" />
    //       </li>
    //     </Link> */}
    //     <Link to="/cart">
    //       <li title="cart" className="bg-white p-2 rounded-full">
    //         <BsFillCartFill className="text-[#080B0E] " />
    //       </li>
    //     </Link>
    //   </ul>
    // </nav>

    <div>
      <div className="navbar bg-zinc-600 lg:rounded-full">
        <div className="navbar-start  ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 bg-zinc-600 overflow-visible "
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              {role === "admin" && (
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              )}
              {token ? (
                <li className="hover:text-blue-600">
                  <Link onClick={logout}>Log Out</Link>
                </li>
              ) : (
                <li className="hover:text-blue-600">
                  <a href="/login">login</a>
                </li>
              )}

              <Link
                to="/cart"
                className="flex justify-between items-center ml-4"
              >
                <BsFillCartFill className="text-white text-xl" />
              </Link>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl text-white">
            Halal Khabar
          </Link>
        </div>
        <div className="navbar-center">
          <li className="flex bg-white mx-auto h-8 w-full max-w-lg  rounded-full pr-3">
            <input
              className="h-8 rounded-full lg:w-80 text-sm border-0 focus:ring-0 outline-none"
              onChange={(e) => setKey(e.target.value)}
              type="text"
              name="search"
              id="search"
            />
            <button onClick={searchResult}>
              <BiSearchAlt />
            </button>
          </li>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white ">
            <li>
              <Link to="/">Home</Link>
            </li>

            {role === "admin" && (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}

            {/* {token ? (
            <li>
              <Link to="/login" onClick={logout}>
                LogOut
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )} */}

            {token ? (
              <li className="hover:text-blue-600">
                <Link onClick={logout}>Log Out</Link>
              </li>
            ) : (
              <li className="hover:text-blue-600">
                <a href="/login">login</a>
              </li>
            )}

            <Link to="/cart" className="flex justify-between items-center">
              <BsFillCartFill className="text-white text-xl" />
            </Link>
          </ul>
        </div>
      </div>

      {value.map((searchValue) => (
        <Home key={searchValue.itemId} searchValue={searchValue} />
      ))}
    </div>
  );
};

export default Navbar;
