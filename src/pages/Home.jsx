import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/Home/Header";
import TempPartHome from "../ReusableComponents/TempPartHome";
import { tempPartHomeDetails } from "../Utils/constants.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  changeTopProducts,
  loadingProducts,
} from "../Store/Slices/ProductsSlice.js";

export const SliderControlls = ({ uniqeClass }) => {
  const style =
    "w-[35px] md:w-[50px] h-[35px] md:h-[50px] text-center leading-[35px] md:leading-[50px] bg-grayColor rounded-full hover:text-white hover:bg-orangeColor transition-colors duration-300 border border-gray-200";
  return (
    <div className="flex gap-4">
      <button
        className={`${style} ${uniqeClass} prev-sliding transition-colors`}
      >
        <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
      </button>
      <button
        className={`${style} ${uniqeClass} next-sliding transition-colors`}
      >
        <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
      </button>
    </div>
  );
};

export const OptionsControlls = () => {
  const { topSellingProducts } = useSelector(
    ({ ProductsSlice }) => ProductsSlice
  );
  const dispatch = useDispatch();

  const buttons = ["offers products", "popular products"];

  const style = (text) =>
    `outline-none border rounded-md py-2 px-4 font-semibold uppercase text-sm hover:bg-grayColor bg-${
      topSellingProducts === text ? "grayColor" : "white"
    } transition-colors duration-300 w-[max-content]`;
  return (
    <div className="flex gap-4 flex-wrap justify-center items-center">
      {buttons.map((button) => (
        <button
          className={style(button)}
          key={button}
          onClick={() =>
            button !== topSellingProducts &&
            (dispatch(changeTopProducts(button)),
            dispatch(loadingProducts({ state: "loading", value: true })))
          }
        >
          {button}
        </button>
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <main>
      <Header />
      {tempPartHomeDetails.map((details) => (
        <TempPartHome
          {...details}
          key={details.heading}
          controlls={details.controlls}
        >
          {details.children}
        </TempPartHome>
      ))}
    </main>
  );
};

export default Home;
