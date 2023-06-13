import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Dashboard from "./layout/Dashboard/Dashboard";
import ProductList from "./Components/Dashboard/ProductList";
import AddProduct from "./Components/Dashboard/AddProduct";
import { Toaster } from "react-hot-toast";
import Services from "./Components/Services";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RequireAuth from "./pages/RequireAuth";
import SearchValue from "./pages/SearchValue";
import FeedbackView from "./pages/FeedbackView";

function App() {
  return (
    <div className="bg-[#101418] p-4">
      <Navbar></Navbar>

      <Routes>
        <Route
          path="/"
          element={
            // <RequireAuth>
            <Services />
            // </RequireAuth>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/search" element={<SearchValue />}></Route>
        {/* <Route path="/service" element={<Services />}></Route> */}
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard" element={<ProductList />}></Route>
          <Route path="add-product" element={<AddProduct />}></Route>
          <Route path="feedback" element={<FeedbackView />}></Route>
        </Route>
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
