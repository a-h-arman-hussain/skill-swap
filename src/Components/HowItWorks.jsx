import React from "react";
import { FaUserPlus, FaSearch, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Create Your Profile",
      description:
        "Sign up and list the skills you can teach or the ones you want to learn.",
      icon: <FaUserPlus className="text-4xl text-cyan-500 mb-3" />,
    },
    {
      id: 2,
      title: "Browse & Connect",
      description:
        "Find people nearby who offer the skills you're interested in and connect with them.",
      icon: <FaSearch className="text-4xl text-cyan-500 mb-3" />,
    },
    {
      id: 3,
      title: "Exchange & Learn",
      description:
        "Meet up, share knowledge, and rate your experience to help others discover great teachers.",
      icon: <FaHandshake className="text-4xl text-cyan-500 mb-3" />,
    },
  ];

  return (
    <section className="py-16 px-6">
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
        How It Works
      </motion.h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {step.icon}
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {step.title}
            </h3>
            <p className="text-gray-500 text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
