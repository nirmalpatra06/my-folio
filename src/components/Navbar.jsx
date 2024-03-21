import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

const Navlinks = [
  {
    id: 1,
    name: "home",
  },
  {
    id: 2,
    name: "about",
  },
  {
    id: 3,
    name: "portfolio",
  },
  {
    id: 4,
    name: "experience",
  },
  {
    id: 5,
    name: "contact",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-black px-6 z-10 fixed top-0 w-full flex items-center justify-between h-20">
        <div>
          <h1 className="text-6xl text-white font-babylonica">Nirmal</h1>
        </div>
        <ul className="hidden md:flex">
          {Navlinks.map((link) => (
            <li
              key={link.id}
              className="text-gray-400 capitalize px-4 cursor-pointer hover:scale-105 duration-300"
            >
              <Link to={link.name} smooth duration={500}>
                {link.name}
              </Link>
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
              <li
                key={link.id}
                className="px-4 capitalize py-6 cursor-pointer text-4xl"
              >
                <Link
                  onClick={() => setIsOpen(false)}
                  to={link.name}
                  smooth
                  duration={500}
                >
                  {link.name}
                </Link>
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
