import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import VideoCard from "./VideoCard";

const Upcoming = () => {
  const videos = [
    {
      title: "Naai Sekar ",
      desc: "Nai Sekar movie description",
      duration: 120,
      added: "30-01-2022",
      src: "https://www.quirkybyte.com/wp-content/uploads/2022/01/Bachelor-Tamil-Movie-Download-Moviesda-780x470-1.jpg",
    },
    {
      title: "Shyam Singha Rai ",
      desc: "Shyam Singha Raii  movie description",
      duration: 120,
      added: "30-01-2022",
      src: "https://www.quirkybyte.com/wp-content/uploads/2022/01/Bachelor-Tamil-Movie-Download-Moviesda-780x470-1.jpg",
    },
    {
      title: "Mudhalum Nee Mudivum Nee ",
      desc: "Mudhalum nee mudivum nee movie description",
      duration: 120,
      added: "30-01-2022",
      src: "https://www.quirkybyte.com/wp-content/uploads/2022/01/Bachelor-Tamil-Movie-Download-Moviesda-780x470-1.jpg",
    },
    {
      title: "Naai Sekar ",
      desc: "Nai Sekar movie description",
      duration: 120,
      added: "30-01-2022",
      src: "https://www.quirkybyte.com/wp-content/uploads/2022/01/Bachelor-Tamil-Movie-Download-Moviesda-780x470-1.jpg",
    },
    {
      title: "Naai Sekar ",
      desc: "Nai Sekar movie description",
      duration: 120,
      added: "30-01-2022",
      src: "https://www.quirkybyte.com/wp-content/uploads/2022/01/Bachelor-Tamil-Movie-Download-Moviesda-780x470-1.jpg",
    },
    {
      title: "Naai Sekar ",
      desc: "Nai Sekar movie description",
      duration: 120,
      added: "30-01-2022",
      src: "https://www.quirkybyte.com/wp-content/uploads/2022/01/Bachelor-Tamil-Movie-Download-Moviesda-780x470-1.jpg",
    },
    {
      title: "Naai Sekar ",
      desc: "Nai Sekar movie description",
      duration: 120,
      added: "30-01-2022",
      src: "https://www.quirkybyte.com/wp-content/uploads/2022/01/Bachelor-Tamil-Movie-Download-Moviesda-780x470-1.jpg",
    },
    {
      title: "Naai Sekar ",
      desc: "Nai Sekar movie description",
      duration: 120,
      added: "30-01-2022",
      src: "https://www.quirkybyte.com/wp-content/uploads/2022/01/Bachelor-Tamil-Movie-Download-Moviesda-780x470-1.jpg",
    },
  ];
  return (
    <div className="">
      <h1 className="md:text-xl mb-2">Upcoming Videos</h1>
      <div className=" h-full overflow-y-auto">
        {videos.map((item, index) => (
          <Fragment key={index}>
            <VideoCard
              src={item.src}
              desc={item.desc}
              title={item.title}
              duration={item.duration}
              added={item.added}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
