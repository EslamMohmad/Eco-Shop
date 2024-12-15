import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSearchItems } from "../../../Store/Slices/PortalSlice";

const SearchItems = () => {
  const { searchItemsState } = useSelector(({ PortalSlice }) => PortalSlice);

  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      {searchItemsState && (
        <motion.div
          className="absolute top-0 w-full py-8 sm:py-14 px-8 sm:px-20 bg-white"
          initial={{ opacity: 0, translateY: "-100%" }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{
            opacity: 0,
            translateY: "-100%",
            transition: { duration: 0.2 },
          }}
          transition={{ duration: 0.4 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="absolute right-8 top-6 text-lg"
            onClick={() => dispatch(toggleSearchItems())}
          >
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
          </div>
          <h1 className="text-center font-semibold text-lg sm:text-xl mb-4 sm:mb-10">
            what are you looking for ?
          </h1>
          <div className="relative">
            <input
              type="search"
              placeholder="search your groceries items..."
              className="border rounded-md px-4 py-2 w-full placeholder:text-gray-600 placeholder:font-semibold placeholder:text-sm sm:placeholder:text-base outline-none"
              onChange={({ target }) => setSearchValue(target.value)}
              name="search"
              id="search"
            />
            {!searchValue && (
              <FontAwesomeIcon
                icon="fa-solid fa-magnifying-glass"
                className="absolute right-4 top-1/2 -translate-y-1/2"
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchItems;
