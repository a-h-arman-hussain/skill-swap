import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import userProfile from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FiLogIn } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => toast.success("Logout successful!"))
      .catch((err) => toast.error(`Logout failed: ${err.message}`));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="text-cyan-500 font-bold">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/my-profile" className="text-cyan-500 font-bold">
          My Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="text-cyan-500 font-bold">
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100 shadow-md fixed top-0 left-0 w-full z-[999]">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-cyan-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1000] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>

          <Link
            to="/"
            className="flex justify-center items-center text-2xl font-semibold gap-1"
          >
            <motion.img
              src={logo}
              alt="logo"
              className="h-10 w-10 rounded-full border-4"
              style={{
                borderImage:
                  "linear-gradient(90deg, #0e7490, #67e8f9, #0e7490) 1",
                borderImageSlice: 1,
              }}
              animate={{
                borderImageSource: [
                  "linear-gradient(90deg, #0e7490, #67e8f9, #0e7490)",
                  "linear-gradient(90deg, #67e8f9, #0e7490, #67e8f9)",
                  "linear-gradient(90deg, #0e7490, #67e8f9, #0e7490)",
                ],
              }}
              transition={{
                duration: 5,
                ease: "linear",
                repeat: Infinity,
              }}
            />
            <motion.span
              className="hidden sm:block font-bold bg-gradient-to-r from-cyan-700 via-cyan-300 to-cyan-700 bg-[length:200%_200%] text-transparent bg-clip-text"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              SkillSwap
            </motion.span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end gap-4 flex items-center">
          {user ? (
            <div className="relative group">
              <img
                className="h-10 w-10 rounded-full cursor-pointer"
                src={user.photoURL || userProfile}
                alt="User"
              />

              <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg p-3 text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <p className="font-semibold">{user.displayName || "User"}</p>
                <p className="text-sm">{user.email}</p>
              </div>
            </div>
          ) : (
            <motion.div
              style={{
                borderRadius: "0.375rem",
                display: "inline-block",
                background: "linear-gradient(90deg, #06b6d4, #8b5cf6, #ec4899)",
                backgroundSize: "200% 200%",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <Link
                to="/auth/login"
                className="inline-block px-4 py-2 text-white font-semibold"
              >
                <span className="flex justify-center items-center gap-1">
                  <FiLogIn />
                  Login
                </span>
              </Link>
            </motion.div>
          )}

          {user && (
            <motion.button
              onClick={handleLogout}
              className="btn text-white border-0 font-semibold bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-[length:200%_200%]"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <span className="flex justify-center items-center gap-1">
                <FiLogOut />
                Logout
              </span>
            </motion.button>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
