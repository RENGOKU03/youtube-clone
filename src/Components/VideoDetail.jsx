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
        <div className="h-full w-[70%] fixed p-10">
          <ReactPlayer
            className="react-player"
            height={"700px"}
            width={"100%"}
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
          />
        </div>
        <div className="w-1/3 ml-[70%]">
          <Videos videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
