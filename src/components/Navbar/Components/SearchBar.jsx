import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import SearchInput from "./searchInput";

const SearchBar = () => {
  const [focusState, setFocusState] = useState(false);

  return (
    <form
      className="border border-gray-300 py-3 px-5 flex items-center rounded-md"
      onSubmit={(e) => e.preventDefault()}
      onFocus={() => setFocusState(true)}
      onBlur={() => setFocusState(false)}
    >
      <div className="h-full">
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        <SearchInput focusState={focusState} />
      </div>
      <button
        type="submit"
        className="uppercase text-sm font-medium text-white bg-orangeColor px-5 py-2 rounded-md hover:bg-yellowColor hover:text-blackColor transition-colors duration-500 tracking-wide"
      >
        search
      </button>
    </form>
  );
};

export default SearchBar;
