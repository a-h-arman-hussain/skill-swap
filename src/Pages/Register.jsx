import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  // const photoUrlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i;

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const photoUrl = e.target.photoUrl.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    // Password validation
    if (!passwordRegex.test(password)) {
      setError(
        "Password must contain at least one uppercase, one lowercase letter, and be at least 6 characters long."
      );
      toast.error("Invalid password format!");
      return;
    }

    // Photo URL validation
    // if (!photoUrlRegex.test(photoUrl)) {
    //   setError("Please enter a valid image URL (jpg, jpeg, png, gif, webp).");
    //   toast.error("Invalid photo URL!");
    //   return;
    // }

    setError("");

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        toast.success("Register successful!");
        setUser({ ...user, displayName: name, photoURL: photoUrl });

        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(`Register failed: ${err.message}`));
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <title>Skill Swap | Register</title>
      <div className="card bg-white w-full max-w-sm shadow-2xl py-6 px-4 rounded-2xl">
        <h1 className="font-semibold text-2xl text-center text-cyan-600 mb-4">
          Register Your Account
        </h1>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div>
            <label className="label text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="label text-sm font-medium text-gray-600">
              Photo URL
            </label>
            <input
              type="text"
              name="photoUrl"
              className="input input-bordered w-full"
              placeholder="Enter photo URL"
              required
              onChange={() => setError("")}
            />
          </div>

          {/* Email */}
          <div>
            <label className="label text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="label text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="input input-bordered w-full pr-10"
              placeholder="Enter your password"
              required
              onChange={() => setError("")}
            />
            <span
              className="absolute z-10 top-9 right-3 text-gray-500 cursor-pointer text-xl"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEye /> : <IoEyeOff />}
            </span>

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <button
            type="submit"
            className="btn bg-cyan-500 hover:bg-cyan-600 text-white w-full"
          >
            Register
          </button>

          <p className="text-center text-sm mt-6 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-cyan-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
