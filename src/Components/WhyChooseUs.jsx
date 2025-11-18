import React from "react";
import { FaShieldAlt, FaUsers, FaRegClock } from "react-icons/fa";
import { GiSparkles } from "react-icons/gi";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaShieldAlt className="w-10 h-10 text-cyan-500" />,
      title: "Trusted & Secure",
      desc: "We prioritize your data security and provide a safe learning environment for all our users.",
    },
    {
      icon: <FaUsers className="w-10 h-10 text-cyan-500" />,
      title: "Expert Mentors",
      desc: "Learn directly from industry experts who bring real-world experience to every session.",
    },
    {
      icon: <GiSparkles className="w-10 h-10 text-cyan-500" />,
      title: "Skill-Based Learning",
      desc: "Focus on practical, project-based learning to enhance your job-ready skills efficiently.",
    },
    {
      icon: <FaRegClock className="w-10 h-10 text-cyan-500" />,
      title: "Flexible Schedule",
      desc: "Learn anytime, anywhere — designed for students and professionals alike.",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          className="text-center text-3xl mb-6 md:text-5xl font-bold mt-16 bg-gradient-to-r from-cyan-700 via-cyan-300 to-cyan-700 bg-[length:200%_200%] text-transparent bg-clip-text"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 5,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          Why Choose Us
        </motion.h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
