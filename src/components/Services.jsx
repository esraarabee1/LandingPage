import React from "react";
import { SiVisualstudioappcenter } from "react-icons/si";
import { SiSubtitleedit } from "react-icons/si";
import { SiHootsuite } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { TbBrandSupernova } from "react-icons/tb";
import { MdOutlineAccountBalance } from "react-icons/md";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Membership Operations",
      description:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      id: 2,
      title: "National Associations",
      description:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      id: 3,
      title: "Clubs And Groups",
      description:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
  ];

  return (
    <section className="" id="service">
      <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto dark:bg-black dark:text-white duration-300">
        <div className="text-center my-8">
          <h2 className="text-4xl text-neutralDGrey font-semibold mb-2 dark:text-white">
            Our Clients
          </h2>
          <p className="text-neutralGrey dark:text-white">
            lorem lorem lorem lorem lorem
          </p>
        </div>
        <div className="my-12 flex flex-wrap justify-between items-start gap-10">
          <SiVisualstudioappcenter className="w-20 h-20" />
          <SiSubtitleedit className="w-20 h-20" />
          <SiHootsuite className="w-20 h-20" />
          <BiLogoVisualStudio className="w-20 h-20" />
          <TbBrandSupernova className="w-20 h-20" />
        </div>
        <div className="text-center mt-20 md:w-1/2 mx-auto">
          <h2 className="text-4xl text-neutralDGrey font-semibold mb-2 dark:text-white">
            Manage your entire community in a single system
          </h2>
          <p className="text-neutralGrey dark:text-white">
            lorem lorem lorem lorem{" "}
          </p>
        </div>
        <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="md:w-[300px] md:h-80 px-4 py-8 text-center md: mx-auto rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
            >
              <div>
                <div className="bg-[#E8F5E9] h-14 w-14 mx-auto rounded-tl-2xl rounded-br-2xl mb-4">
                  <MdOutlineAccountBalance className="w-10 h-10 mr-2 dark:text-black " />
                </div>
                <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2 dark:text-white">
                  {service.title}
                </h4>
                <p className="text-sm text-neutralDGrey dark:text-white">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
