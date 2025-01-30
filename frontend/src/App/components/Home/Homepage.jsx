import React, { useState, useEffect } from "react";
import inv1 from "./assets/inv1.jpg"; // Replace with your image paths
import inv2 from "./assets/inv2.jpg";
import inv3 from "./assets/inv3.jpg";

function Homepage() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [inv1, inv2, inv3]; // Array of image paths

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length); // Cycle through images
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out">
        <img
          src={images[currentImage]}
          alt="Background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 py-24">
        <div className="text-center text-white mb-12">
          <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">
            Welcome to InvolvEd
          </h1>
          <p className="text-xl max-w-2xl mx-auto animate-fade-in">
            Building positive, caring relationships that nurture growth and
            respect.
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center gap-8 mt-20">
          {[
            {
              title: "Our Vision",
              description:
                "Positive, caring relationships based on trust and respect, are at the heart of our philosophy.",
            },
            {
              title: "Mission",
              description:
                "At InvolvEd, we believe that every day is a learning day, where children feel valued and cared for.",
            },
            {
              title: "Motto",
              description:
                "Transforming lives by creating a nursery that feels like home with an extended supportive family.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105 p-8 max-w-sm"
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                {item.title}
              </h2>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
