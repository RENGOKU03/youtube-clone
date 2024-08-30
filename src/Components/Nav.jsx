import React from "react";
import Navicon from "./Navicon";
import { IoMdHome } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoMdMusicalNote } from "react-icons/io";
import { MdCastForEducation } from "react-icons/md";
import { TbBrandGooglePodcasts } from "react-icons/tb";
import { LuFileVideo2 } from "react-icons/lu";
import { IoLogoGameControllerB } from "react-icons/io";
import { MdLiveTv } from "react-icons/md";
import { MdOutlineSportsVolleyball } from "react-icons/md";
import { GiAmpleDress } from "react-icons/gi";
import { MdFace2 } from "react-icons/md";

const Nav = ({ category, setCategory }) => {
  const navItems = [
    { text: "New", icon: <IoMdHome /> },
    { text: "Coding", icon: <FaCode /> },
    { text: "ReactJS", icon: <FaReact /> },
    { text: "NextJs", icon: <RiNextjsFill /> },
    { text: "Music", icon: <IoMdMusicalNote /> },
    { text: "Education", icon: <MdCastForEducation /> },
    { text: "Podcast", icon: <TbBrandGooglePodcasts /> },
    { text: "Movie", icon: <LuFileVideo2 /> },
    { text: "Gaming", icon: <IoLogoGameControllerB /> },
    { text: "Live", icon: <MdLiveTv /> },
    { text: "Sport", icon: <MdOutlineSportsVolleyball /> },
    { text: "Fashion", icon: <GiAmpleDress /> },
    { text: "Beauty", icon: <MdFace2 /> },
  ];
  return (
    <>
      <div className="bg-black p-2 flex gap-3 overflow-scroll md:overflow-hidden md:flex-col ">
        {navItems.map((item) => (
          <Navicon
            setCategory={setCategory}
            item={item}
            key={item.text}
            isActive={category === item.text}
          />
        ))}
      </div>
    </>
  );
};

export default Nav;
