import React from "react";
import signup from "../assets/images/Signup.png";
import order from "../assets/images/PlaceOrder.png";
import pick from "../assets/images/Pickup.png";
import enjoy from "../assets/images/EnjoyClothes.png";

const HowItWorks = () => {
  const services = [
    {
      image: signup,
      title: "SignUp",
    },
    {
      image: order,
      title: "Place Order",
    },
    {
      image: pick,
      title: "Wait for PickUp",
    },
    {
      image: enjoy,
      title: "Enjoy Spotless Clothes",
    },
  ];

  return (
    <div id="how_it_works" className="px-4 py-12">
      <div className="text-center">
        <p className="text-3xl lg:text-4xl text-[#444444] font-semibold">
          How It Works
        </p>
        <p className="pt-3 text-[#666666]">It’s as easy as it gets</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 mx-auto w-full max-w-6xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <img
              src={service.image}
              className="w-28 h-28 mb-4 p-4 object-contain bg-[#D9D9D9] rounded-full"
              alt={service.title}
            />
            <div className="text-xl text-[#444444] font-medium">
              {service.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
