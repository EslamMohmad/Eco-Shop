import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { globalIcons } from "./../Icons/GlobalICons";
import { createPortal } from "react-dom";
import Portal from "../components/Portals/Portal";

const WrapperComponent = () => {
  return (
    <div className="text-textGrayColor">
      <Navbar />
      <Outlet />
      {createPortal(<Portal />, document.getElementById("portal"))}
    </div>
  );
};

export default WrapperComponent;
globalIcons();
