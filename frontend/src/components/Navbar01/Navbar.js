import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row max -w-full justify-between h-12 bg-black">
        <div className="text-white mt-2 ml-2">
          <h2> Free delivery across india </h2>
        </div>
        <div className="flex flex-row text-white mt-2">
          <div className="px-8">
            <h2> About </h2>
          </div>
          <div className="px-8">
            <h2>Contact</h2>
          </div>
          <div className="px-8">
            <h2>Help Center</h2>
          </div>
          <div className="px-8">
            <h2>Call Us</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
