import React, { useEffect, useState } from "react";
import "../App.css";

const Navbar = () => {
  const [scroll, setSecroll] = useState(false);
  const [show, setShow] = useState(false);
  const [rotate, setRotate] = useState(false);

  const handleClick = () => {
    setShow(!show);
    setRotate(!rotate);
  };

  let menuActive = show ? "right-5" : "-right-full";
  let rotateMenu = rotate ? "rotate-90" : "";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setSecroll(true);
      } else {
        setSecroll(false);
      }
    });
  }, []);

  let scrollActive = scroll
    ? "py-5 shadow bg-gray/90 backdrop-blur-sm"
    : "py-6";

  let scrollActive2 = scroll ? "text-black" : "text-white";

  return (
    <div className={`fixed -top-[1px]  w-full transition-all ${scrollActive}`}>
      <div className="container mx-auto ">
        <div className="px-4 flex justify-between items-center relative md:static md:px-2">
          <h1 className={`${scrollActive2} font-bold text-2xl md:text-3xl`}>
            Assembly
          </h1>
          <ul
            className={`px-2 py-4 font-semibold ${scrollActive2} leading-6 flex flex-col absolute top-14 ${menuActive} shadow shadow-slate-400 rounded-lg md:bg-transparent md:text-lg md:static md:flex-row md:shadow-none transition-all`}
          >
            <li className="group">
              <a href="" className="  px-2 group-hover:text-white ">
                Samples
              </a>
              <div className="bg-white scale-x-0 h-1 w-10 mx-auto group-hover:scale-x-150 transition-all"></div>
            </li>
            <li className="group">
              <a href="" className=" px-2 group-hover:text-white ">
                How to Works
              </a>
              <div className="bg-white scale-x-0 h-1 w-10 mx-auto group-hover:scale-x-[2.3] transition-all"></div>
            </li>
            <li className="group">
              <a href="" className=" px-2 group-hover:text-white ">
                Pricing & Service
              </a>
              <div className="bg-white scale-x-0 h-1 w-10 mx-auto group-hover:scale-x-[2.5] transition-all"></div>
            </li>
          </ul>
          <div className="flex items-center justify-between">
            <button className="bg-slate-200 font-semibold mx-3 px-3 md:mx-0 md:text-lg rounded-full">
              Star Design
            </button>
            <i
              class={`ri-menu-4-line text-2xl ${scrollActive2} ${rotateMenu} transition-all md:hidden`}
              onClick={handleClick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
