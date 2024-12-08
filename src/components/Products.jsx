import React from "react";
import aigenerated from "../assets/aigenerated.png";
import istock from "../assets/istock.jpg";
import ai from "../assets/ai.jpg";
import { IoPeople } from "react-icons/io5";
import { SiClubhouse } from "react-icons/si";
import { MdOutlineEmojiEvents, MdOutlinePayment } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { CiMedal } from "react-icons/ci";
import { CiSun } from "react-icons/ci";
import { CiStreamOn } from "react-icons/ci";
import { CiPenpot } from "react-icons/ci";
import { MdTurnRight } from "react-icons/md";

const Products = () => {
  return (
    <section className="" id="product">
      <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto dark:bg-black dark:text-white duration-300">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mx-auto md:w-11/12">
          <div className="md:w-2/5">
            <img src={aigenerated} alt=""></img>
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semi-bold mb-4 md:w-4/5 dark:text-white">
              The unseen of spending three years at pixelgrade
            </h2>
            <p className="md:w-3/4 text-sm text-neutralDGrey mb-8 dark:text-white">
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem.
            </p>
            <a className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-14 py-16 max-w-screen-2xl mx-auto bg-neutralSilver dark:bg-black dark:text-white duration-300">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3  w-full ">
            <img src={ai} className="w-4/5"></img>
          </div>
          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 text-neutralGrey mb-8 leading-7 dark:text-white">
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem loremblorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lore lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem.
              </p>
              <h5 className="text-brandPrimary text-xl font-semibold mb-2">
                Tim Smith
              </h5>
              <p className=" text-base text-neutralGrey mb-8">
                British Dragon Boat Racing Assocition
              </p>
              <div>
                <div className="flex items-center gap-8 flex-wrap">
                  <CiGlobe className="w-6 h-6 cursor-pointer" />
                  <CiMedal className="w-6 h-6 cursor-pointer" />
                  <CiSun className="w-6 h-6 cursor-pointer" />
                  <CiStreamOn className="w-6 h-6 cursor-pointer" />
                  <CiPenpot className="w-6 h-6 cursor-pointer" />
                  <div>
                    <a
                      href="/"
                      className="flex items-center cursor-pointer font-bold text-brandPrimary hover:text-neutral-700"
                    >
                      Meet all customers
                      <MdTurnRight className="w-6 h-6 cursor-pointer" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
