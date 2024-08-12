import React, { useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const input = useRef("");
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    const newSearchTerm = input.current.value;
    setSearchTerm(newSearchTerm);
  };
  useEffect(() => {
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  }, [searchTerm, navigate]);

  return (
    <div className="flex justify-center items-center z-10 bg-black w-full">
      <input
        type="text"
        ref={input}
        className="bg-white relative text-black h-3/4 mr-5 rounded-3xl py-2 px-4 outline-none sm:w-64 w-full"
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
