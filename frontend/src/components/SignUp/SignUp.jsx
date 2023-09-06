import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { styles } from "../../styles/styles.js";
import { Link, useNavigate} from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import {server} from "../../server";
import { toast } from "react-toastify";


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const config = { headers: { "Content-type": "multipart/form-data" } };

    // creating empty form data object
    const newForm = new FormData();
    newForm.append("file", avatar);
    newForm.append("name", name);
    newForm.append("email", email);
    newForm.append("password", password);

    axios
      .post(`${server}/user/create-user`, newForm, config)
      .then((res) => {
        if(res.data.success === true){
          toast.success(res.data.message);
          // here we are setting null after registering user 
          setName("");
          setPassword("")
          setEmail("")
          setAvatar()
        }
      })
      .catch((error) => {
        console.log(error.response.data.message);  // Log the error message
        toast.error(error.response.data.message);
        
      });      
  };

  return (
    <div className=" min-h-screen bg-gray-100 flex flex-col sm:py-12 justify-center lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-3xl text-center font-bold text-gray-900">
          Register as a new user
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="text-gray-500 font-medium block">
                Full name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="w-full block appearance-none px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-gray-500 font-medium block"
              >
                Email address
              </label>
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
              >
                Password
              </label>
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

              <div>
                <label
                  htmlFor="avatar"
                  className="text-sm text-gray-500 font-medium block mt-5"
                ></label>
                <div className="mt-2 flex items-center">
                  <span className="inline-block h-10 w-10 overflow-hidden rounded-full">
                    {avatar ? (
                      <img
                        src={URL.createObjectURL(avatar)}
                        alt="avatar"
                        className="h-full w-full object-cover rounded-full"
                      />
                    ) : (
                      <RxAvatar className="h-10 w-10" />
                    )}
                  </span>
                  <label
                    htmlFor="file-input"
                    className="ml-5 flex items-center justify-center px-4 py-2 border-gray-300 border rounded-md shadow-md text-sm font-medium text-gray-500 bg-white hover:bg-gray-50 cursor-pointer"
                  >
                    <span>Upload a file</span>
                    <input
                      type="file"
                      name="avatar"
                      id="file-input"
                      accept=".jpg,.jpeg, .png"
                      className="sr-only"
                      onChange={handleFileInputChange}
                    />
                  </label>
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
                <h4>Already have an account?</h4>
                <Link to="/login" className="text-blue-600 pl-2">
                  Sign In
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
