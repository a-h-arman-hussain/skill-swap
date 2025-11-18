import React from "react";
import { useParams, Link } from "react-router";
import useCard from "../hooks/useCard";
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";
import Error from "./Error";
import Loader from "../Components/Loader";
import { motion } from "framer-motion";

const SkillDetails = () => {
  const { skillId } = useParams();
  const { skills, loading, error } = useCard();

  if (loading) return <Loader></Loader>;
  if (error) return <Error></Error>;

  const skill = skills.find((s) => s.skillId === Number(skillId));

  if (!skill) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-lg text-gray-600 mb-4">Skill not found.</p>
        <Link to="/" className="btn bg-cyan-500 text-white">
          Back to Skills
        </Link>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully!");
    e.target.reset();
  };

  const {
    skillName,
    providerName,
    providerEmail,
    description,
    price,
    rating,
    slotsAvailable,
    image,
    category,
  } = skill;

  return (
    <div className="py-16 px-6 md:px-20 bg-gray-50 min-h-screen">
      <title>Skill Swap | Skill Details</title>
      <section className="flex flex-col md:flex-row items-start justify-center gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={image}
            alt={skillName}
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Details & Form Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-cyan-600">{skillName}</h1>
            <p className="text-lg text-gray-700">
              By <span className="font-semibold">{providerName}</span>
            </p>
            <p className="text-gray-600">📧 {providerEmail}</p>
            <p className="text-gray-700 leading-relaxed">{description}</p>

            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              <span className="font-semibold">{rating}</span>
            </div>
            <p className="text-lg font-semibold text-cyan-600">
              💰 Price: ${price}
            </p>
            <p className="text-gray-700">
              🧑‍🎓 Slots Available: {slotsAvailable}
            </p>
            <p className="text-gray-700">📂 Category: {category}</p>
          </div>

          {/* Book Session Form */}
          <div className="card bg-base-100 w-full shadow-2xl p-6">
            <h2 className="text-xl font-bold mb-4">Book Session</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered w-full"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn bg-cyan-500 text-white w-full mt-2"
              >
                Submit
              </button>
            </form>
          </div>
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
              ← Back to All Skills
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SkillDetails;
