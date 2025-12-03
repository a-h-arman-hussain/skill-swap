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

  if (loading) return <Loader />;
  if (error) return <Error />;

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
    duration,
    level,
    language,
    features,
  } = skill;

  return (
    <div className="py-16 px-6 md:px-20 bg-gray-50 min-h-screen">
      <title>Skill Swap | {skillName}</title>

      <section className="flex flex-col md:flex-row items-start justify-center gap-12">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={image}
            alt={skillName}
            className="rounded-2xl shadow-xl w-full object-cover border-4 border-cyan-200"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Title & Category */}
          <div>
            <span className="px-4 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold">
              {category}
            </span>

            <h1 className="text-4xl font-bold text-cyan-700 mt-3">
              {skillName}
            </h1>

            <p className="mt-2 text-gray-600">{description}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-400 text-xl" />
            <span className="font-semibold text-lg">{rating} / 5</span>
          </div>

          {/* Price, Slots, Level */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-xl shadow">
              <p className="text-cyan-600 text-lg font-semibold">${price}</p>
              <p className="text-sm text-gray-600">Price</p>
            </div>

            <div className="p-4 bg-white rounded-xl shadow">
              <p className="font-semibold">{slotsAvailable}</p>
              <p className="text-sm text-gray-600">Slots Available</p>
            </div>

            <div className="p-4 bg-white rounded-xl shadow">
              <p className="font-semibold capitalize">{level}</p>
              <p className="text-sm text-gray-600">Skill Level</p>
            </div>

            <div className="p-4 bg-white rounded-xl shadow">
              <p className="font-semibold">{duration}</p>
              <p className="text-sm text-gray-600">Duration</p>
            </div>
          </div>

          {/* Features List */}
          {features && (
            <div className="bg-white shadow p-5 rounded-xl">
              <h3 className="font-bold text-lg mb-2 text-cyan-700">
                What You'll Learn
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                {features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Provider Info */}
          <div className="bg-white shadow p-5 rounded-xl">
            <h3 className="font-bold text-lg text-cyan-700">Instructor</h3>
            <p className="font-semibold">{providerName}</p>
            <p className="text-gray-600">📧 {providerEmail}</p>
            <p className="text-gray-600">🌐 Language: {language}</p>
          </div>

          {/* Booking Form */}
          <div className="card bg-base-100 w-full shadow-2xl p-6">
            <h2 className="text-xl font-bold mb-4">Book Session</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn bg-cyan-500 text-white w-full"
              >
                Book Now
              </button>
            </form>
          </div>

          {/* Back Button */}
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
