/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import HeroImage from "../assets/banner.png";
import { MdOutlineFileDownload } from "react-icons/md";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex items-center justify-center"
    >
      <div className="flex  flex-col items-center md:flex-row px-4 max-w-screen-lg h-full  mx-auto">
        <div className="text-white flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold">I'm a Frontend Dev</h1>
          <p className="text-gray-600 py-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            assumenda nemo voluptatum sint porro, optio libero quo temporibus
            tempora ad.
          </p>
          <div>
            <a
              href="/JsQ.pdf"
              download={true}
              className="group flex items-center p-2 rounded-md gap-1 bg-gradient-to-r from-cyan-300 to-blue-500 w-fit"
            >
              <MdOutlineFileDownload
                size={25}
                className="group-hover:scale-125 duration-300"
              />
              <span>Resume</span>
            </a>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="MyImage"
            className="rounded-full mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
