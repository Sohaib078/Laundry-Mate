import main from "../assets/images/main.png";
import bg from "../assets/images/bg-main.png";
import dots from "../assets/images/vipdots.png";
import layer from "../assets/images/layers.png";
import star from "../assets/images/vipstar.png";

const Hero = () => {
  return (
    <div id="hero" className="bg-blue-secondary">
      <div className="flex flex-col lg:flex-row w-[90%] mx-auto   lg:gap-2  h-screen lg:h-[750px] py-12 lg:py-0 items-center lg:items-start">
        {/* Text Section */}
        <div className="w-full flex justify-center items-start pt-32 h-full  text-center lg:text-left">
          <div className="">
            <div className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#444444] px-4 md:px-12 pb-6 lg:pb-12">
              Your First Choice for Laundry Services
            </div>
            <div className="px-4 md:px-12 text-md md:text-xl text-[#444444]">
              <p>
                Bridging the gap between Laundromats and{" "}
                <br className="hidden md:block" /> customers and saving their
                precious time.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start px-4 md:px-[3rem] pt-8">
              <button className="text-white py-3 px-6 text-lg md:text-xl rounded-md bg-[#EB8844]">
                Download Now
              </button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex w-[80%] justify-center relative h-full px-20">
          <div className="absolute w-full  flex justify-center">
            <img src={bg} alt="bg-main" className=" lg:w-[80%] w-full  " />
            <img src={main} alt="main-banner" className=" absolute bottom-0" />
          </div>
          <img
            src={dots}
            alt=""
            className="absolute bottom-6 left-0 lg:left-10 lg:top-[55%] 2xl:top-[70%]  z-20"
          />
          <img
            src={layer}
            alt=""
            className="absolute -right-10 top-20  lg:right-5  lg:top-20 "
          />
          <img
            src={star}
            alt=""
            className="absolute left-0 top-28 lg:left-12 lg:top-[25%] 2xl:top-[30%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
