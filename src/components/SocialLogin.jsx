import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import authService from "../appwrite/auth";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const navigate = useNavigate();
  const googleAuth = (e) => {
    e.preventDefault();
    authService.googleAuth(
      "http://localhost:5173",
      "http://localhost:5173/login"
    );
  };
  return (
    <div>
      <div className="mt-16 w-full">
        <h1>Signup with your social network</h1>
        <div
          className="w-full flex items-center justify-center flex-col mt-3"
          onClick={(e) => googleAuth(e)}
        >
          <div className="w-full border border-slate-700 flex items-center justify-center gap-3 cursor-pointer py-3 rounded-md font-bold hover:bg-red-400">
            <FaGoogle />
            <h1>Continue with Google</h1>
          </div>
        </div>

        <div className="w-full flex items-center justify-center flex-col mt-3">
          <div className="w-full border border-slate-700 flex items-center justify-center gap-3 cursor-pointer py-3 rounded-md font-bold hover:bg-blue-600">
            <FaFacebook />
            <h1>Continue with Facebook</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
