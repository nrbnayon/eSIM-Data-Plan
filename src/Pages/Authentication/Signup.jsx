import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    window.location.href = "/otp";
  };

  return (
    <div className="min-h-screen bg-[#F8D3AD] flex items-center justify-center p-3">
      <div className="bg-white rounded-2xl ">
        <div className="md:min-w-lg w-full p-10">
          <h2 className="text-3xl font-semibold text-center mb-4">
            Sign Up
          </h2>
          <p className="text-center text-sm mb-6 text-[#747086]">
            Enter your email and password to access your account.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name/Business Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  {...register("username", {
                    required: "Name is required",
                  })}
                  placeholder="Enter your Name"
                  className="w-full border border-base-300 bg-base-200 rounded-full p-2 outline-none"
                />
                <FaUser className="absolute inset-y-3 right-3 flex items-center text-gray-500" />
              </div>
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  placeholder="Enter your email"
                  className="w-full border border-base-300 bg-base-200 rounded-full p-2 outline-none"
                />
                <FaUser className="absolute inset-y-3 right-3 flex items-center text-gray-500" />
              </div>
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                  })}
                  placeholder="********"
                  className="w-full border border-base-300 bg-base-200 rounded-full p-2 outline-none"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">Rewrite Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                  })}
                  placeholder="********"
                  className="w-full border border-base-300 bg-base-200 rounded-full p-2 outline-none"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

             {/* Divider */}
            <div className="divider">Or Continue with</div>
            {/* Social Login */}
            <div className="flex space-x-4">
              <button className="flex-1 flex items-center justify-center border border-base-300 rounded-full py-2 hover:bg-gray-100">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-5 h-5 mr-2"
                />
                Google
              </button>
              <button className="flex-1 flex items-center justify-center border border-base-300 rounded-full py-2 hover:bg-gray-100">
              <img
                src="https://assets.likefamily.com.au/public/images/socials/apple-icon.png?auto=compress&q=50&ixlib=react-9.3.0"
                alt="Facebook"
                className="w-7 h-7 mr-2"
              />
              Apple
            </button>
            </div>

            <button
              type="submit"
              className="btn-primary "
            >
              Register
            </button>
          </form>
          <p className="text-center text-sm mt-6">
            Already have an account?{" "}
            <Link to="/signin" className="text-[#fda852] hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
