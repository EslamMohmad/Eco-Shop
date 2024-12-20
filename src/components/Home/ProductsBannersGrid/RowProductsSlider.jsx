import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import RowCardItem from "./../../../ReusableComponents/RowCardItem";
import { Autoplay, Navigation, Grid } from "swiper/modules";
import "swiper/css/grid";

const RowProductsSlider = ({ products, heading, delay }) => {
  return (
    <div className="bg-white p-8 rounded-md text-blackColor">
      <div className="flex justify-between items-center pb-5">
        <h1 className="font-semibold text-xl">{heading}</h1>
        <div className="[&>button]:p-3">
          <button className={`${heading.replace(/\s/g, "")} prev-sliding`}>
            <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
          </button>
          <button className={`${heading.replace(/\s/g, "")} next-sliding`}>
            <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
          </button>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        grid={{ rows: 1, fill: "column" }}
        modules={[Grid, Autoplay, Navigation]}
        speed={800}
        autoplay={{ delay, disableOnInteraction: false }}
        navigation={{
          prevEl: `.${heading.replace(/\s/g, "")}.prev-sliding`,
          nextEl: `.${heading.replace(/\s/g, "")}.next-sliding`,
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={`${heading} ${product?.name}`} className="!w-full">
            <RowCardItem {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RowProductsSlider;
