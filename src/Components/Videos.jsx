import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "./Fetch";

const Videos = () => {
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    setVideos(null);
    fetchFromAPI("https://youtube-v31.p.rapidapi.com/search?q=reactjs")
      .then((data) => {
        setVideos(data.items);
      })
      .catch((err) => {
        console.log(err);
        setVideos(null);
      });
  }, []);

  return <div></div>;
};

export default Videos;
