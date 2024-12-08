import React, { useEffect, useState } from "react";
import Icon from "../assets/Icon.svg";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import DarkMode from "./DarkMode";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Added empty dependency array to ensure effect runs only once

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Testimonial", path: "testimonial" },
    { link: "FAQ", path: "faq" },
  ];

  return (
    <header
      className={`w-full bg-white  fixed top-0 left-0 right-0 transition-all dark:bg-black dark:text-white duration-300 ${
        isSticky ? "shadow-md bg-white" : ""
      }`}
    >
      <nav className="flex justify-between items-center p-4 lg:px-14">
        <div>
          <a
            href="/"
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img src={Icon} className="w-10" alt="Logo" />
            <span className="text-[#263238] dark:text-white">NEXT</span>
          </a>
        </div>

        <ul className="md:flex space-x-12 hidden">
          {navItems.map(({ link, path }) => (
            <a
              href={`#${path}`}
              key={path}
              className="block text-base text-gray-900 dark:text-white hover:text-brandPrimary"
            >
              {link}
            </a>
          ))}
        </ul>

        <div className="space-x-12 hidden lg:flex items-center">
          <a
            href="/login"
            className="text-brandPrimary dark:hover:text-white  hover:text-gray-900"
          >
            Login
          </a>
          <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">
            Sign up
          </button>
          <DarkMode />
        </div>
        <div className="md:hidden flex  flex-row-reverse gap-8">
          <button
            onClick={toggleMenu}
            className="text-neutralDGrey focus:outline-none focus:text-gray-500 "
          >
            {isMenuOpen ? (
              <FaXmark className="w-6 h-6 text-neutralDGrey" />
            ) : (
              <FaBars className="w-6 h-6 text-neutralDGrey " />
            )}
          </button>
          <DarkMode />
        </div>
      </nav>
      <div
        className={`space-y-4 px-4 mt-16 py-7 text-center pb-5 bg-brandPrimary text-xl ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <a
            href={`#${path}`}
            key={path}
            className="block text-base text-white  hover:text-neutralDGrey"
          >
            {link}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
