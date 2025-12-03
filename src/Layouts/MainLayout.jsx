import React from "react";
import NavBar from "../Components/NavBar";
import Banner from "../Components/Banner";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div>
      <header className="sticky top-0 z-50 shadow-md bg-white/60 backdrop-blur-md">
        <NavBar></NavBar>
      </header>
      <main className="bg-cyan-50">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
