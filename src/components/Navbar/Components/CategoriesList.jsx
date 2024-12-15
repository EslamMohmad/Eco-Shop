import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { categoriesList } from "../../../Utils/constants.jsx";

const CategoriesList = () => {
  const [listState, setListState] = useState(false);

  return (
    <>
      <div
        className="flex items-center gap-4 cursor-pointer bg-secondOrangeColor hover:bg-secondOrangeColor/60 transition-colors duration-300 w-[350px]"
        onClick={() => setListState(!listState)}
      >
        <FontAwesomeIcon icon="fa-solid fa-bars" />
        <h1 className="font-semibold">shop by categories</h1>
        <FontAwesomeIcon icon="fa-solid fa-chevron-down" className="ml-auto" />
      </div>
      <ul
        className={`absolute z-10 shadow-lg top-[57px] w-[350px] bg-white transition-all overflow-hidden duration-700 ${
          listState ? "h-[445px]" : "h-[0px]"
        }`}
      >
        {categoriesList.map(({ img, text }) => (
          <li
            key={text}
            className="py-3 px-6 flex text-black items-center last:border-b-0 border-b hover:text-orangeColor cursor-pointer transition-colors"
          >
            <img src={img} className="w-[30px] mr-5" />
            <p className="font-medium ">{text}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CategoriesList;
