import React, { useEffect, useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useCard from "../hooks/useCard";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Loader from "./Loader";
import { FiLogIn } from "react-icons/fi";

const Banner = () => {
  const { skills, loading } = useCard();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (skills.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % skills.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [skills]);

  if (loading) return <Loader></Loader>;

  return (
    <div className="relative h-[300px]  md:h-[400px] max-w-11/12 mx-auto overflow-hidden">
      <AnimatePresence>
        {skills.length > 0 && (
          <motion.div
            key={skills[currentIndex].skillId}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${skills[currentIndex].image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <div className="max-w-md text-white z-10">
          <motion.h1
            className="text-center text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-700 via-cyan-300 to-cyan-700 bg-[length:200%_200%] text-transparent bg-clip-text"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            Hello there
          </motion.h1>
          <p>
            SkillSwap: A local platform to learn, teach, and exchange skills
            with people in your community. Share your expertise or discover new
            talents around you!
          </p>

          {!user ? (
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
                to="/auth/register"
                className="inline-block px-4 py-2 text-white font-semibold"
              >
                <span className="flex justify-center items-center gap-1">
                  <FiLogIn />
                  Get Started
                </span>
              </Link>
            </motion.div>
          ) : (
            <p className="text-xl md:text-2xl font-bold py-2">
              <motion.span
                animate={{
                  color: [
                    "#00FFFF",
                    "#FF00FF",
                    "#FFFF00",
                    "#00FF00",
                    "#FF0000",
                    "#00FFFF",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                }}
              >
                Welcome back, {user.displayName || "User"}!
              </motion.span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
