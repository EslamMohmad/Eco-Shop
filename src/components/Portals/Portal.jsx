import { useEffect } from "react";
import JoinNewsLetters from "./Components/JoinNewsLetters";
import { useSelector, useDispatch } from "react-redux";
import { openPopupWindow, closeOverlay } from "../../Store/Slices/PortalSlice";
import { waiting } from "../../Utils/functions";
import { AnimatePresence, motion } from "framer-motion";
import CartMenu from "./Components/CartMenu";
import SearchItems from "./Components/SearchItems";
import MainMenu from "./Components/MainMenu";
import ProductInfo from "./Components/ProductInfo";

const Portal = () => {
  const { overlayState } = useSelector(({ PortalSlice }) => PortalSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    const windowLoaded = async () => {
      await waiting(1500);
      dispatch(openPopupWindow());
    };

    window.addEventListener("DOMContentLoaded", windowLoaded());

    return () => window.removeEventListener("DOMContentLoaded", windowLoaded);
  }, []);

  useEffect(() => {
    overlayState
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [overlayState]);

  return (
    <AnimatePresence>
      {overlayState && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black/40 flex justify-center items-center z-10 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.3 } }}
          onClick={() => dispatch(closeOverlay())}
        >
          <JoinNewsLetters />
          <CartMenu />
          <SearchItems />
          <MainMenu />
          <ProductInfo />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Portal;
