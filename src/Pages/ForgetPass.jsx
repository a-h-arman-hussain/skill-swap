import React, { useContext, useRef } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const ForgetPass = () => {
  const { forgotPassword } = useContext(AuthContext);
  const emailRef = useRef();

  const handleForgotPass = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    forgotPassword(email)
      .then(() =>
        toast.success("Password reset email sent! Please check your email.")
      )
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <title>Skill Swap | Forget Password</title>
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
        <h1 className="font-semibold text-2xl text-center text-cyan-500">
          Forgot Password
        </h1>

        <form onSubmit={handleForgotPass} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              ref={emailRef}
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />

            <div>
              <button
                type="submit"
                className="btn bg-cyan-500 text-white mt-4 w-full"
              >
                Reset Password
              </button>
            </div>
          </fieldset>
        </form>

        <p className="font-semibold text-center pt-5">
          Remember your password? Please{" "}
          <Link to="/auth/login" className="text-cyan-500">
            Go back to Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgetPass;
