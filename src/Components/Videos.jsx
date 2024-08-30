import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import Loader from "./Loader";

const Videos = ({ videos, isDetail }) => {
  if (!videos?.length)
    return (
      <div className="min-w-full">
        <Loader />
      </div>
    );
  return (
    <div className={`grid ${isDetail ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'} gap-5 items-center mx-5`}>
      {videos.map((video, idx) => {
        return (
          <React.Fragment key={idx}>
            {video.id.videoId && (
              <div
                className={`flex min-h-[450px]  flex-col bg-gray-900 rounded-2xl overflow-hidden `}
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
