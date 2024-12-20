import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dicountBanners } from "../../Utils/constants";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import ColumnCardItem from "../../ReusableComponents/ColumnCardItem";
import "swiper/css/grid";
import { Autoplay, Grid, Navigation } from "swiper/modules";

const DairyBreadEggs = ({ uniqeClass }) => {
  const { products } = useSelector(({ ProductsSlice }) => ProductsSlice);

  const mixedProducts = Object.values(products)
    .map((value) => value.slice(0, 5))
    .flat();

  const breakPoints = {
    1250: {
      slidesPerView: 6,
    },
    1030: {
      slidesPerView: 4,
    },
    750: {
      slidesPerView: 3,
    },
    460: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  };

  return (
    <>
      <div className="flex gap-4 order-1 flex-wrap xl:flex-nowrap justify-center py-7">
        {dicountBanners.map((banner) => (
          <div
            key={banner.text}
            className="relative max-h-[260px] overflow-hidden sm:w-[calc(50%_-_0.5rem)] xl:w-1/3 rounded-md text-white hover:-translate-y-2 transition-transform duration-500 cursor-pointer"
          >
            <img src={banner.img} className="w-full h-full object-cover" />
            <div className="absolute top-1/2 left-10 -translate-y-1/2 flex flex-col gap-4 sm:gap-2 md:gap-4">
              <p className="font-semibold uppercase underline underline-offset-4 sm:text-sm md:text-base">
                get {banner.offer}% off
              </p>
              <h1 className="font-semibold text-2xl sm:text-xl md:text-3xl max-w-[70%]">
                {banner.text}
              </h1>
              <button className="font-medium py-1 sm:py-2 px-3 sm:px-4 bg-yellowColor text-blackColor hover:bg-white transition-colors duration-300 rounded-md w-[max-content] xs:text-xs sm:text-sm uppercase">
                shop now
                <FontAwesomeIcon
                  icon="fa-solid fa-arrow-right"
                  className="ml-4"
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      <Swiper
        breakpoints={breakPoints}
        slidesPerView="6"
        spaceBetween="35"
        speed={800}
        autoplay={{ delay: "3000", disableOnInteraction: false }}
        modules={[Grid, Autoplay, Navigation]}
        className="w-full order-3"
        navigation={{
          nextEl: `.${uniqeClass}.next-sliding`,
          prevEl: `.${uniqeClass}.prev-sliding`,
        }}
      >
        {mixedProducts.map((product) => (
          <SwiperSlide key={product?.name}>
            <ColumnCardItem {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default DairyBreadEggs;
