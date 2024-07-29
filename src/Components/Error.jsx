import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="bg-red-500 h-16 text-center m-auto p-2 whitespace-nowrap w-80 text-4xl rounded-3xl mt-4">
      <Link to="/" className="h-full w-full">
        Back To HomePage
      </Link>
    </div>
  );
};

export default Error;
