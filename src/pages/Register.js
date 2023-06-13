import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    console.log("data", data);
    try {
      const res = await axios.post(
        "https://restaurant-backend-ij3t.onrender.com/api/v1/user/signup",
        {
          email: data.email,
          password: data.password,
        }
      );

      if (res) {
        toast.success("Successfully Complete Resigtration");
        navigate("/login");
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <section className="login bg-gray-50 h-screen">
        <div className="overlay h-screen flex flex-col items-center justify-center px-2 py-2 mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg shadow mt-8 mb-8 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center leading-tight tracking-tight text-gray-900 md:text-2xl">
                Please Register
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="form-control w-full">
                  <label className="label">
                    <span className="font-medium">Email</span>
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                    name="email"
                    {...register("email", {
                      required: "this field is required.",
                    })}
                  />
                </div>

                <div>
                  <label className="font-medium" htmlFor="password">
                    Password
                  </label>
                  <div className="relative w-full mt-2">
                    <div className="absolute inset-y-0 right-0 flex items-center px-2">
                      <input
                        className="hidden js-password-toggle"
                        id="toggle"
                        type="checkbox"
                      />
                      <label
                        className="px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label"
                        htmlFor="toggle"
                        onClick={togglePasswordVisiblity}
                      >
                        {/* {(passwordShown ? false : true) ? (
                        <>{EyeSlash}</>
                      ) : (
                        <>{eye}</>
                      )} */}
                      </label>
                    </div>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                      type={passwordShown ? "text" : "password"}
                      name="password"
                      id="password"
                      {...register("password", {
                        required: "this field is required.",
                        pattern: {
                          value: /^[A-Za-z\d@$!%*#?&^_-]{6,50}$/,
                          message: "password length minimun 6 character.",
                        },
                      })}
                    />
                  </div>
                  {errors.password && (
                    <div className="text-red-600 invalid-feedback capitalize mt-2">
                      {errors.password.message}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full btn text-white btn-blue bg-[#101418]  border-none hover:bg-[#C6A87D]  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Register
                </button>

                <p className="text-sm font-light text-gray-500">
                  If you already registered?
                  <Link
                    to="/login"
                    className="ml-2 text-[#101418] font-medium hover:underline"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
