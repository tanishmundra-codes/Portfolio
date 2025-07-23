import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-20 w-full flex justify-center">
      <div className="w-full max-w-md flex flex-col items-center md:pl-32">
        {/* HR line centered relative to card */}
        <div className="w-[75%] md:w-[180%] h-[1px] bg-gray-200 rounded-full" />
        
        {/* Footer text */}
        <p className="text-sm text-gray-500 text-center mt-5 mb-10">
          © 2025 Tanish Tech <br />
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;