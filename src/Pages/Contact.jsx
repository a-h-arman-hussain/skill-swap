import React from "react";
import { toast } from "react-hot-toast";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-cyan-50 flex flex-col items-center py-16 px-4 md:px-20">
      <h1 className="text-4xl font-bold text-cyan-700 mb-8">Contact Us</h1>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-xl p-6">
          <h2 className="text-2xl font-semibold text-cyan-700 mb-4">
            Send us a message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label font-medium">Name</label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="label font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="label font-medium">Message</label>
              <textarea
                name="message"
                className="textarea textarea-bordered w-full"
                placeholder="Your message..."
                rows={5}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn bg-cyan-500 text-white w-full mt-2 hover:bg-cyan-600"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-xl p-6 flex flex-col justify-center gap-6">
          <h2 className="text-2xl font-semibold text-cyan-700 mb-2">
            Contact Info
          </h2>

          <div className="flex items-center gap-3">
            <FiMail className="text-cyan-500 text-xl" />
            <p className="text-gray-700">aharmanhussain@gmail.com</p>
          </div>

          <div className="flex items-center gap-3">
            <FiPhone className="text-cyan-500 text-xl" />
            <p className="text-gray-700">+880 1315 315 449</p>
          </div>

          <div className="flex items-center gap-3">
            <FiMapPin className="text-cyan-500 text-xl" />
            <p className="text-gray-700">Chittagong, Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
