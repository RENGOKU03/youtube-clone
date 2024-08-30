import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Top = () => {
  return (
    <div className="flex pt-2 h-20 justify-between items-center z-10 bg-black gap-3">
      <Link to="/">
        <div>
          {/* <h1 className="text-white px-3 py-1 rounded-3xl font-bold text-2xl ml-4 md:text-5xl bg-[#FC1503]">
            ViewTube
          </h1> */}
          <img src='/./viewtubelogo.png' alt="viewtube-logo" className="h-10 w-24 xs:w-auto xs:h-12 md:h-16 ml-4" />
        </div>
      </Link>
      <SearchBar />
    </div>
  );
};

export default Top;
