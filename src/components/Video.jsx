import React from "react";
import Player from "react-player";


const Video = ({
  title,
  description = "My Video Description",
  url = "https://torrentdownload-1.s3.ap-south-1.amazonaws.com/Mahaan.mkv",
}) => {
  return (
    <>
      <div className=" my-3 ">
        <div className="">
          <Player width={"95%"} height={"100%"} controls url={url} />
        </div>
        <div className="my-4 md:text-xl">
          <h3 className="font-medium">{title}</h3>
          <h3 className="my-2 md:text-sm text-gray-500">{description}</h3>
        </div>
      </div>
    </>
  );
};

export default Video;
