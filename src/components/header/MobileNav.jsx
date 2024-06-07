import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutBtn from "./LogoutBtn";
import { IoClose } from "react-icons/io5";

const MobileNav = () => {
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();

  const authStatus = useSelector((state) => state.auth.status);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <>
      <div
        className="lg:hidden block z-40"
        onClick={() => setShowNav((prev) => !prev)}
      >
        {showNav ? <IoClose className="text-3xl" /> : <GiHamburgerMenu />}
        {showNav && (
          <div className="p-6 absolute top-12 right-0 mx-4  my-2 min-w-[140px] rounded bg-[#020617] border border-slate-500 shadow-lg sidebar ">
            <ul className="flex flex-col gap-5 items-center">
              {navItems.map((item) =>
                item.active ? (
                  <li
                    key={item.name + "MobileNav"}
                    onClick={() => {
                      navigate(item.slug);
                      setShowNav(false);
                    }}
                    className="text-zinc-50 hover:text-zinc-100"
                  >
                    {item.name}
                  </li>
                ) : null
              )}
              {authStatus && <LogoutBtn />}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
