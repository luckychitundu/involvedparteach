import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Nav from "../Home/Nav";

function ParentSignup() {
  const [modal, setModal] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  function handleNotification() {
    setModal(true);
    handleClose();
  }

  function handleClose() {
    setTimeout(() => {
      setModal(false);
      navigate("/parent_dashboard");
    }, 3000);
  }

  async function onSubmit(data) {
    await fetch("/parents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          localStorage.setItem("jwt", data.jwt);
          localStorage.setItem("parent", `${data.parent.id}`);
          localStorage.setItem("parent_data", JSON.stringify(data.parent));
          handleNotification();
        });
      } else {
        res.json().then((error) => alert(error.errors));
      }
    });
  }

  return (
    <>
      <Nav />
      <div className="w-screen min-h-screen bg-blue-600 flex flex-col">
        {/* Nav Component */}
        
        {/* Modal for successful signup */}
        {modal && (
          <div className="bg-blue-600 text-center py-2 text-white">
            Signup Successful
          </div>
        )}

        {/* Signup Form */}
        <div className="flex items-center justify-center mt-10 flex-grow">
          <div className="bg-white w-full sm:w-96 rounded-xl p-8 shadow-lg">
            {/* Logo */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-extrabold text-white">InvolvEd</h1>
            </div>

            {/* Form Title */}
            <div className="text-center mb-4">
              <p className="text-2xl font-semibold">Parent Registration</p>
              <p className="text-[#9FA2B4]">Fill in your details below</p>
            </div>

            {/* Form */}
            <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit(onSubmit)}>
              {/* Input fields */}
              <div>
                <label className="block text-sm font-semibold">First Name</label>
                <input
                  id="first_name"
                  className="w-full border rounded-md p-3"
                  type="text"
                  name="first_name"
                  placeholder="Enter your first name"
                  {...register("first_name", { required: true })}
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
                  {...register("last_name", { required: true })}
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
                  {...register("phone_number", { required: true })}
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
                  {...register("password", { required: true })}
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mt-4">
                <button
                  className="w-full bg-blue-600 text-white py-2 rounded-md"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>

            {/* Login Link */}
            <div className="text-center mt-4">
              <p className="text-sm">
                Already have an account?{" "}
                <Link to="/parent_login" className="text-white font-semibold">
                  Login Here
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="bg-blue-600 mt-20 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-white">
            <a href="#" className="hover:underline">Terms of Service</a> |{" "}
            <a href="#" className="hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default ParentSignup;
