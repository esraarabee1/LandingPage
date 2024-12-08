import React from "react";
import { Carousel } from "flowbite-react";
const Home = () => {
  return (
    <section className="" id="home">
      <div className="container px-4 lg:px-14  max-w-screen-2xl mx-auto min-h-screen h-screen bg-neutralSilver dark:bg-black dark:text-white duration-300">
        <Carousel className="w-full mx-auto">
          <div className=" my-28 md:my-8 py-12 flex flex-col md:flex flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src=""></img>
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug dark:text-white">
                Lessons and insights{" "}
                <span className="text-brandPrimary leading-snug">
                  from 8 years
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem
              </p>
              <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4">
                Register
              </button>
            </div>
          </div>
          <div className=" my-28 md:my-8 py-12 flex flex-col md:flex flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src=""></img>
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug dark:text-white">
                Let's Learn and Earn{" "}
                <span className="text-brandPrimary leading-snug">
                  in 4 Months
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem
              </p>
              <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4">
                Register
              </button>
            </div>
          </div>
          <div className=" my-28 md:my-8 py-12 flex flex-col md:flex flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src=""></img>
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug dark:text-white">
                Learn and Earn Money{" "}
                <span className="text-brandPrimary leading-snug">
                  from 4 Months
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem
              </p>
              <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4">
                Register
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Home;
