import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleMainMenu } from "../../../Store/Slices/PortalSlice";
import { mainMenuList } from "../../../Utils/constants.jsx";
import { useState } from "react";

const MainMenu = () => {
  const { mainMenuState } = useSelector(({ PortalSlice }) => PortalSlice);

  const [listState, setListState] = useState(false);

  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      {mainMenuState && (
        <motion.div
          className="absolute left-0 top-0 bg-white w-full xs:w-[350px] h-full"
          initial={{ translateX: "-100%" }}
          animate={{ translateX: 0 }}
          exit={{ translateX: "-100%", transition: { duration: 0.2 } }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-3 px-4 bg-black/90 flex justify-between text-white">
            <h1 className="uppercase text-[15px] font-semibold">menu</h1>
            <div
              className="cursor-pointer"
              onClick={() => dispatch(toggleMainMenu())}
            >
              <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </div>
          </div>
          <ul>
            {Object.keys(mainMenuList).map((item) => (
              <li key={item}>
                <div className="relative py-3 px-5 border-b font-semibold flex flex-wrap text-blackColor capitalize text-[16px]">
                  <span className="hover:text-orangeColor cursor-pointer transition-colors duration-200">
                    {item}
                  </span>
                  {mainMenuList[item] && (
                    <div
                      className="ml-auto hover:text-orangeColor cursor-pointer transition-colors duration-200"
                      onClick={() => setListState(!listState)}
                    >
                      {listState ? (
                        <FontAwesomeIcon icon="fa-solid fa-minus" />
                      ) : (
                        <FontAwesomeIcon icon="fa-solid fa-plus" size="sm" />
                      )}
                    </div>
                  )}
                </div>
                <AnimatePresence>
                  {listState && mainMenuList[item] && (
                    <motion.ul
                      className="relative left-0 bottom-0 w-full overflow-hidden"
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {mainMenuList[item].map((li) => (
                        <li
                          className="relative py-3 px-5 !pl-8 border-b font-semibold flex flex-wrap text-blackColor capitalize text-[16px] hover:text-orangeColor cursor-pointer transition-colors duration-200"
                          key={li}
                        >
                          {li}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MainMenu;
