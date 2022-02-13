import React from "react";
import Video from "../components/Video";
import YoutubeLogo from "../assets/youtube-logo.png";
import Upcoming from "../components/Upcoming";
const Home = () => {
  return (
    <div className="my-2 ml-5">
      <a href="#" className="flex items-center space-x-1">
        <img src={YoutubeLogo} className="w-10 h-10" alt="Logo" />
        <h2 className="font-bold">MyTube</h2>
      </a>
      <div className="md:flex">
        <div className=" md:w-9/12">
          <Video
            title="Bachelor Movie | Youtube"
            description="Bachelor movie GV Prakash and Divya bharathi"
            url={
              "https://sgp1.digitaloceanspaces.com/torrentdownload/example%0A/Veerama_Vaagai_Soodum.mkv"
            }
          />
        </div>

        <div className="md:w-3/12">
          <Upcoming />
        </div>
      </div>
    </div>
  );
};

export default Home;
