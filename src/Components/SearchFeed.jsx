import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "./Fetch";
import Top from "./Top.jsx";
import Videos from "./Videos.jsx";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  return (
    <div className=" text-white bg-black">
      <Top />
      <h1 className="text-4xl mb-6 mt-6 ml-5 font-semibold ">
        Search Results For: <span className="text-[#FC1503]">{searchTerm}</span>{" "}
        videos
      </h1>
      <Videos videos={videos} isDetail={false}/>
    </div>
  );
};

export default SearchFeed;
