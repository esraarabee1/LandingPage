import React from "react";
import istock from "../assets/istock.jpg";
import { IoPeople } from "react-icons/io5";
import { SiClubhouse } from "react-icons/si";
import { MdOutlineEmojiEvents, MdOutlinePayment } from "react-icons/md";

const About = () => {
  return (
    <section className="" id="about">
      <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto dark:bg-black dark:text-white duration-300">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mx-auto md:w-11/12">
          <div className="md:w-2/5">
            <img src={istock} alt=""></img>
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
          <div className="md:w-1/2  w-full">
            <h2 className="text-4xl text-neutralDGrey font-semi-bold mb-4 md:w-2/3 dark:text-white">
              Helping a local <br></br>{" "}
              <span className="text-brandPrimary ">
                business reinvent itself
              </span>
            </h2>
            <p className="md:w-3/4 text-sm text-neutralDGrey mb-8 dark:text-white">
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem.
            </p>
          </div>
          <div className="md:w-1/2 w-full mx-auto flex md:flex-row flex-col items-center md:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <IoPeople className="w-10 h-10" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey fonts-semibold">
                    2,245,341
                  </h4>
                  <p>Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <IoPeople className="w-10 h-10" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey fonts-semibold">
                    2,245,341
                  </h4>
                  <p>Members</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <IoPeople className="w-10 h-10" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey fonts-semibold">
                    2,245,341
                  </h4>
                  <p>Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <IoPeople className="w-10 h-10" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey fonts-semibold">
                    2,245,341
                  </h4>
                  <p>Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
