import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router";

const Error = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <title>Skill Swap | Error</title>
      <FaExclamationTriangle className="text-6xl text-red-500 mb-4 animate-bounce" />
      <h1 className="text-3xl font-bold text-red-600 mb-2">
        Oops! Something went wrong
      </h1>
      <p className="text-center text-gray-500 mb-6">
        {message ||
          "We are having trouble loading this content. Please try again later."}
      </p>
      <Link
        to="/"
        className="btn bg-red-500 hover:bg-red-600 text-white transition-colors duration-300"
      >
        Retry
      </Link>
    </div>
  );
};

export default Error;
