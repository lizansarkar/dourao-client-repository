import React from 'react';
import { useForm } from "react-hook-form";
import { FcGoogle } from 'react-icons/fc'; // Google লোগোর জন্য
import UseAuth from '../../hooks/UseAuth'; // আপনার কাস্টম অথ হুক
import { Link, useLocation, useNavigate } from 'react-router';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const { signInUser, signInWithGoogle } = UseAuth();

  const location = useLocation();
  const navigate = useNavigate();

  console.log("in the login page;", location)

  const handleLogin = (data) => {
    console.log("Login data:", data);
    signInUser(data.email, data.password)
        .then((result) => {
            console.log("User logged in:", result.user);
            navigate(location?.state || "/")
        })
        .catch(error => {
            console.error("Login error:", error);
        });
  };

  const handleGoogleSignIn = () => {
    console.log("location in social", location)
    signInWithGoogle()
        .then((result) => {
            console.log("Google sign-in success:", result.user);
            navigate(location.state || "/")
        })
        .catch(error => {
            console.error("Google sign-in error:", error);
        });
  };

  return (
    <div className="w-full">
        
        <header className="mb-8">
            <h1 className="text-4xl font-extrabold text-black mb-1">
                Welcome Back
            </h1>
            <p className="text-xl text-gray-700">Login with Dourao</p>
        </header>

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
            
            {/* ইমেইল ইনপুট */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-base font-semibold text-black">Email</span>
                </label>
                <input
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                    className={`input input-bordered w-full text-lg h-12 focus:ring-[#BDEE58] ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.email?.type === 'required' && <p className="text-sm text-red-500 mt-1">Valid email is required</p>}
            </div>

            {/* পাসওয়ার্ড ইনপুট */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-base font-semibold text-black">Password</span>
                </label>
                <input
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                    className={`input input-bordered w-full text-lg h-12 focus:ring-[#BDEE58] ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.password?.type === 'required' && <p className="text-sm text-red-500 mt-1">Password is required</p>}
            </div>

            {/* Forget Password লিঙ্ক */}
            <div className="text-left">
                <Link to="/forgot-password" className="text-gray-500 hover:text-gray-700 text-base underline transition-colors">
                    Forget Password?
                </Link>
            </div>

            {/* লগইন বাটন */}
            <div className="form-control mt-6">
                <button 
                    type="submit" 
                    className="btn w-full text-xl font-bold border-none bg-[#BDEE58] text-gray-900 hover:bg-[#a9d54e] h-14 transition-colors" // ছবির মতো উজ্জ্বল সবুজ
                >
                    Login
                </button>
            </div>
        </form>

        {/* রেজিস্টার লিঙ্ক এবং Or সেকশন */}
        <div className="text-center mt-6 text-lg">
            <p className="text-gray-600">
                Don't have any account? 
                <Link to="/register" className="font-semibold text-green-600 hover:text-green-700 ml-1 transition-colors">
                    Register
                </Link>
            </p>
            
            <div className="divider text-gray-400 my-4 text-base">Or</div> 
        </div>

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