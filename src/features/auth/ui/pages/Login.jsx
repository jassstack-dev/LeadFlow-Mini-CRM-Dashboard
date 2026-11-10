import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const {  register, handleSubmit, errors, loginSubmit } = useAuth();


  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800">LeadFlow</h1>
          <p className="text-slate-500 mt-2">
            Welcome back! Please login to your account.
          </p>
        </div>

        <form onSubmit={handleSubmit(loginSubmit)} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter your username"
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters",
                },
              })}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />

            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember me */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-600">
              <input type="checkbox" className="accent-blue-600" />
              Remember me
            </label>

            <span className="text-blue-600 font-medium cursor-pointer">
              Forgot password?
            </span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-7">
          LeadFlow CRM Dashboard
        </p>
      </div>
    </div>
  );
};

export default Login;
