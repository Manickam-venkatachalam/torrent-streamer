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
                "https://torrentdownload-1.s3.ap-south-1.amazonaws.com/www.TamilBlasters.cam%20-%20EP01%20Best%20Laid%20plans.mkv?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWLQBHEJDYKWHMRPG%2F20220214%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20220214T063028Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=df4c90d1fd20eccc08246e84586aabb813ba9c6826aaa921f353f21247070b11"
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
