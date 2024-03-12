/* eslint-disable no-unused-vars */
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaSquareTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/nirmal-patra-140b25263/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/nirmalpatra06",
    },
    {
      id: 3,
      child: (
        <>
          Twitter <FaSquareTwitter size={30} />
        </>
      ),
      href: "https://twitter.com/nirmalpatra06",
      style: "rounded-br-md",
    },
  ];
  return (
    <div className="hidden lg:flex flex-col fixed top-[35%] left-0 text-white">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={`w-40 h-14 px-4 bg-gray-500  flex ml-[-100px] hover:ml-[-10px] duration-300 hover:rounded-md ${links.style}`}
          >
            <a
              className="flex justify-between items-center w-full"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
