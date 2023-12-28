import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSigninForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const toggleSignInform = () => {
    setIsSignInForm(!isSigninForm);
  };

  const handleButtonClick = () => {
    // Validate the form data
    let message = null;
    try{
      if(isSigninForm){
        message = checkValidData(email.current.value, password.current.value);
      }else{
        message = checkValidData(email.current.value, password.current.value,fullName.current.value);
      }
     
    }catch(error){
      console.log(error);
      message = "Please provide input details."
    }
    setErrorMessage(message);
  };

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-1/4 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSigninForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-700"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-700"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700"
        ></input>
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className=" p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSigninForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer " onClick={toggleSignInform}>
          {isSigninForm
            ? "New to Netflix? Sign Up Now"
            : "Already registred ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
