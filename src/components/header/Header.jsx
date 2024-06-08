import { LogoutBtn, Container } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logo } from "../index";
import MobileNav from "./MobileNav";
import authService from "../../appwrite/auth";
import { useEffect, useState } from "react";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const [username, SetUsername] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsername = async () => {
      const data = await authService.getCurrentUser();
      if (data) {
        SetUsername(data.name);
      }
    };
    fetchUsername();
  }, [authStatus]);

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
    <header className=" py-3 shadow bg-[#020617] text-zinc-50 sticky top-0 h-20 w-full z-40">
      <Container>
        <nav className="flex justify-between mx-2 items-center">
          <div className="flex items-center justify-between gap-4">
            <div className="mr-4 hover:scale-105 duration-200 ease-in-out">
              <Link to="/">
                <img src={logo} className="w-24" alt="KayhanTech Blog Logo" />
                <h1 className="text-center text-[10px] lg:text-xs text-zinc-50 lg:font-bold">
                  Blog
                </h1>
              </Link>
            </div>
            {authStatus && username && (
              <div className=" flex items-start justify-start">
                <Link to="/"> Welcome, {username.toUpperCase()}</Link>
              </div>
            )}
          </div>

          <ul className="hidden lg:flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name + "nav"}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-6 py-2 duration-200 rounded-full hover:text-zinc-300"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
          <MobileNav />
        </nav>
      </Container>
    </header>
  );
};

export default Header;
