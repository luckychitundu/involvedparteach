import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { TeacherContext } from "../Context/teacher-context";
import Nav from "../Home/Nav.jsx";

function Login() {
  const { onSubmit, modal, setDone, done } = useContext(TeacherContext);
  const { register, handleSubmit } = useForm();

  return (
    <div className="w-screen h-screen bg-blue-600">
      <Nav />
      
      {/* Modal for successful login */}
      {modal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-40">
          <div className="modal-content bg-white rounded-md p-4 shadow-md">
            <h5 className="text-xl font-semibold text-gray-800">Login Successful</h5>
            <p className="text-gray-600">You have successfully logged in.</p>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center mt-10">
        <div className="bg-white w-full sm:w-96 rounded-xl p-8 shadow-lg">
          {/* Logo and heading */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-white">InvolvEd</h1>
            <h2 className="text-2xl font-semibold">Teacher Login</h2>
            <p className="text-sm text-gray-400">Enter your email and password below</p>
          </div>

          {/* Form */}
          <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Email Input */}
            <div>
              <label className="block text-sm font-semibold">Enter Email</label>
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

            {/* Password Input */}
            <div>
              <label className="block text-sm font-semibold">Enter Password</label>
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

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <button
                className="w-full bg-blue-600 text-white py-3 rounded-md"
                type="submit"
              >
                {done ? (
                  <svg className="animate-spin h-5 w-5 mr-2 inline-block" viewBox="0 0 24 24"></svg>
                ) : null}
                <span>Login</span>
              </button>
            </div>
          </form>

          {/* Sign Up Link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600 font-semibold">
                Sign Up Here
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Footer with Terms & Policies */}
      <div className="mt-20 border-t border-gray-700 pt-8 text-center">
        <p className="text-sm">
          <a href="#" className="hover:underline">Terms of Service</a> |{" "}
          <a href="#" className="hover:underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
