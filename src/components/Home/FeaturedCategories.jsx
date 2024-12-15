import { Swiper, SwiperSlide } from "swiper/react";
import { categoriesList } from "../../Utils/constants";
import { Autoplay, Navigation } from "swiper/modules";

const FeaturedCategories = ({ uniqeClass }) => {
  const breakPoints = {
    1500: {
      slidesPerView: 7,
      spaceBetween: 25,
    },
    1200: {
      slidesPerView: 6,
    },
    1030: {
      slidesPerView: 5,
    },
    650: {
      slidesPerView: 4,
    },
    550: {
      slidesPerView: 3,
    },
    350: {
      slidesPerView: 2,
    },
    1: {
      slidesPerView: 1,
    },
  };

  return (
    <Swiper
      spaceBetween={25}
      modules={[Autoplay, Navigation]}
      speed={800}
      loop={true}
      autoplay={{ delay: "2000", disableOnInteraction: false }}
      navigation={{
        nextEl: `.${uniqeClass}.next-sliding`,
        prevEl: `.${uniqeClass}.prev-sliding`,
      }}
      breakpoints={breakPoints}
    >
      {categoriesList.map((categorie) => (
        <SwiperSlide key={categorie.text} className="h-auto cursor-pointer">
          <div className="bg-grayColor py-7 sm:max-w-[200px] flex flex-col gap-5 justify-center items-center rounded-lg overflow-hidden hover:bg-yellowColor transition-colors duration-300">
            <div className="w-[110px] h-[110px] bg-white rounded-full">
              <img src={categorie.img} className="m-auto my-[27.5px]" />
            </div>
            <p className="text-center w-[120px] font-semibold text-blackColor">
              {categorie.text}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeaturedCategories;
