import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Top = () => {
  return (
    <div className="flex pt-2 h-16 justify-between items-center z-10 bg-black gap-2">
      <Link to="/">
        <div>
          <h1 className="text-white px-3 py-1 rounded-3xl font-bold text-2xl ml-4 md:text-5xl bg-[#FC1503]">
            ViewTube
          </h1>
        </div>
      </Link>
      <SearchBar />
    </div>
  );
};

export default Top;
