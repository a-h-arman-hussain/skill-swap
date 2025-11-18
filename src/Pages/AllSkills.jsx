import React from "react";
import useCard from "../hooks/useCard";
import SkillCard from "../Components/SkillCard";
import Loader from "../Components/Loader";
import Error from "./Error";
import { motion } from "framer-motion";
import SkillsMarquee from "../Components/SkillsMarquee";


const AllSkills = () => {
  const { skills, loading, error } = useCard();

  if (loading) return <Loader></Loader>;
  if (error) return <Error></Error>;

  return (
    <div className="px-6 py-8">
      <title>Skill Swap | All Skills</title>
      <SkillsMarquee></SkillsMarquee>
      <div className="text-center mb-10">
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
          Explore All Available Skills
        </motion.h1>
        <p className="text-center text-gray-600 text-base md:text-lg mt-3 mb-10 max-w-2xl mx-auto">
          Browse through every skill our community members are offering and find
          the perfect one for you.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllSkills;
