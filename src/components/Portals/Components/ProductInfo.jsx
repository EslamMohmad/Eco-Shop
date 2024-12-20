import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import Star from "../../../ReusableComponents/Rating";
import { useState } from "react";
import {
  ItemCounter,
  ItemWeight,
} from "../../../ReusableComponents/ColumnCardItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Grid, Navigation, Thumbs } from "swiper/modules";
import { payMethodes } from "../../../Utils/constants";
import { closeOverlay } from "../../../Store/Slices/PortalSlice";
import Rating from "../../../ReusableComponents/Rating";

const ProductInfo = () => {
  const {
    productInfo: { discount, images, name, price, rating },
  } = useSelector(({ ProductsSlice }) => ProductsSlice);
  const { productInfoState } = useSelector(({ PortalSlice }) => PortalSlice);

  const [weight, setWeight] = useState(1);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [activeSlide, setActiveSlide] = useState(0);

  const productArrowStyles =
    "absolute z-10 top-1/2 -translate-y-1/2 w-[50px] h-[50px] leading-[50px] text-center bg-black/5 rounded-full shadow-xl opacity-0 transition-all group-hover:opacity-100";

  const ratingStarsHandler = (rating) => {
    const emptyStars = Array.from(
      { length: 5 },
      (e) => (e = <Star key={e} color="gray-400" />)
    );

    emptyStars.splice(
      0,
      +rating,
      ...Array.from(
        { length: +rating },
        (e) => (e = <Star key={e} color="yellow-400" />)
      )
    );

    return emptyStars;
  };

  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      {productInfoState && (
        <motion.div
          className="relative p-7 bg-white flex overflow-auto flex-col h-[90%] lg:h-auto lg:flex-row w-[900px] m-10 gap-6"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            className="absolute top-0 right-0 z-10 bg-black text-white py-1 px-2"
            onClick={() => dispatch(closeOverlay(false))}
          >
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
          </button>
          <div className="lg:w-1/2 flex flex-col sm:flex-row justify-between gap-4 lg:flex-col h-3/4 lg:h-auto">
            <Swiper
              onSlideChange={(e) => setActiveSlide(e.activeIndex)}
              thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
              modules={[Navigation, Thumbs, FreeMode, Autoplay]}
              autoplay={{ delay: "3000", disableOnInteraction: false }}
              speed={800}
              navigation={{
                nextEl: `.productInfoArrowRight`,
                prevEl: `.productInfoArrowLeft`,
              }}
              className="relative group sm:w-[96%] lg:w-auto mx-0"
            >
              <button
                className={`${productArrowStyles} productInfoArrowLeft left-0 group-hover:left-6`}
              >
                <FontAwesomeIcon icon="fa-solid fa-chevron-left" size="xs" />
              </button>
              {images.map((img) => (
                <SwiperSlide key={img}>
                  <img
                    src={img}
                    className="border w-full object-cover h-full"
                  />
                </SwiperSlide>
              ))}
              <button
                className={`${productArrowStyles} productInfoArrowRight right-0 group-hover:right-6`}
              >
                <FontAwesomeIcon icon="fa-solid fa-chevron-right" size="xs" />
              </button>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              modules={[FreeMode, Navigation, Thumbs, Grid]}
              freeMode={true}
              watchSlidesProgress={true}
              breakpoints={{
                1023: {
                  spaceBetween: 16,
                  slidesPerView: images.length,
                  grid: {
                    rows: 1,
                    fill: "row",
                  },
                },
                640: {
                  spaceBetween: 16,
                  slidesPerView: 1,
                  grid: {
                    rows: images.length,
                    fill: "column",
                  },
                },
                0: {
                  spaceBetween: 16,
                  slidesPerView: 3,
                  grid: {
                    rows: 1,
                    fill: "row",
                  },
                },
              }}
              className="mx-0 mt-2 sm:mt-0 lg:mt-2 lg:w-full"
            >
              {images?.map((img, idx) => (
                <SwiperSlide
                  key={img}
                  className={`cursor-pointer sm:!mr-0 lg:!mr-auto`}
                >
                  <img
                    src={img}
                    className={`border ${
                      activeSlide === idx
                        ? "border-gray-500"
                        : "border-gray-200"
                    } object-cover h-full w-full`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="lg:w-1/2">
            <div className="pb-7 border-b flex flex-col gap-2">
              <h1 className="text-2xl font-semibold">{name}</h1>
              <div className="flex items-center gap-2 lg:justify-between flex-wrap">
                <div className="flex gap-[1px]">
                  <Rating color="yellow-300" rating={rating} />
                </div>
                <span className="text-[13px] text-gray-400">2 reviews</span>/
                <p className="text-red-600 font-bold">8 sold in last 2 hours</p>
              </div>
              <div className="flex items-center gap-5">
                <h1 className="text-4xl font-semibold text-orangeColor">
                  ${price.after.toFixed(2)}
                </h1>
                {price?.before !== 0 && (
                  <p className="line-through text-xl text-gray-500">
                    ${price?.before.toFixed(2)}
                  </p>
                )}
                {discount !== 0 && (
                  <div className="bg-redColor px-2 py-1 text-white text-[12px] font-semibold rounded-md">
                    {discount}%
                  </div>
                )}
              </div>
            </div>
            <div className="pt-7 flex flex-col gap-5">
              <p className="text-gray-500 leading-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry dummy text and typesetting industry
              </p>
              <p>
                <span className="font-bold">size : </span>
                <span className="text-gray-600">{weight}kg</span>
              </p>
              <ItemWeight getValue={setWeight} />
              <div className="flex gap-3">
                <ItemCounter />
                <button className="w-3/4 rounded-md py-3 border border-black hover:bg-black hover:text-white uppercase transition-colors duration-500 font-semibold">
                  add to cart
                </button>
              </div>
              <button className="rounded-md py-3 border border-black bg-black text-white hover:bg-orangeColor hover:border-transparent uppercase transition-colors duration-500 font-semibold">
                buy it now
              </button>
              <div className="flex gap-2">
                {payMethodes.map((method) => (
                  <img key={method} src={method} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductInfo;
