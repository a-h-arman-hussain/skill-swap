import React from "react";
import Marquee from "react-fast-marquee";
import useCard from "../hooks/useCard";
import { motion } from "framer-motion";
import { Link } from "react-router";

const SkillsMarquee = () => {
  const { skills } = useCard();

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-black py-12 px-4 rounded-3xl overflow-hidden shadow-2xl border border-gray-800">
      {/* glowing overlay */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.3),transparent_70%)]"></div>
      <motion.h1
        className="text-center text-4xl md:text-5xl font-extrabold mb-10 bg-gradient-to-r from-cyan-700 via-cyan-300 to-cyan-700 bg-[length:200%_200%] text-transparent bg-clip-text drop-shadow-lg"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        Explore Trending Skills
      </motion.h1>
      <Marquee
        pauseOnHover={true}
        speed={55}
        gradient={false}
        className="space-x-6"
      >
        {skills.map((skill) => (
          <Link to={`/skill-details/${skill.skillId}`}>
            <div
              key={skill.skillId}
              className="group relative w-80 min-w-[20rem] mx-6 bg-gradient-to-br from-cyan-500/30 via-blue-600/20 to-purple-700/20 border border-cyan-400/20 hover:border-cyan-400/60 rounded-2xl shadow-lg hover:shadow-cyan-500/30 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              <img
                src={skill.image}
                alt={skill.skillName}
                className="w-full h-48 object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-700"
              />
              <div className="p-5 backdrop-blur-md bg-black/50 rounded-b-2xl">
                <h3
                  className={`text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300 ${
                    skill.skillName.length > 25 ? "text-sm" : "text-lg"
                  }`}
                >
                  {skill.skillName}
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  by <span className="text-cyan-400">{skill.providerName}</span>
                </p>
                <p className="text-xs text-gray-500 mt-1 italic">
                  Category: {skill.category}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-cyan-300 font-semibold">
                    ${skill.price}
                  </span>
                  <span className="text-yellow-400 font-bold">
                    ⭐ {skill.rating}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default SkillsMarquee;
