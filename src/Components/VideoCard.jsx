import React from "react";

const VideoCard = () => {
  return (
    <div className="w-11/12 m-auto bg-gray-900 rounded-2xl">
      <img
        className="object-cover w-full rounded-t-2xl h-2/3"
        src="https://picsum.photos/id/1025/1920/1080"
        alt="video"
      />
      <div className="p-2 ml-3 text-left h-1/3">
        <h3 className="font-semibold text-xl text-wrap  text-white">
          Title of the Video
        </h3>
        <p className="text-gray-400 text-xs">
          By <span className="font-semibold">Author Name</span>
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
