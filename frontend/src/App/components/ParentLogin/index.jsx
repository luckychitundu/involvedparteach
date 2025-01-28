import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../Home/Nav";

function ParentLogin() {
  const navigate = useNavigate();
  const [done, setDone] = useState(false);
  const { register, handleSubmit } = useForm();
  const [modal, setModal] = useState(false);

  function handleNotification() {
    setModal(true);
    handleClose();
  }

  function handleClose() {
    setTimeout(() => {
      setModal(false);
      navigate("/parent_dashboard");
    }, 2000);
  }

  function onSubmit(data) {
    setDone(true);
    fetch("/parent_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        res.json().then((res) => {
          localStorage.setItem("jwt", res.jwt);
          localStorage.setItem("parent", `${res.parent.id}`);
          localStorage.setItem("parent_data", JSON.stringify(res.parent));
          setDone(false);
          return handleNotification();
        });
      } else {
        res.json().then((error) => alert(error.errors));
      }
    });
  }

  return (
    <>
    <Nav />
    <div className="w-screen min-h-screen bg-blue-600">
      {modal && (
        <div className="bg-blue-600 text-center py-2">
          Login Successful
        </div>
      )}
      <div className="flex items-center justify-center">
        <div className="bg-white w-full sm:w-96 rounded-xl p-8 shadow-lg mt-10">
          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-white">InvolvEd</h1>
          </div>

          {/* Form Title */}
          <div className="text-center mb-4">
            <p className="text-2xl font-semibold">Parent Login</p>
            <p className="text-[#9FA2B4]">Enter your credentials below</p>
          </div>

          {/* Form */}
          <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Phone Number */}
            <div>
              <label className="block text-sm font-semibold">Phone Number</label>
              <input
                id="phone_number"
                className="w-full border rounded-md p-3"
                type="number"
                name="phone_number"
                placeholder="Phone number"
                {...register("phone_number", { required: true })}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold">Password</label>
              <input
                id="password"
                className="w-full border rounded-md p-3"
                type="password"
                name="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-4">
              <button
                className="w-full bg-blue-600 text-white py-2 rounded-md flex items-center justify-center"
                type="submit"
              >
                {done && (
                  <svg
                    className="animate-spin h-5 w-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="opacity-25"
                    />
                    <path
                      fill="currentColor"
                      d="M4 12a8 8 0 1116 0A8 8 0 014 12z"
                    />
                  </svg>
                )}
                <span>Login</span>
              </button>
            </div>
          </form>

          {/* Sign Up Link */}
          <div className="text-center mt-4">
            <p className="text-sm">
              Don't have an account?{" "}
              <Link to="/parent_signup" className="text-white font-semibold">
                Sign Up Here
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-28 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm">
            <a href="#" className="hover:underline">Terms of Service</a> |{" "}
            <a href="#" className="hover:underline">Privacy Policy</a>
          </p>
        </div>
    </div>
    </>
  );
}

export default ParentLogin;
