import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoEye, IoEyeOff } from "react-icons/io5"; // ✅ Import eye icons
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { login, loginWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👁 toggle state

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Password validation
    if (!passwordRegex.test(password)) {
      setError(
        "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      toast.error("Invalid password format!");
      return;
    }

    setError("");

    login(email, password)
      .then((res) => {
        const user = res.user;
        toast.success(
          `${user.displayName || user.email} logged in successfully!`
        );

        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        const user = res.user;
        toast.success(
          `${user.displayName || user.email} logged in successfully!`
        );

        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <title>Skill Swap | Login</title>
      <div className="card bg-white w-full max-w-sm shadow-2xl py-6 px-4 rounded-2xl">
        <h1 className="font-semibold text-2xl text-center text-cyan-600 mb-4">
          Login to Your Account
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
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

          {/* Password with toggle */}
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

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to="/auth/forget-password"
              className="text-sm text-cyan-500 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="btn bg-cyan-500 hover:bg-cyan-600 text-white w-full"
          >
            Login
          </button>

          <div className="divider text-gray-400 text-sm">or</div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn border-cyan-500 text-cyan-600 w-full flex items-center justify-center gap-2 hover:bg-cyan-50"
          >
            <FcGoogle size={22} />
            Login with Google
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/auth/register"
            className="text-cyan-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
