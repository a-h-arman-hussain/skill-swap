import React, { useContext, useState } from "react";
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
  const [open, setOpen] = useState(false);

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
        <NavLink to="/all-skills" className="text-cyan-500 font-bold">
          All Skills
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="text-cyan-500 font-bold">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="text-cyan-500 font-bold">
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog" className="text-cyan-500 font-bold">
          Blog
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar max-w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="lg:hidden text-cyan-500 mr-2 cursor-pointer"
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
              className="menu menu-sm dropdown-content bg-cyan-100/70 border-2 border-cyan-500 rounded-box mt-6 w-52 p-2 shadow"
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

        <div className="navbar-end">
          {user ? (
            <div className="relative">
              {/* Profile Image */}
              <img
                onClick={() => setOpen((prev) => !prev)}
                className="h-10 w-10 rounded-full cursor-pointer"
                src={user.photoURL || userProfile}
                alt="User"
              />

              {/* Dropdown */}
              {open && (
                <div className="absolute right-0 mt-3 w-56 shadow-lg rounded-lg p-4 z-50 bg-cyan-100/70 border-2 border-cyan-500">
                  <div className="flex items-center gap-3">
                    <img
                      src={user.photoURL || userProfile}
                      className="h-10 w-10 rounded-full border border-cyan-700"
                      alt="profile"
                    />
                    <div className="w-[150px] overflow-hidden">
                      <p className="font-semibold text-cyan-700 truncate">
                        {user.displayName || "User"}
                      </p>

                      <p className="text-sm text-cyan-900 truncate whitespace-nowrap">
                        {user.email}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 border-t pt-3 space-y-2">
                    <NavLink
                      to="/my-profile"
                      className={({ isActive }) =>
                        `block text-sm px-2 py-1 rounded-md transition font-semibold ${
                          isActive
                            ? "bg-cyan-300 text-cyan-900"
                            : "text-cyan-600 hover:bg-cyan-50"
                        }`
                      }
                    >
                      View Profile
                    </NavLink>

                    <motion.button
                      onClick={handleLogout}
                      className="text-white border-0 w-full font-semibold bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-[length:200%_200%] px-2 py-1 rounded-md"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 5,
                        ease: "linear",
                        repeat: Infinity,
                      }}
                    >
                      <span className="flex items-center gap-1">
                        <FiLogOut />
                        Logout
                      </span>
                    </motion.button>
                  </div>
                </div>
              )}
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
        </div>
      </div>
    </>
  );
};

export default NavBar;
