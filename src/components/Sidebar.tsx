import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline"; // Heroicons for the hamburger icon

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle hamburger menu
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      />

      {/* Sidebar container */}
      <div
        className={`lg:w-64 w-56 h-full bg-gray-800 text-white fixed top-0 left-0 transition-all transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Close button (only for mobile) */}
        <div className="lg:hidden p-4">
          <button onClick={toggleSidebar}>
            <XIcon className="w-8 h-8 text-white" />
          </button>
        </div>

        <div className="flex flex-col justify-between h-full">
          {/* Sidebar Links */}
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <a href="#about" className="text-lg">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-lg">
                Contact
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-lg">
                Pricing
              </a>
            </li>
            <li>
              <a href="#services" className="text-lg">
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Hamburger button for mobile */}
      <div className="lg:hidden p-4">
        <button onClick={toggleSidebar}>
          <MenuIcon className="w-8 h-8 text-white" />
        </button>
      </div>

      {/* Content Area */}
      <div className="lg:ml-64 p-8">
        {/* Your main content goes here */}
        <h1 className="text-2xl">Welcome to the Site</h1>
      </div>
    </div>
  );
};

export default Sidebar;
