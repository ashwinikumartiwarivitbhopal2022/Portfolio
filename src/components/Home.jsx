import React from "react";
import pic from "../../public/my1.jpg";
import { FaNodeJs, FaSquareInstagram } from "react-icons/fa6";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { SiExpress, SiMongodb } from "react-icons/si";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span className="text-green-500 font-bold">Developer</span> */}
              <ReactTyped
                className="text-green-500 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              I am Ashwini Kumar Tiwari.I am currently pursuing my MCA from
              Vellore Institute of Technology, Bhopal. I have a deep interest in
              development. My skills includes front-end technologies such as
              ReactJs, HTML, CSS, and JavaScript, and I have made real world
              projects in it. I am always eager to learn new techniques. I am
              looking for an opportunity to showcase my skills. I believe in a
              team work and willing to work with a collaborative environment.
            </p>
            <br />
            {/* Socila Media */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold">Connect Me On !</h1>
                <ul className="flex space-x-7">
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <IoLogoLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/" target="_blank">
                      <IoLogoGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <FaSquareInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold">Currently Working On !</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[400px] md:h-[450px] ml-6"
              alt=""
            />
          </div>
        </div>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-2 py-2 rounded  -mt-1">
          <a
            href="https://drive.google.com/file/d/1GsFFRoJU9yJaw6rP8_9St4KaAhj8AblP/view?usp=sharing"
            target="_blank"
          >
            Click Here ! to view RESUME
          </a>
        </button>
      </div>
      <hr />
    </>
  );
};

export default Home;
