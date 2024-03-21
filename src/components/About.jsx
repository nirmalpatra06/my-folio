/* eslint-disable no-unused-vars */
import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-fit flex items-center justify-center  bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center mt-20 md:mt-0  w-full h-full ">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline">About</h2>
        </div>
        <p className="text-xl mb-2">
          As a passionate and skilled Frontend Developer, I bring a fresh
          perspective to the field with a solid foundation in React, Tailwind,
          and Redux. As a recent graduate, I am eager to leverage my technical
          skills and creativity to contribute to dynamic and innovative
          projects. My proficiency in crafting responsive and user-friendly
          interfaces, coupled with my understanding of state management through
          Redux, positions me as a valuable asset for any development team.
        </p>
        <p className="text-xl mb-2">
          I undertook various projects that honed my problem-solving abilities
          and refined my collaborative skills. My dedication to staying abreast
          of the latest industry trends ensures that I can contribute to
          building modern and efficient web applications.
        </p>
        <p className="text-xl mb-2">
          I am particularly drawn to opportunities that foster continuous
          learning and growth, as I am committed to evolving alongside the
          ever-changing landscape of frontend development. Excited about the
          prospect of contributing my skills and enthusiasm to a dynamic team, I
          am eager to explore opportunities that allow me to make meaningful
          contributions and further develop my expertise in web development.
        </p>
      </div>
    </div>
  );
}

export default About;
