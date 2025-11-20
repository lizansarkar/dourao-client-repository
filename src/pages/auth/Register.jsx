import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

import UseAuth from "../../hooks/UseAuth";
import { Link, useLocation, useNavigate } from "react-router";
import axios from "axios";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();
  console.log("form register",location)

  const { registerUser, signInWithGoogle, updateUserProfile } = UseAuth();

  const handleRegistration = (data) => {
    console.log("Registration data:", data.photo[0]);

    const profileImg = data.photo[0];

    registerUser(data.email, data.password, data.name)
      .then((result) => {
        console.log("User registered:", result.user);
        //store the photo and get the email
        const formData = new FormData();
        formData.append("image", profileImg);

        const imgUrl = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMAGE_HOST_API_KEY
        }`;
        axios.post(imgUrl, formData).then((res) => {
          console.log("after image upload", res.data.data.url);

          //update user profile img
          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          updateUserProfile(userProfile)
          .then(() => {
            console.log('user profile update data')
          })
          .catch(error => console.log(error))
        });
      })
      .catch((error) => {
        console.error("Registration error:", error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("Google sign-in success:", result.user);
        navigate(location.state || "/")
      })
      .catch((error) => {
        console.error("Google sign-in error:", error);
      });
  };

  return (
    <div className="w-full">
      {/* হেডিং সেকশন */}
      <header className="mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
          Create an Account
        </h1>
        <p className="text-base text-gray-500">Register with ZapShift</p>
      </header>

      <div className="relative w-16 h-16 mb-6">
        <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center border-4 border-white shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-8 h-8 text-gray-500"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>
        </div>

        <div className="absolute bottom-0 right-0 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white"></div>
      </div>

      <form onSubmit={handleSubmit(handleRegistration)} className="space-y-4">
        {/* নাম ফিল্ড */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-base font-medium text-gray-700">
              Name
            </span>
          </label>
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
            className={`input input-bordered w-full h-12 text-lg focus:ring-[#BDEE58] ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name?.type === "required" && (
            <p className="text-sm text-red-500 mt-1">Name is required</p>
          )}
        </div>

        {/* Photo url field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-base font-medium text-gray-700">
              Insert Your Photo
            </span>
          </label>

          {/* <input type="file" className="file-input" /> */}
          <input
            type="file"
            placeholder="insert you photo"
            {...register("photo", { required: true })}
            className={`file-input input-bordered w-full h-12 text-lg focus:ring-[#BDEE58] ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>

        {/* ইমেইল ফিল্ড */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-base font-medium text-gray-700">
              Email
            </span>
          </label>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className={`input input-bordered w-full h-12 text-lg focus:ring-[#BDEE58] ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email?.type === "required" && (
            <p className="text-sm text-red-500 mt-1">Valid email is required</p>
          )}
        </div>

        {/* পাসওয়ার্ড ফিল্ড */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-base font-medium text-gray-700">
              Password
            </span>
          </label>
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
            className={`input input-bordered w-full h-12 text-lg focus:ring-[#BDEE58] ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password?.type === "required" && (
            <p className="text-sm text-red-500 mt-1">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-sm text-red-500 mt-1">
              Password must be at least 6 characters
            </p>
          )}
        </div>

        {/* রেজিস্টার বাটন */}
        <div className="form-control pt-4">
          <button
            type="submit"
            className="btn w-full text-lg font-bold border-none bg-[#BDEE58] text-gray-900 hover:bg-[#a9d54e] h-14 transition-colors" // ছবির মতো উজ্জ্বল সবুজ বাটন
          >
            Register
          </button>
        </div>
      </form>

      {/* লগইন এবং গুগল অপশন */}
      <div className="text-center mt-6 text-base">
        <p className="text-gray-600 mb-2">
          Already have an account?
          <Link
            to="/login"
            className="font-semibold text-green-600 hover:text-green-700 ml-1 transition-colors"
          >
            Login
          </Link>
        </p>

        <div className="divider text-gray-400 my-4 text-base">Or</div>
      </div>

      {/* গুগল রেজিস্ট্রেশন বাটন */}
      {/* গুগল লগইন বাটন */}
      <button
        onClick={handleGoogleSignIn}
        className="btn w-full text-lg h-14 bg-gray-100 border-gray-300 hover:bg-gray-200 hover:text-gray-800 transition-colors"
      >
        <FcGoogle className="w-6 h-6 mr-2" />
        Login with google
      </button>
    </div>
  );
}
