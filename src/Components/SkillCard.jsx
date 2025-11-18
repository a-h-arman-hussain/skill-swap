import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  const { skillId, skillName, image, rating, price } = skill;

  return (
    <motion.div
      className="card w-80 bg-base-100 shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <figure className="h-48">
        <img
          src={image}
          alt={skillName}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body gap-0 text-center">
        <h2 className="card-title text-lg font-bold justify-center whitespace-nowrap overflow-hidden truncate">
          {skillName}
        </h2>
        <div className="flex items-center justify-between mt-4">
          <span className="text-cyan-300 font-semibold">${price}</span>
          <span className="text-yellow-400 font-bold flex gap-1">
            <FaStar className="text-yellow-400" /> {rating}
          </span>
        </div>
        <div className="card-actions w-full mt-2">
          <Link to={`/skill-details/${skillId}`} className="w-full">
            <motion.div
              className="w-full text-center font-bold text-white py-3 rounded bg-gradient-to-r from-cyan-700 via-cyan-300 to-cyan-700 bg-[length:200%_200%]"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              View Details
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
