import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "./Fetch";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Loader from "./Loader";
import Top from "./Top";
import VideoCard from "./VideoCard";
import Videos from "./Videos";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);
  if (!videoDetail?.snippet) return <Loader />;
  return (
    <div>
      <Top />
      <div className="flex w-full bg-black">
        <div className="h-full w-[70%] fixed p-10 text-white">
          <ReactPlayer
            className="react-player"
            height={"600px"}
            width={"100%"}
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
          />
          <p className="text-xl font-bold border rounded-3xl p-3 bg-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            blanditiis placeat? Reiciendis, odio beatae. Neque corporis quidem
            harum eius iste.
          </p>
          <div className="flex justify-between mt-3">
            <span className="px-2 py-1 bg-gray-700 rounded-2xl">
              Channel Name
            </span>
            <div className="mr-4 bg-gray-700 px-2 py-1  rounded-2xl">
              <span>Views</span>
              <span>Likes</span>
            </div>
          </div>
        </div>
        <div className="w-1/3 ml-[70%]">
          <Videos videos={videos} wide={"md:w-1/3"} />
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
