import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { styles } from "../../styles/styles.js";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server.js";
import { toast } from "react-toastify";

const ShopLogin = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`${server}/seller/login-shop`, {
      email,
      password, // provide withcred property true else cookie will not come to frontend 
    }, {withCredentials: true}).then((res) => {
      toast.success("Login done Successfully!")
      navigate("/")
      // this below for relaoding after login to setup auth correctly and displying all your data correctly 
      window.location.reload(true);
    }).catch((err) => {
      toast.error(err.response.data.message)
    })
  }

  return (
    <div className=" min-h-screen bg-gray-100 flex flex-col sm:py-12 justify-center lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Login to your shop
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="text-gray-500 font-medium block"
              ></label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Enter the valid email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full block appearance-none px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-gray-500 font-medium block"
              ></label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  placeholder="Enter the valid password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full block appearance-none px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />

                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
              <div className={`${styles.noramlFlex} justify-between `}>
                <div className={`${styles.noramlFlex} mt-5`}>
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember-me"
                    className="h-4 w-4 text-blue-500 border-gray-500 focus:ring-blue-500 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-gray-900 text-sm"
                  >
                    remember me
                  </label>
                </div>
                <div className="text-sm mt-5">
                  <a
                    href="#"
                    className=" font-medium text-blue-600 hover:text-blue-500"
                  >
                    forget your password?
                  </a>
                </div>
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="group relative w-full h-[40px]  flex justify-center  py-2 px-4 text-sm border border-med rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
              <div className={`${styles.noramlFlex} w-full mt-5`}>
                <h4>Not have any account?</h4>
                <Link to="/shop-create" className="text-blue-600 pl-2">
                  Sign Up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShopLogin;
