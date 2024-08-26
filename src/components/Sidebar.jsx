import { Heart, Home } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
};

export default Sidebar;

const DesktopSidebar = () => {
  return (
    <div className="p-3 md:p-8 border-r w-24 md:w-64 hidden sm:block">
      <div className="flex flex-col gap-20 sticky top-10 left-0">
        <div className="w-full">
          <Link
            to={"/"}
            className=" hidden md:block text-red-500 text-center font-bold text-4xl mx-auto"
          >
            Recipe.
          </Link>
          <img src="/mobile-logo.svg" alt="logo" className="block md:hidden" />
        </div>

        <ul className="flex flex-col items-center md:items-start gap-8 mx-auto">
          <Link to={"/"} className="flex gap-1">
            <Home size={"30"} className="mr-2" />
            <span className=" hidden md:block">Home</span>
          </Link>

          <Link to={"/favorites"} className="flex gap-1">
            <Heart size={"30"} className="mr-2" />
            <span className="hidden md:block">Favorites</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

const MobileSidebar = () => {
  return (
    <div
      className="flex justify-center gap-10 border-t fixed w-full
			bottom-0 left-0 bg-white z-10 p-2 sm:hidden 
		"
    >
      <Link to={"/"}>
        <Home size={"24"} className="cursor-pointer" />
      </Link>
      <Link to={"/favorites"}>
        <Heart size={"24"} className="cursor-pointer" />
      </Link>
    </div>
  );
};
