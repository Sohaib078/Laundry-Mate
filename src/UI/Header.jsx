import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-secondary">
      <div className="p-6 w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between text-[#444444]">
          {/* Logo Section */}

          <h1 className="font-semibold text-2xl mb-4 md:mb-0">
            <a href="#hero">Laundry Mate</a>
          </h1>

          {/* Navigation Section */}
          <div className="font-medium text-[#444444] flex gap-5 md:gap-10 capitalize cursor-pointer mb-4 md:mb-0">
            <p className="hover:text-blue-primary transition duration-300">
              <a href="#hero">Home</a>
            </p>
            <p className="hover:text-blue-primary transition duration-300">
              <a href="#our_services">Services</a>
            </p>
            <p className="hover:text-blue-primary transition duration-300">
              <a href="#how_it_works">How It Works</a>
            </p>
          </div>

          {/* Button Section */}
          <button className="px-4 py-2 rounded-md bg-blue-primary text-white text-lg hover:bg-blue-primary transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
