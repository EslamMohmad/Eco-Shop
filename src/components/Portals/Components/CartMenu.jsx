import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartMenu } from "../../../Store/Slices/PortalSlice";

const CartMenu = () => {
  const { cartMenuState } = useSelector(({ PortalSlice }) => PortalSlice);

  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      {cartMenuState && (
        <motion.div
          className="absolute h-full w-full xs:w-[450px] top-0 right-0 bg-white p-7"
          initial={{ translateX: "100%" }}
          animate={{ translateX: 0 }}
          exit={{ translateX: "100%", transition: { duration: 0.2 } }}
          transition={{ duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center pb-3 border-b">
            <h1 className="font-semibold">my shopping cart</h1>
            <div
              className="p-1 cursor-pointer"
              onClick={() => dispatch(toggleCartMenu())}
            >
              <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col text-center gap-3">
            <FontAwesomeIcon
              icon="fa-solid fa-bag-shopping"
              size="xl"
              className="text-blackColor"
            />
            <h4 className="text-xl">your cart is empty</h4>
            <button className="w-[max-content] uppercase py-2 px-6 rounded-md text-sm font-semibold text-white hover:text-black bg-orangeColor hover:bg-yellowColor transition-colors duration-300">
              continue shopping
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartMenu;
