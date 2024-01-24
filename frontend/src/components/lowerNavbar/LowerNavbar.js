
import React from "react";
import {
  IconSearch,
  IconProfile,
  IconHeart,
  IconCart2,
} from "../../utils/icons";
const LowerNavbar = () => {
  return (
    <>
      <div className="flex flex-row max-w-full justify-between m-2">
        <div className="flex flex-row space-x-8 justify-center items-center"> 
          <div className="">
            <div></div>
            <h1 className=" font-mono text-3xl tracking-wider font-bold">
              UrbanCartz
            </h1>
          </div>
          <div className="flex flex-row border rounded-3xl h-10 border-black">
            <input className="w-72 min-h-full rounded-l-3xl"></input>
            <button className="flex bg-violet-600 rounded-r-3xl h-10 w-14 justify-center py-3">
              {IconSearch()}
            </button>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-row px-6 space-x-2 justify-center items-center">
            <div>{IconProfile()}</div>
            <a href="/login">Log In</a>
          </div>
          <div className="flex px-6 space-x-2 justify-center items-center">
            {IconHeart()}
          </div>
          <div className="flex flex-row px-6 space-x-2 justify-center items-center">
            <div>{IconCart2()}</div>
            <h1 className="">Cart</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default LowerNavbar;