import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { headNavlinks } from "../../../Utils/constants.jsx";
import ListItem from "./ListItem";
import useMediaQuery from "../../../hooks/useMediaQuery";
import animation from "./css/HNA.module.css";
import { useState } from "react";

const List = () => {
  const media = useMediaQuery("(max-width : 1200px)");

  return (
    <div className={`flex ${media ? "" : "justify-between"} gap-5`}>
      <h5 className="text-textGrayColor font-semibold">
        Delivery on next day from 10:00 am to 09:00 pm
      </h5>
      <div className={`${media ? "pr-[70px]" : ""}`}>
        <div className="inline">
          <FontAwesomeIcon icon="fa-solid fa-phone-volume" className="pr-2" />
          <span>Need help</span>:{" "}
        </div>
        <a
          href="tel:01002623871"
          className="hover:text-orangeColor transition-colors font-bold"
        >
          +01 002 623 871
        </a>
      </div>
      <ul className="flex">
        {Object.keys(headNavlinks).map((list) => (
          <ListItem key={list} route={headNavlinks[list]} text={list} />
        ))}
      </ul>
    </div>
  );
};

const HeadNav = () => {
  const [animationState, setAnimationState] = useState(false);

  const media = useMediaQuery("(max-width : 1200px)");

  const listArray = [<List />, <List />, <List />];

  return (
    <section
      className={`relative py-3  text-textGrayColor ${
        media ? "mx-[-20px] lg:mx-[-30px]" : ""
      }`}
      onMouseEnter={() => media && setAnimationState(true)}
      onMouseLeave={() => media && setAnimationState(false)}
    >
      {!media && (
        <div className="absolute -z-10 top-0 left-[-50px] w-full h-full bg-gradient-to-r from-white via-grayColor to-white"></div>
      )}
      {media ? (
        <div className="overflow-hidden">
          <ul
            className={`relative left-[0px] flex w-[max-content] gap-5 ${
              animationState
                ? animation.navbarSlidingStop
                : animation.navbarSlidingRun
            }`}
          >
            {listArray.map((list, idx) => (
              <li key={idx}>{list}</li>
            ))}
          </ul>
        </div>
      ) : (
        <List />
      )}
    </section>
  );
};

export default HeadNav;
