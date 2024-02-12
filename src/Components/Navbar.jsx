import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formDataSignUp, setFormDataSignUp] = useState({
    email: '',
    fname: '',
    username: '',
    password: '',
  });

  const [formDataLogin, setFormDataLogin] = useState({
    username: '',
    password: '',
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleChangeSignUp = (e) => {
    const { name, value } = e.target;
    setFormDataSignUp((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setFormDataLogin((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignUp = () => {
    // Simple form validation
    if (!formDataSignUp.email || !formDataSignUp.fname || !formDataSignUp.username || !formDataSignUp.password) {
      alert('Please fill in all fields for sign up.');
      return;
    }

    // Log form data to the console
    console.log('Sign Up Form Data:', formDataSignUp);

    // Perform additional actions (e.g., send data to server, etc.)
    // ...

    // Reset the form
    resetFormSignUp();
  };

  const handleLogin = () => {
    // Simple form validation
    if (!formDataLogin.username || !formDataLogin.password) {
      alert('Please fill in all fields for login.');
      return;
    }

    // Log form data to the console
    console.log('Login Form Data:', formDataLogin);

    // Perform additional actions (e.g., authentication, etc.)
    // ...

    // Reset the form
    resetFormLogin();
  };

  const resetFormSignUp = () => {
    setFormDataSignUp({
      email: '',
      fname: '',
      username: '',
      password: '',
    });
  };

  const resetFormLogin = () => {
    setFormDataLogin({
      username: '',
      password: '',
    });
  };

  return (
    <>
      <div className="bg-gray-800 text-white fixed-top mb-0">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <Link to="/" className="text-white">
            USBEEN
          </Link>
          <button className="lg:hidden" type="button" onClick={toggleMenu}>
            {/* You can add an icon or some text for the button */}
            <span>Menu</span>
          </button>
          <div
            className={`lg:flex lg:flex-grow lg:items-center lg:justify-center lg:w-auto ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="collapsibleNavId"
          >
            <ul className={`flex flex-col lg:flex-row list-none `}>
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="btn mx-20  ">
            <button
              type="button"
              className="btn bg-slate-500 text-white  "
              data-toggle="modal"
              data-target="#myModal"
            >
              Sign in
            </button>
            <div />
          </div>
        </nav>
      </div>
      {/* modal start  */}
      <div className="modal container text-center  " id="myModal">
        <div className="modal-dialog modal-dialog  ">
          <div className="modal-content container ">
            {/* <!-- Modal Header --> */}
            <div className="modal-header">
              <h1 className=" h1 modal-title text-slate-800 font-sans ">Playground</h1>
             
            </div>

            {/* <!-- Modal body --> */}
            <div className="modal-body ">
              <h3 className="text text-3xl text-slate-700">
                Signup to create new account.
              </h3>
              <button
                type="button"
                className="btn bg-blue-500 hover:bg-blue-600  active:bg-blue-300 text-white my-3 inline-block rounded-2xl w-80 text-center"
              >
             <div className="flex items-center justify-center ">
             <FaFacebookSquare/> &nbsp; Log in with Facebook 
             </div>
              </button>
              <p className="p text-slate-400">_________________________OR_____________________________</p>
              <form action="" method="post">
              <div className="form-group mt-4">
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="Mobile Number or Email"
            value={formDataSignUp.email}
            onChange={handleChangeSignUp}
          />
          <input
            type="text"
            className="form-control my-2"
            name="fname"
            id="fname"
            placeholder="Fullname"
            value={formDataSignUp.fname}
            onChange={handleChangeSignUp}
          />
          <input
            type="text"
            className="form-control my-2"
            name="username"
            id="Username"
            placeholder="Username"
            value={formDataSignUp.username}
            onChange={handleChangeSignUp}
          />
          <input
            type="password"
            name="password"
            id="pass"
            className="form-control"
            placeholder="Password"
            value={formDataSignUp.password}
            onChange={handleChangeSignUp}
          />
        </div>

              </form>
              <p className="p text-sm text-slate-600">By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
              <button
                type="button"
                className="btn bg-blue-500 hover:bg-blue-600  active:bg-blue-300 text-white my-3 inline-block rounded-2xl w-80 text-center"
                onClick={handleSignUp}
              >
             Sign in
              </button>
              <p className="inline-block">
                Have an account?
              </p>
                <button type="button" className="btn btn-link pt-0" data-toggle="modal"
              data-target="#login">Login</button>
              
            </div>
          </div>
        </div>
      </div>

        {/* Login modal */}
        <div className="modal container text-center" id="login">
        <div className="modal-dialog modal-dialog  ">
          <div className="modal-content container pb-44 ">
            {/* <!-- Modal Header --> */}
            <div className="modal-header">
              <h1 className=" h1 modal-title font-sans ">Playground</h1>
            </div>

            {/* <!-- Modal body --> */}
            <div className="modal-body flex flex-col items-center justify-center ">
              <form action="" method="post">
                <div className="form-group mt-4 w-72">
                  <input
                    type="text"
                    className="form-control my-2 border-gray-400"
                    name="username"
                    id="Username"
                    placeholder="Username"
                    value={formDataLogin.username}
                    onChange={handleChangeLogin}
                  />
                 <input
            type="password"
            name="password"
            id="pass"
            className="form-control "
            placeholder="Password"
            value={formDataLogin.password}
            onChange={handleChangeLogin}
          />
                </div>
              </form>
              <button
                type="button"
                className="btn bg-blue-500 hover:bg-blue-600 active:bg-blue-300 text-white my-3 inline-block rounded-2xl w-80 text-center"
                onClick={handleLogin}
              >
                Login
              </button>
              <p className="text text-slate-400">_________________________OR_____________________________</p>
              <div className=" btn flex items-center justify-center text-blue-900 cursor-pointer font-bold  ">
                <FaFacebookSquare/> &nbsp; Log in with Facebook 
              </div>
              <button className="my-3">
                <p className="p " >Forgot Password?</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      
     
    </>
  );
}
