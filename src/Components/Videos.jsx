import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import Loader from "./Loader";

const Videos = ({ videos, wide }) => {
  if (!videos?.length)
    return (
      <div className="min-w-full">
        <Loader />
      </div>
    );
  return (
    <div className="flex flex-col md:flex-row gap-3 md:flex-wrap items-center mx-5 justify-center">
      {videos.map((video, idx) => {
        return (
          <React.Fragment key={idx}>
            {video.id.videoId && (
              <div
                className={`w-full flex md:h-[500px] lg:h-[420px] flex-col ${wide} bg-gray-900 rounded-2xl overflow-hidden `}
              >
                <VideoCard video={video} />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Videos;
