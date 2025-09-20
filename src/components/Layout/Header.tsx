import { useState } from "react";
import { Button } from "../ui/button";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" p-4 flex gap-4 my-2 relative justify-between  items-center md:mx-6 mx-2">
      <img src="images/logo.svg" alt="" className="object-contain" />
      {!isOpen ? (
        <MenuIcon
          className="w-8 h-8 md:hidden cursor-pointer ml-auto"
          onClick={toggleSidebar}
        />
      ) : (
        <XIcon
          className="w-8 h-8 md:hidden cursor-pointer ml-auto"
          onClick={toggleSidebar}
        />
      )}
      <nav className="md:relative">
        <div className="hidden md:flex justify-between items-center text-sm w-full">
          <div className="flex gap-4 text-gray-500">
            <div>Features</div>
            <div>Pricing</div>
            <div>Resources</div>
          </div>
          <div className="flex gap-4">
            <Button className="text-gray-500" variant="secondary">
              Login
            </Button>
            <Button>Sign Up</Button>
          </div>
        </div>

        {isOpen && (
          <div className="flex md:hidden flex-col rounded-lg gap-6 bg-[#3b3054] text-white absolute top-[4rem]  p-6 z-50 shadow-md left-0 w-full translate-x-1/2 animate-fade-slide">
            <div className="flex flex-col gap-4 text-center">
              <div>Features</div>
              <div>Pricing</div>
              <div>Resources</div>
            </div>
            <div className="h-[1px] bg-gray-500 my-2" />
            <div className="flex flex-col gap-4 text-center">
              <Button variant="secondary" className="text-white bg-transparent">
                Login
              </Button>
              <Button className="rounded-full">Sign Up</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
