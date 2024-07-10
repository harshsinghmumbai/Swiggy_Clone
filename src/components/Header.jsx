"use client";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FaCartArrowDown } from "react-icons/fa6";
import { ModeToggle } from "./ModeToggle";
import { SearchBox } from "./SearchBox";

const Header = () => {
  return (
    <>
      <header className="border-b rounded-lg border-gray-600 py-1 flex justify-between items-center sm:px-2">
        <div className="flex justify-center items-center space-x-1 sm:space-x-3">
          <GiHamburgerMenu className="text-[1.30rem]" />
          <ModeToggle />
        </div>
        <Image
          src={"/logo.svg"}
          alt="Logo"
          width={100}
          height={100}
          className="w-[2.75rem] h-[2.75rem] sm:mx-5"
        />
        <SearchBox />
        <div className="flex space-x-1 justify-center items-center ml-2 sm:space-x-3 sm:ml-10">
          <FaCartArrowDown className="text-2xl" />
          <CgProfile className="text-2xl" />
        </div>
      </header>
    </>
  );
};

export default Header;
