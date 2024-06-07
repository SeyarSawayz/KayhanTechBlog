import { Header, Footer } from "./components";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Outlet } from "react-router-dom";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return !loading ? (
    <div className="min-h-screen w-full flex flex-wrap items-center justify-center gap-4 bg-[#1E293B]">
      <Header />
      <main className="min-h-[90vh] bg-[#1E293B] w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default App;
