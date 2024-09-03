import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const MobileNav = ({ mode }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-11/12 mx-auto flex justify-between items-center">
      <p className="text-4xl font-semibold py-4">Laundry Mate</p>
      <div className="flex px-4 md:px-0 items-center gap-4">
        {toggle ? (
          <p onClick={() => setToggle(!toggle)}>
            <RxCross1 className="text-bluecolor font-semibold text-2xl" />
          </p>
        ) : (
          <GiHamburgerMenu
            onClick={() => setToggle(!toggle)}
            className="text-3xl text-bluecolor"
          />
        )}
      </div>
      {toggle && (
        <nav className="mobile-nav absolute top-16 left-0 w-full bg-blue-primary z-[100] p-4 animate-slideIn h-screen">
          <ul
            className={`flex flex-col font-medium w-full gap-2 cursor-pointer ${
              mode ? "text-black" : "text-black"
            }`}
          >
            <li className="header-li" onClick={() => setToggle(false)}>
              <p className="block px-4 py-2 hover:text-black">
                <a href="#hero">Home</a>
              </p>
            </li>
            <hr />
            <li className="header-li" onClick={() => setToggle(false)}>
              <p className="block px-4 py-2 hover:text-black">
                <a href="#our_services">Services</a>
              </p>
            </li>
            <li className="header-li">
              <div className="text-black border-b">
                <div className="relative w-full overflow-hidden">
                  <input
                    type="checkbox"
                    className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                  />
                </div>
              </div>
            </li>
            <li className="header-li" onClick={() => setToggle(false)}>
              <p className="block px-4 py-2 hover:text-black">
                {" "}
                <a href="#how_it_works">How It Works</a>
              </p>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileNav;
