import { Fragment } from "react";
import saleBanner from "../../../assets/Sale-of-the-month.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useCountdown from "../../../hooks/useCountdown";

const SaleTheMonth = () => {
  const date = {
    day: 42,
    hrs: 10,
    min: 15,
    sec: 5,
  };
  const time = useCountdown(date);

  return (
    <div className="relative">
      <img
        src={saleBanner}
        className="h-[250px] lg:h-[130px] w-full object-cover"
      />
      <div className="absolute h-full text-white top-0 left-[50%] -translate-x-1/2 lg:ml-10 w-[max-content] py-6 lg:py-0 flex gap-4 md:gap-6 lg:gap-8 flex-col lg:flex-row items-center justify-center">
        <h1 className="font-semibold text-2xl md:text-4xl">
          sale of the month
        </h1>
        <div className="flex gap-5 items-center [&>div]:text-center [&>div>h1]:font-bold [&>div>h1]:text-yellowColor [&>div>h1]:text-3xl">
          {Object.keys(time).map((key) => (
            <Fragment key={key}>
              <div>
                <h1>{time[key]}</h1>
                <div className="uppercase text-sm font-semibold">{key}</div>
              </div>
              {key !== "sec" && <span>:</span>}
            </Fragment>
          ))}
        </div>
        <button
          className="w-[max-content] bg-yellowColor text-blackColor rounded-md py-2 px-5 font-semibold hover:bg-blackColor hover:text-yellowColor transition-colors duration-300 uppercase"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          order now
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default SaleTheMonth;
