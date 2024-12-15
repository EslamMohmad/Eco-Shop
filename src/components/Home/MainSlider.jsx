import { Swiper, SwiperSlide } from "swiper/react";
import { mainSliderImages } from "../../Utils/constants.jsx";
import "swiper/css";

import { Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";

const SlideRightElement = ({
  tag = "div",
  children,
  delay,
  state: { currentsliderIndex, index },
  ...props
}) => {
  let Component = motion[tag];

  return (
    <Component
      {...props}
      initial={{
        translateX: currentsliderIndex === index ? -100 : 0,
        opacity: currentsliderIndex === index ? 0 : 1,
      }}
      animate={{
        translateX: currentsliderIndex === index ? 0 : -100,
        opacity: currentsliderIndex === index ? 1 : 0,
      }}
      exit={{
        translateX: currentsliderIndex === index ? -100 : 0,
        opacity: currentsliderIndex === index ? 0 : 1,
      }}
      transition={{ delay, duration: 0.5 }}
    >
      {children}
    </Component>
  );
};

const MainSlider = () => {
  let [currentsliderIndex, setCurrentSliderIndex] = useState(0);

  return (
    <div className="w-full lg:w-1/2 order-1 lg:order-none rounded-md relative overflow-hidden">
      <Swiper
        className="h-full"
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{ delay: "3000", disableOnInteraction: false }}
        speed={500}
        modules={[Autoplay]}
        loop={true}
        onSlideChange={(e) => setCurrentSliderIndex(e.realIndex)}
      >
        {mainSliderImages.map(({ img, heading_one, heading_two }, index) => (
          <SwiperSlide className="relative w-full mr-5" key={img}>
            <div className="absolute top-14 left-1/2 -translate-x-1/2 text-center text-blackColor">
              <SlideRightElement
                tag="h4"
                delay="0.2"
                state={{ currentsliderIndex, index }}
                className="uppercase w-[max-content] mx-auto
              font-semibold tracking-wide text-sm md:text-xl lg:text-base xl:text-xl border-b border-b-black mb-2 md:mb-5"
              >
                {heading_one}
              </SlideRightElement>
              <SlideRightElement
                tag="h1"
                delay="0.4"
                state={{ currentsliderIndex, index }}
                className="text-2xl sm:text-5xl lg:text-3xl xl:text-5xl mx-auto font-semibold w-[max-content]"
              >
                {heading_two}
              </SlideRightElement>
              <SlideRightElement
                tag="button"
                delay="0.6"
                state={{ currentsliderIndex, index }}
                className="mt-3 sm:mt-6 bg-yellowColor text-blackColor rounded-md py-2 px-5 font-semibold hover:bg-blackColor hover:text-yellowColor transition-colors duration-300"
              >
                shop now
                <FontAwesomeIcon
                  icon="fa-solid fa-cart-shopping"
                  className="ml-1"
                />
              </SlideRightElement>
            </div>
            <img
              src={img}
              className="h-[450px] object-cover xs:h-full"
              draggable="false"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainSlider;
