import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { login as sliceLogin } from "../store/authSlice";
import { Button, Input, logo, SocialLogin } from "../components/index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { ImSpinner2 } from "react-icons/im";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);

  const [showPass, setShowPass] = useState(false);

  const { register, handleSubmit, watch } = useForm();

  const handleLogin = async (data) => {
    setError("");
    setLoader(true);
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        console.log(userData);
        if (userData) {
          dispatch(sliceLogin(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-[#020617] rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <Link to="/" className="inline-block w-full max-w-[100px]">
            <img src={logo} className="w-16" alt="" />
            <h1 className=" text-[9px] text-center  text-slate-200">Blog</h1>
          </Link>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-slate-300">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        <form onSubmit={handleSubmit(handleLogin)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email *"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />

            <div>
              <label className="inline-block mb-1 pl-1" htmlFor="password">
                Password
              </label>
              <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#020617]  focus:border-white   duration-200 focus:shadow-[#7634D9] focus:shadow-md text-slate-300 border border-slate-700 w-full">
                <input
                  type={showPass ? "text" : "password"}
                  className="w-full bg-transparent outline-none"
                  placeholder="Enter your password"
                  {...register("password", { required: true })}
                  id="password"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPass((prev) => !prev)}
                >
                  {showPass ? <IoMdEye /> : <IoMdEyeOff />}
                </div>
              </div>
              {error && <h1 className="text-red-400 text-sm">{error}</h1>}
            </div>

            <Button className="w-full" type="submit">
              {loader ? (
                <ImSpinner2 className="mx-auto animate-spin" />
              ) : (
                "Login"
              )}
            </Button>
          </div>
          <SocialLogin />
        </form>
      </div>
    </div>
  );
};

export default Login;
