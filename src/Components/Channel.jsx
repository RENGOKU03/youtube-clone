import React, { useEffect, useState } from "react";
import Top from "./Top";
import Videos from "./Videos";
import { FaCheck } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "./Fetch";

const Channel = () => {
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      console.log(data.items.snippet.title);
      setChannelDetail(data?.items);
      const videoData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );
      setVideos(videoData?.items);
    };
    fetchResults();
  }, [id]);
  console.log(channelDetail);
  return (
    <div className="bg-black">
      <Top />
      <div>
        <div className="h-60 text-white flex justify-center">
          <div className="w-80 flex flex-col justify-center ">
            <img
              className="rounded-full w-40 m-auto"
              src={
                channelDetail?.snippet?.thumbnails?.high?.url ||
                "https://picsum.photos/id/1025/1920/1080"
              }
              alt="Channel-logo"
            />
            <div className="text-center font-semibold mt-2">
              <p>{channelDetail?.snippet?.title}</p>
              <p className="flex justify-center items-center gap-3">
                {parseInt(
                  channelDetail?.statistics?.subscriberCount
                ).toLocaleString("en-US")}{" "}
                Subscribers
                <FaCheck />
              </p>
            </div>
          </div>
        </div>
        <Videos videos={videos} wide={"md:w-1/5"} />
      </div>
    </div>
  );
};

export default Channel;
