import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div>
      <header className="sticky top-0 z-50 shadow-md bg-cyan-100/60 backdrop-blur-md">
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
