import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LogoutBtnHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
      navigate("/login");
    });
  };
  return (
    <button
      onClick={LogoutBtnHandler}
      className="bg-[#7634D9] text-white font-bold hover:text-black px-3 py-2 rounded-md"
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
