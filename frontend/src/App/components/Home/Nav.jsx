import React, { useState, Fragment } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Transition, Menu } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar Container */}
      <div className="flex justify-between items-center h-24 mx-auto px-8 text-white bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 shadow-md">
        {/* Logo Section */}
        <div>
          <a href="/">
          <h1 className="text-3xl font-extrabold text-white tracking-wide">
            InvolvEd.
          </h1>
          </a>         

          <h2 className="text-xs font-medium tracking-widest text-blue-200">
            Kindergarten Management Portal
          </h2>
        </div>

        {/* Mobile Hamburger Menu */}
        <button className="lg:hidden">
          <Menu as="div" className="relative ml-3">
            <div>
              <Menu.Button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                {[
                  { label: "Home", path: "/" },
                  { label: "Parent Login", path: "/parent_login" },
                  { label: "Parent Register", path: "/parent_signup" },
                  { label: "Teacher Login", path: "/login" },
                  { label: "Teacher Signup", path: "/signup" },
                ].map((item) => (
                  <Menu.Item key={item.path}>
                    {({ active }) => (
                      <Link
                        to={item.path}
                        className={classNames(
                          active ? "bg-blue-700 text-white" : "text-gray-800",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          {[
            { label: "Home", path: "/" },
            { label: "Parent Login", path: "/parent_login" },
            { label: "Parent Register", path: "/parent_signup" },
            { label: "Teacher Login", path: "/login" },
            { label: "Teacher Signup", path: "/signup" },
          ].map((item) => (
            <li
              key={item.path}
              onClick={() => navigate(item.path)}
              className="text-sm font-medium text-white cursor-pointer hover:text-blue-400 transition"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Subtitle Section
      <div className="flex flex-col text-center w-full py-6 bg-blue-50 shadow-md">
        <span className="text-2xl font-bold text-blue-800">
          All aboard for fun and learning!
        </span>
      </div> */}
    </>
  );
};

export default Navbar;
