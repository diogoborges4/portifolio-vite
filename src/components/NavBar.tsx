// Initialization for ES Users

import { Link } from "react-router-dom";
import { Dropdown, Ripple, initTWE } from "tw-elements";

initTWE({ Dropdown, Ripple });

const NavBar: React.FC = () => {
  return (
    <>
      <nav className=" z-20 w-4/5 max-[765px]:w-2/4 fixed top-10 py-1 max-[1366px]:ml-20 bg-slate-900 shadow-lg border-b border-slate-800 ">
        <div className="w-full flex items-center justify-between mt-0">
          <div
            className=" flex ml-60 md:items-center order-3 md:order-1"
            id="menu"
          >
            <nav>
              <ul className="md:flex items-center justify-between text-base text-slate-500 font-['Fira Code'] pt-0">
                <li>
                  <Link
                    className="inline-block no-underline duration-500 ease-in-out hover:text-white hover:border-b hover:border-b-indigo-500 border-l border-r border-slate-800 font-medium text-lg py-2 px-4 "
                    to={"/"}
                  >
                    _home
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block no-underline duration-500 ease-in-out hover:text-white hover:border-b hover:border-b-indigo-500 border-l border-r border-slate-800 font-medium text-lg py-2 px-4 "
                    to={"/projects"}
                  >
                    _projects
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block no-underline duration-500 ease-in-out hover:text-white hover:border-b hover:border-b-indigo-500 border-l border-r border-slate-800 font-medium text-lg py-2 px-4 "
                    to={"/about-me"}
                  >
                    _about
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="order-2 md:order-3 flex items-center justify-end mr-0 md:mr-4">
            <div className=" flex items-center md:w-full">
              <button className="bg-transparent text-gray-600  p-2 rounded border border-gray-500 mr-4 duration-500 ease-in-out hover:bg-indigo-600 hover:text-white">
                <a href="https://wa.me/48991602597/" target="norrefer">
                  contact-me
                </a>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
