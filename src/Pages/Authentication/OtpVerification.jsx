import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OtpVerification = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ defaultValues: { otp0: "", otp1: "", otp2: "", otp3: "" } });
  const [timer, setTimer] = useState(60);
  const [resendEnabled, setResendEnabled] = useState(false);

  useEffect(() => {
    let countdown;
    if (timer > 0) {
      countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else {
      setResendEnabled(true);
    }
    return () => clearInterval(countdown);
  }, [timer]);

  const handleResendOtp = () => {
    if (resendEnabled) {
      setTimer(60);
      setResendEnabled(false);
      // Placeholder for resend OTP API call
    }
  };

  const onSubmit = (data) => {
    const otp = Object.values(data).join("");
    console.log("OTP Entered:", otp);
    navigate('/reset-password')
  };

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    // Only allow digits
    if (!/^[0-9]$/.test(value) && value !== "") {
      setValue(`otp${index}`, ""); // Clear invalid input
      return;
    }
    if (value.length === 1 && index < 3) {
      document.getElementsByName(`otp${index + 1}`)[0].focus();
    } else if (value.length === 0 && index > 0) {
      document.getElementsByName(`otp${index - 1}`)[0].focus();
    }
  };

  return (
    <div className="min-h-screen bg-[#F8D3AD] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4 text-gray-800">
          Check your email
        </h2>
        <p className="text-center text-sm sm:text-base mb-6 text-[#747086]">
          Please enter the four verification code we sent to{" "}
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex justify-center gap-3 sm:gap-4">
            {["otp0", "otp1", "otp2", "otp3"].map((name, index) => (
              <input
                key={name}
                {...register(name, {
                  required: "This field is required",
                  pattern: {
                    value: /^[0-9]$/,
                    message: "Only numbers are allowed",
                  },
                })}
                type="text"
                maxLength={1}
                className={`w-16 h-12  text-center border rounded-full text-lg outline-none focus:border-[#fda852] transition-colors ${
                  errors[name] ? "border-red-500" : "border-gray-300"
                }`}
                onChange={(e) => handleInputChange(e, index)}
              />
            ))}
          </div>
          {Object.keys(errors).length > 0 && (
            <p className="text-red-500 text-sm text-center">
              {errors[Object.keys(errors)[0]]?.message ||
                "Please fill all OTP fields correctly"}
            </p>
          )}

          <p className="text-center text-sm sm:text-base mt-4">
            {resendEnabled ? (
              <button
                type="button"
                onClick={handleResendOtp}
                className="text-[#fda852] hover:underline"
              >
                Resend OTP
              </button>
            ) : (
              <span className="text-gray-500">Resend OTP in {timer}s</span>
            )}
          </p>

          <button
            type="submit"
            className="w-full bg-[#fda852] text-white py-2 rounded-full hover:bg-[#f8b862] transition-colors"
          >
            Verify OTP
          </button>
        </form>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-[#fda852] hover:underline"
          >
            <ArrowLeft size={18} />
            <span>Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
