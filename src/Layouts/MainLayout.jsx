import React from "react";
import NavBar from "../Components/NavBar";
import Banner from "../Components/Banner";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <main className="bg-cyan-50 py-15">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
