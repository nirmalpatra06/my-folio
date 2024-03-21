/* eslint-disable no-unused-vars */
import React from "react";
import EComm from "../assets/projectsImage/Ecomm.png";
import CarRental from "../assets/projectsImage/car-rental.png";
import imageSE from "../assets/projectsImage/image-se.png";
import NewsApp from "../assets/projectsImage/news-app.png";
import Todo from "../assets/projectsImage/todo.png";
function Portfolio() {
  const projects = [
    {
      id: 1,
      src: EComm,
      name: "UrbanTrends-Ecommerce",
      techStack: "React, Redux Tookit, Tailwind CSS",
      code: "https://github.com/nirmalpatra06/urbantrends-ecomm",
      demo: "https://urbantrends-ecomm.vercel.app/",
    },
    {
      id: 2,
      src: CarRental,
      name: "Car Rental",
      techStack: "React, Tailwind CSS",
      code: "https://github.com/nirmalpatra06/car-rent-app",
      demo: "https://car-rentin.netlify.app/",
    },
    {
      id: 3,
      src: imageSE,
      name: "Image Search Engine",
      techStack: "HTML, CSS, JS",
      code: "https://github.com/nirmalpatra06/image-search-engine",
      demo: "https://nirmalpatra06.github.io/image-search-engine/",
    },
    {
      id: 4,
      src: NewsApp,
      name: "News-Hub",
      techStack: "HTML, CSS, JS",
      code: "https://github.com/nirmalpatra06/news-app",
      demo: "https://nirmalpatra06.github.io/news-app/",
    },
    {
      id: 5,
      src: Todo,
      name: "Todo-List",
      techStack: "HTML, CSS, JS",
      code: "https://github.com/nirmalpatra06/To-do-list",
      demo: "https://nirmalpatra06.github.io/To-do-list/",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b md:h-[800px] md:pt-[100px] from-black to-gray-800 w-full text-white "
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
          {projects.map(({ id, src, code, demo, name, techStack }) => (
            <div
              key={id}
              className="shadow-md hover:bg-gray-900 shadow-gray-600 rounded-lg"
            >
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
