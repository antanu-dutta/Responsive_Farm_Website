import React, { useRef } from "react";
import { Link } from "react-router-dom";
import CountryCode from "../Data Assets/CountryCode";

function LoginPage() {
  const onSubmitHandle = (e) => {
    e.preventDefault();
  };
  return (
    <div id="login">
      <div className="container">
        <div className="lg:flex lg:justify-center">
          <div className="login-container lg:w-[60%] py-2">
            <h2 className="text-gray-600 text-sm font-semibold mb-5">
              <Link to="/">HOME</Link>/ ACCOUNT
            </h2>
            <div className="login-from-container">
              <h2 className="text-center text-2xl font-semibold mb-5">
                Login/Sign up
              </h2>
              <form action="" className="mb-5" onSubmit={onSubmitHandle}>
                <div className="flex justify-between items-center mb-5">
                  <div className="country-code w-[35%] border-2 p-4 center bg-white rounded-lg text-sm font-normal">
                    <CountryCode />
                  </div>
                  <div className="input-field w-[60%] border-2 p-4 bg-white rounded-lg">
                    <input
                      type="number"
                      placeholder="Phone Number"
                      className="w-full border-none outline-none text-sm font-medium"
                    />
                  </div>
                </div>
                <button className="bg-primary text-white py-3 px-8 rounded-xl">
                  Get OTP
                </button>
              </form>
              <div className="checkbox">
                <input type="checkbox" />
                <span className="ms-3 text-gray-600">Remember me</span>
              </div>
              <span>Don't have an account yet?</span>
              <div className="sing-up-container mt-5">
                <h4 className="text-center mb-3 text-gray-700">
                  Or continue with
                </h4>
                <div className="rounded-lg border center mb-4 py-2 gap-3">
                  <img
                    src="https://loginviaotp.com/static/img/google_img.webp"
                    alt="google-img"
                    className="w-[30px]"
                  />
                  <span>Sign in with Google</span>
                </div>
                <div className="rounded-lg border center py-2 gap-3">
                  <img
                    src="https://loginviaotp.com/static/img/facebook_img.png"
                    alt="facebook-logo"
                    className="w-[30px]"
                  />
                  <span>Sign in with Facebook</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
