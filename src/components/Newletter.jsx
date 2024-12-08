import React from "react";

const Newletter = () => {
  return (
    <section className="">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 dark:bg-black dark:text-white duration-300">
        <div className="lg:w-2/5 mx-auto">
          <h2 className="lg:text-5xl text-3xl text-neutral-800 font-semi-bold mb-4 lg:leading-snug text-center dark:text-white">
            The unseen of spending three years
          </h2>
          <div className="flex items-center justify-center">
            <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4">
              Get a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newletter;
