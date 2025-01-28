import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { TeacherContext } from "../Context/teacher-context";
import Nav from "../Home/Nav";
import "./signup.css";

function Signup() {
  const { register, handleSubmit } = useForm();
  const { onSubmition, modal } = useContext(TeacherContext);

  return (
    <>
     <Nav />
    <div className="w-screen min-h-screen flex flex-col bg-blue-600">
     
      <div className="flex justify-center mt-10 flex-grow">
        <div className="bg-white w-full sm:w-96 rounded-xl p-8 shadow-lg">
          {/* Logo and heading */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-white">InvolvEd</h1>
            <h2 className="text-2xl font-semibold">Teacher Registration</h2>
            <p className="text-sm text-gray-400">Fill in the details to create your account</p>
          </div>

          {/* Form */}
          <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit(onSubmition)}>
            {/* Input fields */}
            <div>
              <label className="block text-sm font-semibold">First Name</label>
              <input
                id="first_name"
                className="w-full border rounded-md p-3"
                type="text"
                name="first_name"
                placeholder="Enter your first name"
                {...register("first_name")}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold">Career Name</label>
              <input
                id="career_name"
                className="w-full border rounded-md p-3"
                type="text"
                name="career_name"
                placeholder="Enter your career name"
                {...register("career_name")}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold">Last Name</label>
              <input
                id="last_name"
                className="w-full border rounded-md p-3"
                type="text"
                name="last_name"
                placeholder="Enter your last name"
                {...register("last_name")}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold">Email</label>
              <input
                id="email"
                className="w-full border rounded-md p-3"
                type="email"
                name="email"
                placeholder="Enter your email"
                {...register("email")}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold">Phone Number</label>
              <input
                id="phone_number"
                className="w-full border rounded-md p-3"
                type="number"
                name="phone_number"
                placeholder="Enter your phone number"
                {...register("phone_number")}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold">Password</label>
              <input
                id="password"
                className="w-full border rounded-md p-3"
                type="password"
                name="password"
                placeholder="Enter your password"
                {...register("password")}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold">Gender</label>
              <input
                id="gender"
                className="w-full border rounded-md p-3"
                type="text"
                name="gender"
                placeholder="Enter your gender"
                {...register("gender")}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <button
                className="w-full bg-blue-600 text-white py-3 rounded-md"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>

          {/* Login Link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 font-semibold">
                Login Here
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-700 pt-6 pb-4 mt-auto text-center">
        <p className="text-sm text-white">
          <a href="#" className="hover:underline">Terms of Service</a> |{" "}
          <a href="#" className="hover:underline">Privacy Policy</a>
        </p>
      </div>
    </div>
    </>
  );
}

export default Signup;
