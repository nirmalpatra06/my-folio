/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import HeroImage from "../assets/banner.png";
import ProfileImg from "../assets/men.png";
import { MdOutlineFileDownload } from "react-icons/md";

function Home() {
  return (
    <div
      name="home"
      className="h-screen mt-16 md:mt-0 w-full bg-gradient-to-b from-black via-black to-gray-800 flex items-center justify-center"
    >
      <div className="flex  flex-col justify-center items-center md:flex-row px-4 max-w-screen-lg h-full  mx-auto">
        <div className="text-white flex flex-col justify-center h-full">
          <div className="flex gap-2">
            <span className="text-3xl md:text-5xl text-white font-bold">
              I'm a
            </span>
            <div className="w-max">
              <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-3xl md:text-5xl text-white font-bold">
                Frontend Dev
              </h1>
            </div>
          </div>
          <p className="text-gray-600 py-4 max-w-md">
            A passionate Web Developer Dedicated to Crafting Innovative
            Applications and Embracing Emerging Technologies
          </p>
          <div>
            <a
              href="/JsQ.pdf"
              download={true}
              className="group animate-pulse flex items-center  rounded-md gap-1 p-2 bg-gradient-to-r from-cyan-300 to-blue-500 w-fit"
            >
              <MdOutlineFileDownload
                size={25}
                className="group-hover:scale-125 duration-300"
              />
              <span>Resume</span>
            </a>
          </div>
        </div>
        {/* <div className="w-[400px]"> */}
        <img
          src={ProfileImg}
          alt="MyImage"
          className="rounded-full md:mt-36 animate-bounce-slow bg-gradient-to-b from-gray-950 to bg-gray-700 mx-auto w-2/3 md:w-[40%]"
        />
        {/* </div> */}
      </div>
    </div>
  );
}

export default Home;
