import app from "../assets/images/Preview.png";
import apple from "../assets/images/Apple.png";
import android from "../assets/images/Android.png";

const AppPreview = () => {
  return (
    <div className="w-full px-4 md:px-0">
      <div
        className="flex flex-col md:flex-row relative md:top-[-5rem] bg-white md:w-[80%] justify-center mx-auto
        rounded-2xl shadow-2xl"
      >
        <div className="pt-8 md:pt-24 px-4 md:px-12 text-center md:text-left">
          <div className="flex justify-center md:justify-start text-3xl md:text-4xl lg:text-6xl font-medium text-[#79B4B6]">
            Let's make your Life Easy
          </div>
          <div className="flex justify-center md:justify-start text-lg md:text-2xl pt-6 md:pt-12 text-[#444444]">
            <p>
              Download now and get started. <br /> It’s that simple
            </p>
          </div>
          <div className="flex justify-center md:justify-start gap-4 md:gap-8 pt-6 md:pt-12">
            <div>
              <img
                src={apple}
                alt="Apple Store"
                className="w-24 md:w-32 lg:w-40"
              />
            </div>
            <div>
              <img
                src={android}
                alt="Google Play"
                className="w-24 md:w-32 lg:w-40"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 md:mt-0">
          <img
            src={app}
            alt="App Preview"
            className="w-full md:w-[300px] lg:w-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AppPreview;
