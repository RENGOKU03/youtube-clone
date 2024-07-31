import React from "react";

const Navicon = ({ item, setCategory, isActive }) => {
  const handelCategoryClick = () => {
    setCategory(item.text);
  };
  return (
    <div>
      <button
        className={`${
          isActive ? "bg-[#FC1503]" : "bg-black"
        } flex rounded-2xl items-center text-white px-3 py-2 font-semibold text-xl gap-2 w-36`}
        key={item.text}
        onClick={() => handelCategoryClick(item)}
      >
        {item.icon}
        <p>{item.text}</p>
      </button>
    </div>
  );
};

export default Navicon;
