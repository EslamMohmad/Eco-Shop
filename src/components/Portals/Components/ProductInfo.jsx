import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import Star from "../../../ReusableComponents/Star";
import { useState } from "react";
import { ItemCounter, ItemWeight } from "../../../ReusableComponents/CardItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { payMethodes } from "../../../Utils/constants";

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

  const ratingStarsHandler = () => {
    const emptyStars = Array.from(
      { length: 5 },
      (e) => (e = <Star key={e} color="gray-300" />)
    );

    emptyStars.splice(
      0,
      +rating,
      ...Array.from(
        { length: +rating },
        (e) => (e = <Star key={e} color="yellow-300" />)
      )
    );

    return emptyStars;
  };

  return (
    <AnimatePresence>
      {productInfoState && (
        <motion.div
          className="p-7 bg-white flex lg:w-[900px] mx-10 gap-6"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="w-1/2">
            <Swiper
              onSlideChange={(e) => setActiveSlide(e.activeIndex)}
              thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
              modules={[Navigation, Thumbs, FreeMode, Autoplay]}
              autoplay={{ delay: "2000", disableOnInteraction: false }}
              speed={800}
              navigation={{
                nextEl: `.productInfoArrowRight`,
                prevEl: `.productInfoArrowLeft`,
              }}
              className="relative group"
            >
              <button
                className={`${productArrowStyles} productInfoArrowLeft left-0 group-hover:left-6`}
              >
                <FontAwesomeIcon icon="fa-solid fa-chevron-left" size="xs" />
              </button>
              {images.map((img) => (
                <SwiperSlide key={img}>
                  <img src={img} className="border" />
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
              spaceBetween={16}
              modules={[FreeMode, Navigation, Thumbs]}
              freeMode={true}
              watchSlidesProgress={true}
              slidesPerView={images.length}
              className="flex gap-2 mt-2"
            >
              {images?.map((img, idx) => (
                <SwiperSlide key={img} className={`cursor-pointer w-[20%]`}>
                  <img
                    src={img}
                    className={`border ${
                      activeSlide === idx
                        ? "border-gray-500"
                        : "border-gray-200"
                    } object-cover`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-1/2">
            <div className="pb-7 border-b flex flex-col gap-2">
              <h1 className="text-2xl font-semibold">{name}</h1>
              <div className="flex items-center justify-between">
                <div className="flex gap-[1px]">{...ratingStarsHandler()}</div>
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
