/* eslint-disable no-unused-vars */
import React from "react";
import TodoImage from "../assets/projectsImage/Todo.png";
function Portfolio() {
  const proj = [
    {
      id: 1,
      src: TodoImage,
      name: "Todo List",
      techStack: "HTML, CSS, JS",
      code: "https://www.linkedin.com/in/nirmal-patra-140b25263/",
      demo: "https://twitter.com/nirmalpatra06",
    },
    {
      id: 2,
      src: TodoImage,
      code: "https://www.linkedin.com/in/nirmal-patra-140b25263/",
      demo: "https://twitter.com/nirmalpatra06",
    },
    {
      id: 3,
      src: TodoImage,
      code: "https://www.linkedin.com/in/nirmal-patra-140b25263/",
      demo: "https://twitter.com/nirmalpatra06",
    },
    {
      id: 4,
      src: TodoImage,
    },
    {
      id: 5,
      src: TodoImage,
    },
    {
      id: 6,
      src: TodoImage,
    },
  ];
  return (
    <div
      name="potfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col  justify-center w-full h-full ">
        {/* Heading */}
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline">Portfolio</h2>
          <p className="text-xl py-2">Check out some of my work right here</p>
        </div>
        {/* Heading */}

        {/* Project container */}
        <div className=" mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {/* Project */}
          {proj.map(({ id, src, code, demo, name, techStack }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img className=" hover:scale-105 duration-300" src={src} alt="" />
              <div className="flex flex-col gap-2 p-4">
                <p>{name}</p>
                <p>{techStack}</p>
              </div>
              <div className=" flex items-center justify-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={code}
                  className="w-1/2 px-6 py-2 m-4 hover:scale-105 duration-300 border border-gray-500 hover:border-gray-200 rounded-md text-center"
                >
                  Code
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={demo}
                  className="w-1/2 px-6 py-2 m-4 hover:scale-105 duration-300 border border-gray-500 hover:border-gray-200 rounded-md text-center"
                >
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
