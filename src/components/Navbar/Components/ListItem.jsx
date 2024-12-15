import { Link } from "react-router-dom";

const ListItem = ({ route, text }) => {
  return (
    <li className="[&>a]:pr-10 [&>a]:last:pr-0 hover:text-orangeColor transition-colors font-semibold">
      <Link to={route}>{text}</Link>
    </li>
  );
};

export default ListItem;
