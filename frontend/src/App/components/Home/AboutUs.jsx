import React from "react";
import mission from "./assets/mission.jpg";
import vision from "./assets/vision.jpg";
import Nav from "./Nav";

const AboutUs = () => {
  return (
    <>
     <Nav />
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 min-h-screen text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-6">About InvolvEd</h1>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed">
            At InvolvEd, we are committed to revolutionizing early education by creating meaningful connections
            between teachers, parents, and students. We believe in empowering every child to reach their
            full potential through collaboration and innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 border-b-4 border-white inline-block pb-2">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              To build an inclusive platform that fosters transparency, engagement, and growth
              for educators, parents, and students alike. Our tools are designed to enhance communication,
              streamline classroom management, and create a nurturing environment where children can excel.
            </p>
          </div>
          <div>
            <img
              src={mission}
              alt="Our Mission"
              className="rounded-3xl shadow-2xl w-full transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mt-16">
          <div className="order-2 md:order-1">
            <img
              src={vision}
              alt="Our Vision"
              className="rounded-3xl shadow-2xl w-full transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6 border-b-4 border-white inline-block pb-2">Our Vision</h2>
            <p className="text-lg leading-relaxed">
              To transform the way schools operate by bridging gaps between families and educators.
              InvolvEd envisions a future where every child receives personalized care and support,
              leading to enriched learning experiences and lifelong success.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose InvolvEd?</h2>
          <ul className="list-disc list-inside text-lg max-w-3xl mx-auto space-y-4">
            <li className="leading-relaxed">Seamless communication between parents and teachers.</li>
            <li className="leading-relaxed">Effortless tracking of attendance, grades, and activities.</li>
            <li className="leading-relaxed">A supportive platform designed with care and innovation.</li>
            <li className="leading-relaxed">Commitment to fostering strong relationships in education.</li>
          </ul>
        </div>

        <div className="mt-16 text-center">
          <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-transform duration-300 hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
