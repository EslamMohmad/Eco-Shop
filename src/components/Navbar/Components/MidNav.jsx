import { Link } from "react-router-dom";
import {
  midNavIconsLinks_Desktop,
  midNavIconsLinks,
} from "../../../Utils/constants.jsx";
import logo from "../../../assets/logo.png";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { useDispatch } from "react-redux";
import {
  toggleCartMenu,
  toggleSearchItems,
  toggleMainMenu,
} from "../../../Store/Slices/PortalSlice";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import usePrevState from "../../../hooks/usePrevState.js";

const MidNav_LessDesktop = ({
  cartMenuFunc,
  searchItemsFunc,
  mainMenuFunc,
}) => {
  const mobileView = useMediaQuery("(max-width: 600px)");

  const List = ({ children, count, objInfo, ...props }) => {
    return (
      <li
        className="relative"
        {...props}
        onClick={() =>
          objInfo.route === "cart"
            ? cartMenuFunc()
            : objInfo.route === "search" && searchItemsFunc()
        }
      >
        {objInfo.count && (
          <span className="absolute text-[9px] text-white -top-2 -right-3 w-5 h-5 rounded-full bg-orangeColor text-center leading-5">
            0
          </span>
        )}
        {children}
      </li>
    );
  };

  return (
    <section className="flex justify-between items-center py-5 text-blackColor xs:[&>*]:w-1/3">
      <span>
        <FontAwesomeIcon
          icon="fa-solid fa-bars"
          className="cursor-pointer"
          onClick={mainMenuFunc}
        />
      </span>
      <img
        src={logo}
        className="h-[33px] object-contain w-[max-content] xs:w-auto"
      />
      <ul className="flex gap-5 text-lg justify-end [&>li]:cursor-pointer">
        {midNavIconsLinks.map((props) => {
          if (mobileView && props.route === "cart") {
            return (
              <List key={props.route} objInfo={props}>
                <FontAwesomeIcon icon={props.icon} />
              </List>
            );
          }

          if (!mobileView) {
            if (props.route === "search" || props.route === "cart") {
              return (
                <List key={props.route} objInfo={props}>
                  <FontAwesomeIcon icon={props.icon} />
                </List>
              );
            } else {
              return (
                <List key={props.route} objInfo={props}>
                  <Link to={props.route}>
                    <FontAwesomeIcon icon={props.icon} />
                  </Link>
                </List>
              );
            }
          }
        })}
      </ul>
    </section>
  );
};

const MidNav_Desktop = ({ cartMenuFunc, searchItemsFunc }) => {
  return (
    <section className="py-5 flex justify-between items-center">
      <img src={logo} className="h-[33px] " />
      <SearchBar />
      <ul className="flex gap-3">
        {midNavIconsLinks_Desktop.map(({ icon, route, count }) => (
          <li
            key={route}
            className="relative hover:text-orangeColor transition-colors duration-300 cursor-pointer rounded-full bg-grayColor w-[55px] h-[55px] leading-[55px] border text-center"
            onClick={() =>
              route === "cart"
                ? cartMenuFunc()
                : route === "search" && searchItemsFunc()
            }
          >
            {count && (
              <span className="absolute text-xs text-white -top-1 -right-1 w-5 h-5 rounded-full bg-orangeColor text-center leading-5">
                0
              </span>
            )}
            {route === "cart" ? (
              <FontAwesomeIcon icon={icon} />
            ) : (
              <Link to={route}>
                <FontAwesomeIcon icon={icon} />
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

const MidNav = () => {
  const lessThanDesktop = useMediaQuery("(max-width : 1200px)");

  const [scrollValue, setScrollValue] = useState(0);

  const prevScrollValue = usePrevState(scrollValue);

  const dispatch = useDispatch();

  const toggleCartMenuFunc = () => dispatch(toggleCartMenu());

  const toggleSearchItemsFunc = () => dispatch(toggleSearchItems());

  const toggleMainMenuFunc = () => dispatch(toggleMainMenu());

  useEffect(() => {
    function onScrollFunction() {
      setScrollValue(this.scrollY);
    }

    window.addEventListener("scroll", onScrollFunction);

    return () => window.removeEventListener("scroll", onScrollFunction);
  }, [scrollValue]);

  const navbarContent = lessThanDesktop ? (
    <MidNav_LessDesktop
      cartMenuFunc={toggleCartMenuFunc}
      searchItemsFunc={toggleSearchItemsFunc}
      mainMenuFunc={toggleMainMenuFunc}
    />
  ) : (
    <MidNav_Desktop
      cartMenuFunc={toggleCartMenuFunc}
      searchItemsFunc={toggleSearchItemsFunc}
      mainMenuFunc={toggleMainMenuFunc}
    />
  );

  return (
    <>
      <AnimatePresence>
        {scrollValue < prevScrollValue && scrollValue > 300 && (
          <motion.section
            className="fixed top-0 left-0 w-full z-10 bg-white shadow-md px-5 "
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5 }}
          >
            {navbarContent}
          </motion.section>
        )}
      </AnimatePresence>
      {navbarContent}
    </>
  );
};

export default MidNav;
