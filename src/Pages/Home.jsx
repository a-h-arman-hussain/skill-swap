import React from "react";
import Banner from "../Components/Banner";
import TopRatedProviders from "../Components/TopRatedProviders";
import HowItWorks from "../Components/HowItWorks";
import { Link } from "react-router";
import SkillsCard from "./SkillsCard";
import WhyChooseUs from "../Components/WhyChooseUs";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <title>Skill Swap | Home</title>
      <Banner></Banner>
      <motion.h1
        className="text-center text-4xl md:text-5xl font-bold mt-16 bg-gradient-to-r from-cyan-700 via-cyan-300 to-cyan-700 bg-[length:200%_200%] text-transparent bg-clip-text"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        Top Skills in Your Community
      </motion.h1>
      <p className="text-center text-gray-600 text-base md:text-lg mt-3 mb-5 max-w-2xl mx-auto">
        Discover the most in-demand skills people are sharing and learning near
        you.
      </p>

      <SkillsCard></SkillsCard>
      <div className="flex justify-center items-center mt-5">
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
            to="/all-skills"
            className="inline-block px-6 py-2 text-white font-semibold"
          >
            All Skills
          </Link>
        </motion.div>
      </div>
      <TopRatedProviders></TopRatedProviders>
      <HowItWorks></HowItWorks>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
