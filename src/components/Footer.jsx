import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { GrLinkedin } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { TfiTwitter } from "react-icons/tfi";
import Icon from "../assets/Icon.svg";
const Footer = () => {
  return (
    <footer className="">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto   py-16 bg-[#263238] text-white  dark:bg-black dark:text-white duration-300">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 ">
          <div className="space-y-4 mb-8">
            <div>
              <a
                href="/"
                className="text-2xl font-semibold flex items-center space-x-3"
              >
                <img src={Icon} className="w-10 " alt="Logo" />
                <span className="text-white">NEXT</span>
              </a>
            </div>
            <p>copy rights @ 2025 All rights reserved</p>
            <div className="flex items-center space-x-5 ">
              <ImFacebook2 className="cursor-pointer" />
              <GrLinkedin className="cursor-pointer" />
              <BsInstagram className="cursor-pointer" />
              <TfiTwitter className="cursor-pointer" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 ">
            <div className="space-y-4">
              <h3 className=" text-xl font-semi-bold mb-4 lg:leading-snug">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <a>About US</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>Contact us</a>
                </li>
                <li>
                  <a>Pricing</a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className=" text-xl font-semi-bold mb-4 lg:leading-snug">
                Support
              </h3>
              <ul className="space-y-2">
                <li>About US</li>
                <li>Blog</li>
                <li>Contact us</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className=" text-xl font-semi-bold mb-4 lg:leading-snug">
                Stay up to date
              </h3>
              <input type="email" placeholder="your email address"></input>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
