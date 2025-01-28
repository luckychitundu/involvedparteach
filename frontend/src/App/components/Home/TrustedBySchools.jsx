import React from "react";

const TrustedBySchools = () => {
  return (
    <div className="bg-blue-600 py-6">
      <div className="text-center text-white mb-4">
        <h2 className="text-xl font-semibold">Trusted by Schools Worldwide</h2>
      </div>
      <div className="overflow-hidden relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-20 mx-4 bg-white rounded-md shadow-md flex items-center justify-center"
            >
              <span className="text-sm font-medium text-blue-600">Logo {index + 1}</span>
            </div>
          ))}
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-shrink-0 w-40 h-20 mx-4 bg-white rounded-md shadow-md flex items-center justify-center"
            >
              <span className="text-sm font-medium text-blue-600">Logo {index + 1}</span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TrustedBySchools;
