import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Videos from "./Videos";
import { fetchFromAPI } from "./Fetch";

const Feed = () => {
  const [category, setCategory] = useState("New");

  const [videos, setVideos] = useState(null);
  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${category}`)
      .then((data) => {
        setVideos(data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);
  return (
    <>
      <div className="md:flex w-full">
        <div className="lg:w-52">
          <Nav category={category} setCategory={setCategory} />
        </div>
        <div className="flex flex-col w-full">
          <div className="bg-black text-white font-extrabold text-3xl p-3 lg:h-12 lg:w-full">
            <p>
              {category}
              <span className="text-red-600 "> Videos</span>
            </p>
          </div>
          <Videos videos={videos} isDetail={false} />
        </div>
      </div>
    </>
  );
};

export default Feed;
