import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute w-full h-full">
        <img
          className=" relative w-full h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo-background"
        />
      </div>
      <form className="absolute w-1/4 p-12 bg-black my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full"
        ></input>
        <button className=" p-4 my-4 bg-red-700 w-full">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
