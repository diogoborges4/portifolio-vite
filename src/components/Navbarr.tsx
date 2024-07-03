import { useState } from "react";
import { Link } from "react-router-dom";

const Navbarr = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 shadow-lg border-b border-slate-800 p-4">
      <div className="container flex items-center justify-end ">
        <div className="hidden md:flex space-x-4">
          <Link
            className=" no-underline duration-500 ease-in-out hover:text-white hover:border-b hover:border-b-indigo-500 border-l border-r border-slate-800 font-medium text-lg mb-0"
            to={"/"}
          >
            _home
          </Link>
          <Link
            className=" no-underline duration-500 ease-in-out hover:text-white hover:border-b hover:border-b-indigo-500 border-l border-r border-slate-800 font-medium text-lg "
            to={"/projects"}
          >
            _projects
          </Link>
          <Link
            className=" no-underline duration-500 ease-in-out hover:text-white hover:border-b hover:border-b-indigo-500 border-l border-r border-slate-800 font-medium text-lg  "
            to={"/about-me"}
          >
            _about
          </Link>
          <button className="bg-transparent text-gray-600 rounded border border-gray-500  duration-500 ease-in-out hover:bg-indigo-600 hover:text-white">
            <a
              href="https://wa.me/48991602597/"
              target="norrefer"
              className="my-2 mx-1 flex"
            >
              contact-me
            </a>
          </button>
        </div>
        <div className="md:hidden">
          <button
            id="menu-button"
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <Link
          className="block no-underline duration-500 ease-in-out hover:text-white hover:border-b hover:border-b-indigo-500 border-l border-r border-slate-800 font-medium text-lg "
          to={"/"}
        >
          _home
        </Link>
        <Link
          className="block no-underline duration-500 ease-in-out hover:text-white hover:border-b hover:border-b-indigo-500 border-l border-r border-slate-800 font-medium text-lg "
          to={"/projects"}
        >
          _projects
        </Link>
        <Link
          className="block no-underline duration-500 ease-in-out hover:text-white hover:border-b hover:border-b-indigo-500 border-l border-r border-slate-800 font-medium text-lg  "
          to={"/about-me"}
        >
          _about
        </Link>
        <button className=" bg-transparent text-gray-600 rounded border border-gray-500  duration-500 ease-in-out hover:bg-indigo-600 hover:text-white">
          <a
            href="https://wa.me/48991602597/"
            target="norrefer"
            className="my-2 mx-1 flex "
          >
            contact-me
          </a>
        </button>
      </div>
    </nav>
  );
};

export default Navbarr;
