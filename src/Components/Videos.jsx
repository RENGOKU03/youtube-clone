import React, { useEffect, useState } from "react";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";
import Loader from "./Loader";

const Videos = ({ videos }) => {
  if (!videos?.length) return <Loader />;
  return (
    <div className="flex flex-col md:flex-row gap-3 md:flex-wrap items-center w-full justify-center">
      {videos.map((video, idx) => {
        return (
          <React.Fragment key={idx}>
            {video.id.videoId && (
              <div className="w-full flex md:h-[300px] flex-col md:w-1/5 bg-gray-900 rounded-2xl overflow-hidden ">
                <VideoCard video={video} />
              </div>
            )}
            {video.id.channelId && (
              <div className=" w-11/12 flex flex-col md:w-1/5 bg-gray-900 rounded-2xl">
                <ChannelCard video={video} />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Videos;
