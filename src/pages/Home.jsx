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
              "https://nyc3.digitaloceanspaces.com/streamer/example/Akash_Vaani_EP01%EA%9E%89Best_Laid_Plans.mkv?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AMDAOAOHZLMUO4LTFAML%2F20220214%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20220214T065410Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e134a114ed8c792449f5a89b6cf18d8fea4634e830f23a1378f1f9b7fc2bbdb1"
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
