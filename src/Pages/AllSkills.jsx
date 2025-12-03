import React, { useState } from "react";
import useCard from "../hooks/useCard";
import SkillCard from "../Components/SkillCard";
import Loader from "../Components/Loader";
import Error from "./Error";
import { motion } from "framer-motion";
import SkillsMarquee from "../Components/SkillsMarquee";

const AllSkills = () => {
  const { skills, loading, error } = useCard();
  const [selectedCategory, setSelectedCategory] = useState("All");

  if (loading) return <Loader />;
  if (error) return <Error />;

  // Extract all unique categories
  const categories = ["All", ...new Set(skills.map((s) => s.category))];

  // Filter Skills
  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <div className="px-6 py-8 max-w-11/12 mx-auto">
      <title>Skill Swap | All Skills</title>

      <SkillsMarquee />

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

      <div className="flex flex-col gap-5">
        <div className="w-full flex justify-between items-center">
          <label className="text-xl font-semibold text-cyan-500">
            {selectedCategory === "All" ? "All Skills" : selectedCategory}{" "}
            <span className="text-sm">({filteredSkills.length})</span>
          </label>

          <select
            className="p-3 text-cyan-500 border-2 border-cyan-500 rounded-xl focus:ring-2 focus:ring-cyan-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat} className="text-black">
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* ===== SKILLS GRID BELOW ===== */}
        <div className="flex justify-center">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}

            {filteredSkills.length === 0 && (
              <p className="text-gray-400 text-center col-span-full text-lg">
                No skills found in this category.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSkills;
