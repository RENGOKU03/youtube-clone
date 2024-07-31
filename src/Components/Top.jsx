import React from "react";
import { IoSearch } from "react-icons/io5";

const Top = () => {
  return (
    <div className="flex pt-2 h-16 justify-between items-center z-10 bg-black ">
      {/* <img className="h-3/4 ml-5" src="./logo.ico" alt="logo" /> */}\
      <h1 className="text-white text-3xl">Youtube Clone</h1>
      <div className="flex justify-center items-center">
        <input
          type="text"
          className="bg-white relative text-black h-3/4 mr-5 rounded-3xl py-2 px-4 outline-none w-64"
          placeholder="Search..."
        />
        <div className="absolute right-10 text-[#FC1503]">
          <IoSearch size={"20px"} />
        </div>
      </div>
    </div>
  );
};

export default Top;
