import React from "react";
import clothes from "../assets/images/wash.png";
import dryclean from "../assets/images/DryClean.png";
import iron from "../assets/images/Iron.png";
import steams from "../assets/images/steam.png";
import towel from "../assets/images/Towels.png";

const OurServices = () => {
  const services = [
    {
      image: clothes,
      title: "Wash",
    },
    {
      image: dryclean,
      title: "Dry Clean",
    },
    {
      image: iron,
      title: "Iron",
    },
    {
      image: steams,
      title: "Steam",
    },
    {
      image: towel,
      title: "Towels & Beddings",
    },
  ];

  return (
    <div id="our_services" className="px-4 py-12">
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl text-[#444444] font-semibold">
          Our Services
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-8 w-[90%] mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-24 h-24 md:w-28 md:h-28 mb-4 p-4 object-contain bg-[#D9D9D9] rounded-full"
            />
            <div className="text-lg md:text-xl text-[#444444] font-medium">
              {service.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
