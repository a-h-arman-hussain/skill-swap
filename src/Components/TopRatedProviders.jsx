import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import useCard from "../hooks/useCard";
import Loader from "../Components/Loader";

const TopRatedProviders = () => {
  const { skills, loading, error } = useCard();

  if (loading) return <Loader />;

  if (error)
    return (
      <p className="text-center text-red-500 font-semibold my-6">
        Failed to load data😢
      </p>
    );

  const topRated = [...skills].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <section className="my-12 px-6">
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
        Top Rated Providers
      </motion.h1>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-stretch">
        {topRated.map((p, index) => (
          <motion.div
            key={p.skillId}
            className="card w-full md:w-auto bg-base-100 shadow-md hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <figure className="h-40">
              <img
                src={p.image}
                alt={p.providerName}
                className="object-cover h-full w-full"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-semibold">{p.providerName}</h2>
              <p className="text-sm text-gray-500">{p.skillName}</p>
              <div className="flex justify-center items-center gap-1 mt-2">
                <FaStar className="text-yellow-400" />
                <span className="font-semibold">{p.rating}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedProviders;
