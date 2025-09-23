
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Email = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    navigate("/otp");
  };

  return (
    <div className="min-h-screen bg-[#F8D3AD] flex items-center justify-center p-3">
      <div className="bg-white rounded-2xl ">
        <div className="md:min-w-lg w-full p-10">
          <h2 className="text-3xl font-semibold text-center mb-4">
            Reset password
          </h2>
          <p className="text-center text-sm mb-6 text-[#747086]">
            To reset password enter your email
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="mb-5">
              <label className="block text-sm font-medium mb-1">Email</label>
              <div>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  placeholder="Enter your email"
                  className="w-full border border-base-300 bg-base-200 rounded-full p-2 outline-none"
                />
              </div>
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

            <button type="submit" className="btn-primary ">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Email;
