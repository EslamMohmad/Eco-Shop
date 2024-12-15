import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../../../assets/popup-pic.jpg";
import { useDispatch, useSelector } from "react-redux";
import { closePopupWindow } from "../../../Store/Slices/PortalSlice";
import { AnimatePresence, motion } from "framer-motion";

const SlideUpElement = ({ tag = "div", children, delay, ...props }) => {
  let Component = motion[tag];

  return (
    <Component
      {...props}
      initial={{ translateY: 20, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      {children}
    </Component>
  );
};

const JoinNewsLetters = () => {
  const { popupMessageState } = useSelector(({ PortalSlice }) => PortalSlice);

  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      {popupMessageState && (
        <motion.div
          className="relative max-w-[550px] w-[90%] xs:w-auto mx-[20px]"
          initial={{ translateY: -50, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          exit={{ translateY: -50, opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            onClick={() => dispatch(closePopupWindow())}
            className="absolute right-5 top-4 cursor-pointer hover:text-orangeColor text-textGrayColor transition-colors duration-300"
          >
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
          </div>
          <article className="bg-white flex flex-col items-center gap-3 p-7 xs:p-10 text-center">
            <SlideUpElement
              delay={0.3}
              tag={"h3"}
              className="text-textGrayColor text-lg"
            >
              don't miss a thing
            </SlideUpElement>
            <SlideUpElement
              delay={0.4}
              tag={"h1"}
              className="font-medium text-lg xs:text-3xl md:w-[400px] text-blackColor"
            >
              join our newsletter and get 10% off your first order
            </SlideUpElement>
            <SlideUpElement
              delay={0.5}
              tag={"form"}
              className="w-full flex flex-col xs:flex-row gap-2 my-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="enter your email"
                className="text-textGrayColor py-2 px-3  grow-0 xs:grow outline-none border border-gray-300 rounded-md placeholder:capitalize"
                name="email"
                id="email"
                autoComplete="additional-name"
              />
              <button
                type="submit"
                className="text-white bg-orangeColor uppercase font-medium text-sm py-2 px-5 rounded-md hover:bg-yellowColor hover:text-blackColor transition-colors duration-500"
              >
                subscribe
              </button>
            </SlideUpElement>
            <SlideUpElement
              delay={0.6}
              tag={"h3"}
              className="text-textGrayColor text-lg cursor-pointer"
            >
              don't show this popup again
            </SlideUpElement>
          </article>
          <img src={img} className="w-full h-auto" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JoinNewsLetters;
