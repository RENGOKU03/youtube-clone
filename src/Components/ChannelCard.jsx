import React from "react";

const ChannelCard = ({ channelDetail }) => {
  return (
    <div className="flex flex-col gap-7 md:flex-row md:flex-wrap items-center">
      <div className="w-11/12 lg:w-96 md:w-56 bg-gray-900 rounded-2xl">
        <img
          className="object-cover w-full rounded-t-2xl h-2/3"
          src={
            channelDetail?.snippet?.thumbnails?.high?.url ||
            "https://picsum.photos/id/1025/1920/1080"
          }
          alt="video"
        />
        <div className="p-2 ml-3 text-left h-1/3">
          <h3 className="font-semibold text-xl text-wrap  text-white">
            {channelDetail?.snippet?.title || "Title not available"}
          </h3>
          <p className="text-gray-400 text-xs">
            Subscribers
            <span className="font-semibold">
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString("en-US") || "Not Available"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChannelCard;
