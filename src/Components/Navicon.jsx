import React from "react";

const Navicon = ({ item }) => {
  return (
    <div>
      <button className="bg-[#FC1503] flex rounded-2xl items-center text-white px-3 py-2 font-semibold text-xl gap-2 w-36">
        {item.icon}
        <p>{item.text}</p>
      </button>
    </div>
  );
};

export default Navicon;
