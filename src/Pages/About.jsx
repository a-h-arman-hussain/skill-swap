import React from "react";
import arman from "../assets/arman.jpg";
import saim from "../assets/saim.jpg";
import raihan from "../assets/raihan.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <title>Skill Swap | About</title>
      <section className="py-16 px-6 bg-cyan-50">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-cyan-600 mb-4">
          🌟 About SkillSwap
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
          SkillSwap is a community-driven platform where people can teach,
          learn, and exchange skills. Whether you want to pick up a new hobby or
          share your expertise, we make skill-sharing easy, fun, and rewarding.
        </p>
      </section>

      <section className="py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-500 mb-8">
          Our Story
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
          SkillSwap was founded with the vision of connecting people in local
          communities through the power of knowledge exchange. We believe
          learning is most effective when it's personal, interactive, and shared
          with others. Our mission is to empower learners and teachers alike,
          fostering a vibrant ecosystem of skill-sharing.
        </p>
      </section>

      <section className="py-16 px-6 bg-cyan-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-600 mb-8">
          Mission & Vision
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-center">
          <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-cyan-500">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To provide an easy-to-use platform for people to teach, learn, and
              exchange skills in their communities.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-cyan-500">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To create a global network of learners and teachers, making
              skill-sharing accessible and rewarding for everyone.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-500 mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition duration-300">
            <img
              src={arman}
              alt="Team Leader"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">A H Arman Hussain</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition duration-300">
            <img
              src={saim}
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">Abdul Karim Saim</h3>
            <p className="text-gray-600">Lead Designer</p>
          </div>
          <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition duration-300">
            <img
              src={raihan}
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">Mesbah Uddin Raihan</h3>
            <p className="text-gray-600">Community Manager</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
