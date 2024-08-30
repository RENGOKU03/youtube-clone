import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "./Fetch";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Loader from "./Loader";
import Top from "./Top";
import Videos from "./Videos";
import { FaCheck } from "react-icons/fa";

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

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <div>
        <div className="fixed scroll-smooth h-20 w-full z-20 bg-black" > <Top /></div>

      <div className="lg:flex w-full bg-black">
        <div className=" w-screen lg:w-[70%] lg:fixed p-10 text-white overflow-hidden pt-16">
          <div className="my-4 w-screen lg:w-full ">
            <ReactPlayer
              className="react-player "
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />
          </div>

          <p className="text-xl font-bold border-2 border-gray-900 rounded-3xl lg:p-3 p-2 bg-gray-700">
            {title}
          </p>
          <Link to={`/channel/${channelId}`}>
            <div className="flex justify-between mt-3 gap-2">
              <span className="px-2 lg:py-1 bg-gray-700 rounded-2xl flex lg:gap-3 items-center min-w-32 ">
                {channelTitle}
                <FaCheck />
              </span>
              <div className="lg:mr-4 bg-gray-700 px-2 py-1 flex flex-col lg:flex-row min-h-12 items-center min-w-44 rounded-2xl">
                {viewCount && (
                  <span> {parseInt(viewCount).toLocaleString()} views</span>
                )}
                {likeCount && (
                  <span>{parseInt(likeCount).toLocaleString()} likes</span>
                )}
              </div>
            </div>
          </Link>
        </div>
        <div className="lg:w-1/3 lg:ml-[70%]  lg:mt-20 z-10" >
          <Videos videos={videos} isDetail={true}/>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
