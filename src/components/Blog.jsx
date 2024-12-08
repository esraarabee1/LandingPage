import React from "react";

import aig from "../assets/aig.png"; // Correctly importing the image
import macbook from "../assets/macbook.jpg";
import { MdTurnRight } from "react-icons/md";
const Blog = () => {
  const blogs = [
    {
      id: 1,
      title:
        " lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      image: aig,
    },
    {
      id: 2,
      title: " lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
      image: macbook,
    },
    {
      id: 3,
      title: " lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
      image: macbook,
    },
  ];
  return (
    <section className="" id="faq">
      <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto dark:bg-black dark:text-white duration-300">
        <div className="text-center md:w-1/2 mx-auto">
          <h2 className="text-4xl text-neutralGrey font-semibold mb-4  mx-auto dark:text-white">
            Caring is the new marketing
          </h2>
          <p className="text-sm text-neutralGrey md-8 md:w-3/4 mx-auto dark:text-white mb-4">
            {" "}
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 justify-between items-start">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className="mx-auto relative mb-12 cursor-pointer"
            >
              <div>
                <img
                  src={blog.image}
                  className="hover:scale-95 transition-all duration-300 rounded-md"
                ></img>
              </div>
              <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
                <h3 className="mb-3 text-neutralGrey font-semibold">
                  {blog.title}
                </h3>
                <div className="flex justify-center items-center">
                  <a
                    href="/"
                    className="flex items-center cursor-pointer font-bold text-brandPrimary hover:text-neutral-700"
                  >
                    Read More
                    <MdTurnRight className="w-6 h-6 cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
