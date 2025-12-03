import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const AuthLayout = () => {
  return (
    <div>
      <header className="sticky top-0 z-50 shadow-md bg-cyan-100/60 backdrop-blur-md">
        <NavBar></NavBar>
      </header>
      <main className="pt-20 pb-5 bg-cyan-50">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AuthLayout;
