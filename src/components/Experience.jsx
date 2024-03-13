/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import HtmlImage from "../assets/skillsImage/html.png";
import CssImage from "../assets/skillsImage/css.png";
import TailwindImage from "../assets/skillsImage/tailwind.png";
import JavascriptImage from "../assets/skillsImage/javascript.png";
import ReactImage from "../assets/skillsImage/react.png";
import GithubImage from "../assets/skillsImage/github.png";
function Experience() {
  const techs = [
    {
      id: 1,
      src: HtmlImage,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: CssImage,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: JavascriptImage,
      title: "Javascript",
      style: "shadow-yellow-500 ",
    },
    {
      id: 4,
      src: TailwindImage,
      title: "Tailwind CSS",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      src: ReactImage,
      title: "React",
      style: "shadow-sky-600",
    },
    {
      id: 6,
      src: GithubImage,
      title: "Github",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div
      name="experience"
      className=" bg-gradient-to-b from-gray-800 to-black w-full   md:h-[750px] text-white"
    >
      <div className="max-w-screen-lg mx-auto px-4   flex flex-col justify-center  w-full h-full">
        <div className="pt-10">
          <h2 className="text-4xl font-bold inline">Experience</h2>
          <p className="py-4">These are the Technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style, imgStyle }) => (
            <div
              key={id}
              className={`flex flex-col items-center  shadow-md hover:scale-105 duration-300 rounded-lg py-2 ${style}`}
            >
              <img src={src} alt="Img" className="w-[110px] mx-auto" />
              <p className="text-2xl mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
