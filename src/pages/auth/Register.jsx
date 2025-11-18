import React from "react";
import { useForm } from "react-hook-form";
import UseAuth from "../../hooks/UseAuth";

export default function Register() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const {registerUser} = UseAuth();

  const handleRegistration = (data) => {
    console.log("after register data", data);
    registerUser(data.email, data.password)
    .then((result) => {
      console.log(result.user)
    })
    .catch(error => {
      console.log(error)
    })
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          {/* email field */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === 'required' && <p className="text-red-500">valid email requred</p> }
          {/* password field */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", { 
              required: true,
              minLength: 6
            })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === 'minLength' && <p className="text-red-500">password must be 6 cherector required</p>}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
    </div>
  );
}
