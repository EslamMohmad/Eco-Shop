import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { footNavRoutesList } from "../../../Utils/constants.jsx";
import CategoriesList from "./CategoriesList";

const FootNav = () => {
  return (
    <section className="flex [&>div]:py-4 [&>div]:px-6 bg-orangeColor text-white relative">
      <CategoriesList />
      <ul className="[&>li]:inline-block">
        {footNavRoutesList.map((list) => (
          <li key={list} className="py-4 px-6 cursor-pointer group font-medium">
            {list}
            <div className="group-hover:w-full w-0 m-auto  transition-all duration-300 bg-white h-[1px]"></div>
          </li>
        ))}
      </ul>
      <div className="!py-0 flex gap-2 [&>button]:uppercase ml-auto text-black text-sm font-medium !pl-0 !pr-2">
        <button className="px-3 py-2 rounded-md bg-yellowColor self-center">
          <FontAwesomeIcon icon="fa-solid fa-bookmark" className="mr-3" />
          deals today
        </button>
        <button className="px-3 py-2 rounded-md bg-white self-center">
          <FontAwesomeIcon icon="fa-solid fa-tag" className="mr-3" />
          special prices
        </button>
      </div>
    </section>
  );
};

export default FootNav;
