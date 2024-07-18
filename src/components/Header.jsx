"use client";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FaCartArrowDown } from "react-icons/fa6";
import { ModeToggle } from "./ModeToggle";
import { SearchBox } from "./SearchBox";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <>
      <header className="border-b rounded-lg border-gray-600 py-2 lg:py-1 flex justify-between items-center sm:px-4">
        <div className="flex justify-center items-center space-x-1 sm:space-x-3">
          <Sheet>
            <SheetTrigger asChild>
              <GiHamburgerMenu className="text-[1.30rem] sm:text-2xl lg:hidden" />
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader>
                <div className="flex items-end mt-4">
                  <Image
                    src="/logo.svg"
                    alt="logo"
                    priority
                    width={100}
                    height={100}
                    className="w-12 h-12"
                  />
                  <p className="text-3xl text-orange-500 font-semibold">
                    Swiggy
                  </p>
                </div>
                <ul className="text-left pt-3 space-y-2 text-lg pl-7">
                  <li>Popular Place</li>
                  <li>Offer</li>
                  <li>Help Us</li>
                  <li>Swiggy Corporate</li>
                  <li>Get Swiggy App</li>
                </ul>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <ModeToggle />
        </div>
        <nav className="hidden lg:block lg:mx-10 w-full">
          <ul className="flex items-center text-center space-x-7 lg:ml-2 lg:text-lg ">
            <li>Place</li>
            <li>Offer</li>
            <li>Help</li>
            <li>Swiggy Corporate</li>
            <li>Swiggy App</li>
          </ul>
        </nav>
        <Image
          src={"/logo.svg"}
          alt="Logo"
          width={100}
          height={100}
          priority
          className="w-[2.75rem] h-[2.75rem] sm:mx-5 lg:mx-0 lg:order-first"
        />
        <SearchBox />
        <div className="flex space-x-3 justify-center items-center ml-2 sm:space-x-5 sm:ml-7">
          <div className="relative">
            <FaCartArrowDown className="text-2xl" />
            <p className="bg-red-500 text-white rounded-full size-5 absolute top-[-14px] left-[14px] flex justify-center items-center text-sm font-extrabold">
              10
            </p>
          </div>
          <Avatar className="size-7 sm:size-9">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </header>
    </>
  );
};

export default Header;
