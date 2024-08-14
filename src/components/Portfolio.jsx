import React from "react";

import dwell from "../../public/dwell.png";
import cred from "../../public/cred.png";
import pay from "../../public/pay.png";
import sort from "../../public/sort.png";
function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: dwell,
      name: "Dwelling - A roof over one's head",
      link: "https://github.com/ashwinikumartiwarivitbhopal2022/Dwelling-.git",
      desc: " A Real Estate web app for buying and selling properties.",
    },
    {
      id: 2,
      logo: cred,
      name: "Code Red",
      link: "https://github.com/ashwinikumartiwarivitbhopal2022/Chat-Application.git",
      desc: "A chat app designed for real-time communication, ensuring instant connectivity.",
    },
    {
      id: 3,
      logo: pay,
      name: "Phee Pay",
      link: "https://github.com/ashwinikumartiwarivitbhopal2022/Fee-Payment-Web-App.git",
      desc: "A fee payment web app, offering secure and convenient payment options.",
    },
    {
      id: 4,
      logo: sort,
      name: "Sorting Visualizer",
      link: "https://www.linkedin.com/",
      desc: "A web app that brings algorithms to life to understand sorting techniques.",
    },
    // {
    //   id: 5,
    //   logo: python,
    //   name: "Python",
    //   link: "https://www.linkedin.com/",
    //   desc: " Coursera",
    // },
    // {
    //   id: 6,
    //   logo: java,
    //   name: "Java",
    //   link: "https://www.linkedin.com/",
    //   desc: " Coursera",
    // },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, link, desc }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">{desc}</p>
              </div>
              <div>
                {/* <div className=" px-6 py-4 space-x-3 justify-around">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button> */}
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded ml-2 mt-2">
                  <a href={link} target="_blank">
                    Source Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
