import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import leftImg from "../../assets/main-banners/left-banner.jpg";
import rightImg from "../../assets/main-banners/right-banner.jpg";
import MainSlider from "./MainSlider";
import { motion } from "framer-motion";
import { screenClass } from "./../../Utils/constants";

const SildeBannar = ({ imgSrc, heading }) => {
  return (
    <div className="relative w-full xs:w-[calc(100%_/_2_-_1.25rem_/_2)] lg:w-1/4">
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 text-center">
        <motion.h1
          className="font-semibold text-2xl sm:text-4xl lg:text-2xl xl:text-4xl text-white"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {heading}
        </motion.h1>
        <motion.button
          className="w-[max-content] mt-4 sm:mt-6 bg-yellowColor text-blackColor rounded-md py-2 px-5 font-semibold hover:bg-blackColor hover:text-yellowColor transition-colors duration-300"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          shop now
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" className="ml-1" />
        </motion.button>
      </div>
      <img src={imgSrc} className="w-full" />
    </div>
  );
};

const Header = () => {
  return (
    <header
      className={`flex flex-wrap-reverse lg:flex-nowrap justify-between gap-5 mt-0 lg:mt-5 ${screenClass}`}
    >
      <SildeBannar imgSrc={leftImg} heading="bakery products" />
      <MainSlider />
      <SildeBannar imgSrc={rightImg} heading="fresh vegetables" />
    </header>
  );
};

export default Header;
