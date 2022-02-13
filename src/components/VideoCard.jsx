import React from "react";

const VideoCard = ({ src, title, desc, duration, added }) => {
  return (
    <a href="#" className="flex space-x-2 my-6">
      <div>
        <img className="w-36 h-20" src={src} alt="" />
      </div>
      <div>
        <p className="text-ellipsis w-40">{title}</p>
        <p className="text-xs truncate w-40 overflow-hidden text-gray-400">
          {desc}
        </p>
        <h3 className="text-xs ">
          Duration: <span className="text-gray-500">{duration} mins</span>
        </h3>
        <h3 className="text-xs">
          Added On: <span className="text-gray-500">{added}</span>
        </h3>
      </div>
    </a>
  );
};

export default VideoCard;
