import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Navlinks = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "About",
  },
  {
    id: 3,
    name: "Portfolio",
  },
  {
    id: 4,
    name: "Contact",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-black px-6  flex items-center justify-between h-20">
        <div>
          <h1 className="text-5xl text-white ">Logo</h1>
        </div>
        <ul className="hidden md:flex">
          {Navlinks.map((link) => (
            <li
              key={link.id}
              className="text-gray-400 px-4 cursor-pointer hover:scale-105 duration-300"
            >
              {link.name}
            </li>
          ))}
        </ul>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer z-10 pr-4 md:hidden"
        >
          {isOpen ? (
            <IoClose className="text-red-500" size={30} />
          ) : (
            <IoMenu className="text-white" size={30} />
          )}
        </div>
        {isOpen && (
          <ul className="flex flex-col justify-center items-center text-gray-400 absolute top-0 left-0 h-screen w-full bg-gradient-to-b from-black to-gray-700 ">
            {Navlinks.map((link) => (
              <li key={link.id} className="px-4 py-6 cursor-pointer text-4xl">
                {link.name}
              </li>
            ))}
          </ul>
        )}
        {/* <button className="text-white">Mode</button> */}
      </nav>
    </>
  );
}

export default Navbar;
