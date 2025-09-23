import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  // Dummy credentials
  const dummyCredentials = {
    user: { email: "user@example.com", password: "user123", role: "user" },
    stuff: { email: "stuff@example.com", password: "stuff123", role: "stuff" },
    admin: { email: "admin@example.com", password: "admin123", role: "admin" },
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = (data) => {
    // Find matching credential
    const credential = Object.values(dummyCredentials).find(
      (cred) =>
        cred.email === data.email && cred.password === data.password
    );

    if (credential) {
      // Store user data in localStorage
      localStorage.setItem("userRole", credential.role);
      localStorage.setItem("userEmail", credential.email);

      // Navigate based on role
      if (credential.role === "user") {
        navigate("/");
      } else if (credential.role === "stuff") {
        navigate("/dashboard/stuffOverview");
      } else if (credential.role === "admin") {
        navigate("/dashboard/adminOverview");
      }
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8D3AD] flex items-center justify-center p-3">
      <div className="bg-white rounded-2xl ">
        <div className="md:min-w-lg w-full p-10">
          <h2 className="text-3xl font-semibold text-center mb-4">
            Welcome Back!
          </h2>
          <p className="text-center text-sm mb-6 text-[#747086]">
            Enter your email and password to access your account.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="mb-5">
              <label className="block text-sm font-medium mb-1">Email</label>
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
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
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
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-1 text-xs">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>
              <div>
                <Link to="/email" className="text-xs text-[#fda852]">
                  Forget Password
                </Link>
              </div>
            </div>

            <button type="submit" className="btn-primary w-full mt-4">
              Log In
            </button>
          </form>
          <p className="text-center text-sm mt-6">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#fda852] hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;