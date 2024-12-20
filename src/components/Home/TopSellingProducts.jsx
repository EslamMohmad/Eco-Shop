import { useEffect } from "react";
import { database } from "../../Firebase/Firebase";
import { onValue, ref } from "firebase/database";
import ColumnCardItem from "../../ReusableComponents/ColumnCardItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid } from "swiper/modules";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, loadingProducts } from "../../Store/Slices/ProductsSlice";

const TopSellingProducts = () => {
  const { filteredProducts, topSellingProducts, loadingProductsState } =
    useSelector(({ ProductsSlice }) => ProductsSlice);

  const dispatch = useDispatch();

  const topProductsState = {
    "offers products": ["Fruits", "Vegetables"],
    "popular products": ["Milk and dairy"],
  };

  const offers = [
    "deals of the week",
    "biggest discounts",
    "combos you can't miss",
    "the $19.00 corner",
    "limited time offer",
  ];

  useEffect(() => {
    const myRef = ref(database, "/");

    onValue(myRef, (snapshot) => {
      const object = {};
      topProductsState[topSellingProducts].map(
        (item) => (object[item] = snapshot.val()[item])
      );
      dispatch(
        getProducts({ products: snapshot.val(), filteredProducts: object })
      );
    });
  }, [topSellingProducts]);

  useEffect(() => {
    let timer;

    timer = setTimeout(() => {
      if (loadingProductsState.state === "loading") {
        dispatch(loadingProducts({ state: "done", value: false }));
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [topSellingProducts]);

  return (
    <>
      <Swiper
        breakpoints={{
          1270: {
            enabled: Object.values(filteredProducts).length > 12 ? false : true,
            slidesPerView: 6,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
          630: {
            enabled: true,
            slidesPerView: 3,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
          420: {
            enabled: true,
            slidesPerView: 2,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
          100: {
            enabled: true,
            slidesPerView: 1,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
        }}
        spaceBetween="30"
        speed={800}
        autoplay={{ delay: "3000", disableOnInteraction: false }}
        modules={[Grid, Autoplay]}
      >
        {Object.values(filteredProducts)
          .flat()
          .map((item) => (
            <SwiperSlide key={item?.name}>
              <ColumnCardItem {...item} />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="flex pt-10  gap-[1px] justify-center flex-wrap xl:flex-nowrap">
        {offers.map((offer) => (
          <div
            key={offer}
            className="cursor-pointer bg-redColor/80 rounded-md flex-grow w-auto sm:w-[25%] flex justify-center flex-col items-center h-[120px] p-5 group"
          >
            <div>
              <h1 className="text-white font-semibold capitalize text-lg">
                {offer}
              </h1>
              <div className="relative w-[max-content]">
                <p className=" text-yellowColor capitalize text-lg font-semibold">
                  view offers
                </p>
                <div className="h-[1.5px] bg-yellowColor group-hover:scale-x-0  transition-all origin-center duration-300"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
  s;
};

export default TopSellingProducts;
