import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <>
      {/* // Card div */}
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <img
          className="w-full h-full rounded-t-2xl md:h-80"
          src={
            snippet?.thumbnails?.high?.url ||
            "https://picsum.photos/id/1025/1920/1080"
          }
          alt="video"
        />

        <div className="p-2 ml-3 text-left">
          <h3 className="font-semibold text-xl md:text-[15px] text-wrap text-white">
            {snippet.title.slice(0, 60) || "Title not available"}
          </h3>
          <p className="text-gray-400 text-xs">
            By
            <span className="font-semibold">
              {snippet.channelTitle || "Not Available"}
            </span>
          </p>
        </div>
      </Link>
    </>
  );
};

export default VideoCard;
