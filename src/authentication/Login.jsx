import { useForm } from "react-hook-form";
import { Link } from "react-router";
import authImage from "../assets/authImage.png";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("Login data:", data);
  };
  const handleGoogleLogin = () => {
    console.log("Initiating Google Login...");
  };
  return (
    <div>
      <div className="flex bg-[#fff]">
        <div className="flex-1 my-auto">
          <div className="flex ml-4 md:ml-12 md:-mt-20 pb-12">
            <Link to="/" className="flex items-center">
              <img
                src="https://i.postimg.cc/rsqVtM6T/logo.png"
                alt="Savor Book Logo"
                className="h-auto"
              />
              <span className=" text-2xl md:text-3xl font-bold mt-5 -ml-3 text-[#303030]">
                Profast
              </span>
            </Link>
          </div>
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center mx-auto">
            <div className="mb-6">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#000000] mb-2">
                Welcome Back
              </h2>
              <p className="text-[#000000]">Login with Profast</p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#CBD5E1] ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-medium mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#CBD5E1] ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="text-start">
                <a
                  href="#"
                  className="text-sm text-[#71717A] hover:underline font-medium"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-[#CAEB66] cursor-pointer py-2 px-4 rounded-md hover:bg-[#e4eb66] focus:outline-none focus:ring-2 focus:ring-[#CBD5E1] focus:ring-opacity-50 transition duration-300"
              >
                Login
              </button>
            </form>

            <p className="text-start text-[#71717A] text-sm mt-4 font-medium">
              Don't have any account?{" "}
              <Link to="/register" className="text-[#8FA748] hover:underline">
                Register
              </Link>
            </p>

            <div className="relative flex items-center justify-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-500">Or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Google Login Button */}
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center bg-[#E9ECF1] text-[#000000] py-2 px-4 rounded-md border-none hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 transition cursor-pointer duration-300"
            >
              <img
                src="https://i.postimg.cc/XqV5gGB1/Google-G-Logo-1.png"
                alt="Google logo"
                className="w-5 h-5 mr-2"
              />
              Login with Google
            </button>
          </div>
        </div>
        <div className="bg-[#FAFDF0] h-screen flex-1 hidden md:flex items-center">
          <div className="mx-auto p-8">
            <img
              src={authImage}
              alt="Delivery Illustration"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
