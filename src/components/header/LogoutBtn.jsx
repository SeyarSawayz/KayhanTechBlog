import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const LogoutBtnHandler = () => {
    setLoader(true);
    authService.logout().then(() => {
      dispatch(logout());
      navigate("/login");
      setLoader(false);
    });
  };
  return (
    <button
      onClick={LogoutBtnHandler}
      className="bg-[#7634D9] text-white font-bold hover:text-black px-3 py-2 rounded-md"
    >
      {loader ? (
        <div className="flex items-center justify-center gap-3">
          <h1>Logout</h1>
          <ImSpinner2 className="animate-spin mx-auto" />
        </div>
      ) : (
        "Logout"
      )}
    </button>
  );
};

export default LogoutBtn;
