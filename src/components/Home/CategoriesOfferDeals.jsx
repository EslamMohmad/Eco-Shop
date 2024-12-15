import { Swiper, SwiperSlide } from "swiper/react";
import { categoriesOfferSlides, screenClass } from "../../Utils/constants";
import { Autoplay, Navigation } from "swiper/modules";

const CategoriesOfferDeals = ({ uniqeClass }) => {
  const breakPoints = {
    1200: {
      slidesPerView: 5,
    },
    1030: {
      slidesPerView: 4,
    },
    750: {
      slidesPerView: 3,
    },
    430: {
      slidesPerView: 2,
    },
  };

  return (
    <Swiper
      spaceBetween={35}
      className={screenClass}
      navigation={{
        nextEl: `.${uniqeClass}.next-sliding`,
        prevEl: `.${uniqeClass}.prev-sliding`,
      }}
      modules={[Autoplay, Navigation]}
      speed={800}
      loop={true}
      breakpoints={breakPoints}
    >
      {categoriesOfferSlides.map((slide) => (
        <SwiperSlide key={slide.img} className="group">
          <div className="cursor-pointer p-7 justify-center items-center bg-white rounded-md border border-black/20 flex flex-col gap-5 ">
            <div className="overflow-hidden rounded-full w-3/4 h-3/4 ">
              <img
                src={slide.img}
                className="mx-auto group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="bg-redColor py-1 px-5  rounded-md uppercase text-white text-sm font-semibold text-nowrap">
              min {slide.offer}% off
            </div>
            <div className="text-center">
              <h1 className="font-semibold text-xl text-black text-nowrap">
                {slide.heading}
              </h1>
              <p className="text-gray-500 text-sm text-nowrap">{slide.text}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CategoriesOfferDeals;
