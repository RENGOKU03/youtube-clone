import React, { useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Link, Navigate, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const input = useRef("");
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    const newSearchTerm = input.current.value;
    setSearchTerm(newSearchTerm);
  };
  if (searchTerm) {
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  }
  return (
    <div className="flex justify-center items-center z-10 bg-black">
      <input
        type="text"
        ref={input}
        className="bg-white relative text-black h-3/4 mr-5 rounded-3xl py-2 px-4 outline-none w-64"
        placeholder="Search..."
      />

      <div className="absolute right-10 text-[#FC1503]">
        <Link>
          <IoSearch size={"20px"} onClick={handelSubmit} />
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
