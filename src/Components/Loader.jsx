import React from "react";
import logo from "../assets/logo.png";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <div className="relative w-16 h-16 mb-6">
        <div className="absolute inset-0 border-4 border-cyan-500 border-t-transparent border-solid rounded-full animate-spin"></div>

        <img
          src={logo}
          alt="Logo"
          className="absolute top-1/2 left-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2 animate-pulse opacity-100"
        />
      </div>

      {/* Text */}
      <p className="text-lg font-semibold text-gray-600">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loader;
