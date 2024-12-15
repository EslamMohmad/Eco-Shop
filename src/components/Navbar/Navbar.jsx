import useMediaQuery from "../../hooks/useMediaQuery";
import { screenClass } from "../../Utils/constants";
import FootNav from "./Components/FootNav";
import HeadNav from "./Components/HeadNav";
import MidNav from "./Components/MidNav";

const Navbar = () => {
  const DesktopView = useMediaQuery("(min-width : 1200px)");

  return (
    <nav className={screenClass}>
      <HeadNav />
      <MidNav />
      {DesktopView && <FootNav />}
    </nav>
  );
};

export default Navbar;
