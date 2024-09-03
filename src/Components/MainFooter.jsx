import { FaSquarePhone } from "react-icons/fa6";
import { SiImessage } from "react-icons/si";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Footer from "../UI/Footer";

const MainFooter = () => {
  return (
    <div className="Footer bg-blue-secondary  text-sm">
      <div className="w-11/12 lg:w-4/5 text-black flex md:flex-row  gap-8 flex-col mx-auto py-20">
        <div className="space-y-4 w-full md:w-[30%] ">
          <div className=" md:bg-transparent flex md:justify-start justify-center text-black text-2xl font-semibold">
            <p> Laundry Mate</p>
          </div>
          <p className="text-xs text-[#444444]">
            Wash Me is your go-to solution for convenient and reliable laundry
            services. We bridge the gap between laundromats and customers,
            saving you time and effort. Experience hassle-free laundry like
            never before—book, track, and get clean clothes delivered right to
            your door.
          </p>
        </div>
        <div className=" w-full  md:w-[30%] flex    md:justify-center     ">
          <div className="flex flex-col    items-start">
            <p className="font-medium text-base text-[#444444] pb-5 text-center">
              Our Navigation
            </p>
            <div className="text-[#444444] font-medium  gap-3  flex flex-col   ">
              <p> Home </p>

              <p> About </p>

              <p> How It Works </p>
            </div>
          </div>
        </div>

        {/* //Head Office  */}

        <div className="">
          <p className="pb-3 font-medium text-base  text-[#444444]">
            HEAD OFFICE
          </p>
          <div className="flex gap-4">
            <FaMapMarkerAlt className="text-[#444444] text-2xl" />
            <p className="text-[#444444]">
              {" "}
              516 Pinnacle Al-Barsha 1, Arab United Arab Emirates
            </p>
          </div>
          <div className=" space-y-4 text-[#444444]">
            <div className="flex gap-4">
              <FaSquarePhone className="text-[#444444] text-2xl " />
              <a href="tel:(+1) 954-272-8515" className="pt-1">
                {" "}
                (+971) 567-866-556{" "}
              </a>
            </div>
            <p className="flex gap-4">
              <SiImessage className="text-[#444444] text-2xl" />
              <a href="mailto:info@7kingscode.com">info@alltechsystem.com</a>
            </p>

            <div className="flex gap-4 text-3xl md:text-2xl text-[#444444]">
              <FaSquareFacebook />
              <FaInstagram /> <FaLinkedinIn />
              {/* <FaTwitter /> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainFooter;
