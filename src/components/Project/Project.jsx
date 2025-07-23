import React from 'react';
import image from "../../assets/project.png";

const Card = () => {
  return (
    <div className="w-full flex flex-col items-center md:pl-32">
      {/* Heading */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-[75%] md:w-[180%] h-[1px] bg-gray-200 rounded-full" />
        <h2 className="text-xl sm:text-2xl font-semibold text-black-800 mb-2 mt-5 text-center">
          Here's What I've Been Up To.
        </h2>
      </div>

      {/* Card */}
      <div className="relative w-[90%] sm:w-full max-w-md bg-white rounded-lg overflow-hidden border border-gray-200 shadow-md">
        {/* Invisible clickable link over the entire card */}
        <a
          href="https://tanishmundra-codes.github.io/yappers-HUB/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
        ></a>

        {/* Main static image card */}
        <div className="relative bg-gray-900 h-64 sm:h-80 overflow-hidden cursor-pointer m-4 rounded-lg">
          <div className="absolute inset-0">
            <img
              src={image}
              alt="Project image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom section */}
        <div className="p-4 sm:p-6 bg-white">
          <h3 className="text-gray-800 text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
            Yappers HUB
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
            I love Web3. Kaito is a community I vibe with, so I built Yappers HUB, a collection of tools for all Kaito yappers.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["React", "JavaScript", "Tailwind CSS"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
