import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-cyan-500 text-neutral-content p-10">
      <div className="w-[300px] md:w-[400px]">
        <Link to="/">
          <img className="w-20 h20 bg-white rounded-full" src={logo} alt="" />
        </Link>
        <p>
          SkillSwap: A local platform to learn, teach, and exchange skills with
          people in your community. Share your expertise or discover new talents
          around you!
        </p>
      </div>
      <nav>
        <h6 className="footer-title">Quick Links</h6>
        <Link to="/" className="link link-hover">
          Home
        </Link>
        <Link to="/all-skills" className="link link-hover">
          All Skills
        </Link>
        <Link to="/about" className="link link-hover">
          About Us
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
      </nav>
      {/* <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav> */}
      <nav>
        <h6 className="footer-title">Follow Us</h6>
        <div className="flex justify-center items-center gap-2">
          <Link to="https://www.facebook.com/a.h.arman.hussain">
            <FaFacebookSquare size={24} />
          </Link>
          <Link to="https://www.linkedin.com/in/mohammed-abdul-hakim-arman/">
            <FaLinkedin size={24} />
          </Link>
          <Link to="https://github.com/a-h-arman-hussain">
            <FaGithubSquare size={24} />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
