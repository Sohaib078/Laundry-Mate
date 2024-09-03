import rectangle from "../assets/images/Rectangle.png";
import vip from "../assets/images/VIP.png";
import dots from "../assets/images/greendots.png";
import layer from "../assets/images/layers.png";
import star from "../assets/images/mainstar.png";

const VIPTreatment = () => {
  return (
    <div className=" py-20 bg-blue-secondary">
      <div className=" mx-auto flex flex-col lg:flex-row justify-center items-center   w-[90%] ">
        {/* Image Section */}

        <div className="flex w-full justify-center relative h-full ">
          <div className="  w-full  flex     ">
            <img src={rectangle} alt="" className="w-full" />
            <img
              src={vip}
              alt="main-banner"
              className="absolute top-0  px-10 "
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full flex flex-col text-center justify-center  py-8">
          <h2 className="text-5xl font-semibold     text-[#444444]  pb-8 ">
            Get the VIP Treatment
          </h2>
          <p className="text-lg text-[#444444]  ">
            Get rid of the hassle of going to the laundromat yourself and
            spending your time on chores. Start using Laundrymate now and
            experience a new level of comfort.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VIPTreatment;
