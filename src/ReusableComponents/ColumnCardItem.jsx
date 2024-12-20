import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleProductInfo } from "../Store/Slices/PortalSlice";
import { getProductInfo } from "../Store/Slices/ProductsSlice";
import LoadingContentComp from "./LoadingContentComp";

export const ItemWeight = ({ getValue }) => {
  const weights = [1, 2, 3, 5];

  return (
    <form className="w-[max-content]">
      <select
        onChange={({ target }) => getValue && getValue(target.value)}
        id="weight"
        className="bg-gray-50 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-semibold"
      >
        {weights.map((w) => (
          <option value={w} key={w}>
            {w} kg
          </option>
        ))}
      </select>
    </form>
  );
};

export const ItemCounter = () => {
  let [count, setCount] = useState(1);

  return (
    <div className="flex-grow relative flex items-center border border-gray-300 rounded-md hover:border-secondOrangeColor">
      <button
        className="w-[40%] h-full rounded-md"
        onClick={() => count > 1 && setCount((count -= 1))}
      >
        -
      </button>
      <span className="w-[30%] text-center">{count}</span>
      <button
        className="w-[40%] h-full rounded-md"
        onClick={() => setCount((count += 1))}
      >
        +
      </button>
    </div>
  );
};

const ItemOptions = ({ hoverState, productDetails }) => {
  const [loadingInfo, setLoadingInfo] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loadingInfo) {
      let timer;
      timer = setTimeout(() => {
        setLoadingInfo(false);
        dispatch(toggleProductInfo(true));
        dispatch(getProductInfo(productDetails));
      }, 1100);
      return () => clearTimeout(timer);
    }
  }, [loadingInfo]);

  return (
    <div
      className={`absolute flex flex-col z-10 overflow-hidden rounded-md transition-all duration-300 ${
        loadingInfo || hoverState ? "opacity-100 right-5" : "opacity-0 right-0"
      }`}
    >
      <button className="bg-white px-2 py-1 border bg-inherit hover:bg-secondOrangeColor hover:text-white transition-colors duration-200">
        <FontAwesomeIcon icon="fa-regular fa-heart" size="sm" />
      </button>
      <button
        className="bg-white px-2 py-1 border bg-inherit hover:bg-secondOrangeColor hover:text-white transition-colors duration-200"
        onClick={() => setLoadingInfo(true)}
      >
        {!loadingInfo ? (
          <FontAwesomeIcon icon="fa-regular fa-eye" size="sm" />
        ) : (
          <FontAwesomeIcon
            icon="fa-solid fa-circle-notch"
            className="animate-spin"
          />
        )}
      </button>
    </div>
  );
};

const ColumnCardItem = (props) => {
  const [onHoverState, setOnHoverState] = useState(false);
  const [loadImg, setLoadImg] = useState(false);
  const { discount, images, name, price, rating } = props;

  const { loadingProductsState } = useSelector(
    ({ ProductsSlice }) => ProductsSlice
  );

  return (
    <div
      className="relative border border-black/20 p-3 rounded-md flex flex-col gap-3"
      onMouseEnter={() => setOnHoverState(true)}
      onMouseLeave={() => setOnHoverState(false)}
    >
      {!loadingProductsState.value && discount !== 0 && (
        <div className="absolute bg-redColor px-2 py-1 text-white z-10 text-[12px] font-semibold rounded-md">
          {discount}%
        </div>
      )}
      {loadImg && (
        <ItemOptions hoverState={onHoverState} productDetails={props} />
      )}
      <div className="relative [&>img]:absolute [&>img]:transition-opacity [&>img]:duration-500">
        <img
          src={images[0]}
          loading="lazy"
          className={`!relative ${
            loadImg && onHoverState ? "opacity-0" : "opacity-1"
          } object-cover`}
          onLoad={() => setLoadImg(true)}
        />
        <img
          src={images[1]}
          loading="lazy"
          className={`absolute left-0 top-0 ${
            loadImg && onHoverState ? "opacity-1" : "opacity-0"
          } object-cover`}
        />
      </div>
      <LoadingContentComp width="80%" height="24px">
        <h3 className="font-semibold text-blackColor hover:text-secondOrangeColor cursor-pointer text-nowrap overflow-hidden text-ellipsis">
          {name}
        </h3>
      </LoadingContentComp>
      <div className="flex gap-3">
        <ItemWeight />
        <ItemCounter />
      </div>
      <div className="flex justify-between items-center">
        <LoadingContentComp height="24px" width="60%">
          <div className="flex gap-1 items-center flex-wrap">
            <p className="text-secondOrangeColor font-bold">
              ${price?.after.toFixed(2)}
            </p>
            {price?.before ? (
              <p className="line-through text-xs">
                ${price?.before.toFixed(2)}
              </p>
            ) : (
              ""
            )}
          </div>
        </LoadingContentComp>
        <LoadingContentComp height="24px" width="20%">
          <div className="text-greenColor font-semibold rounded-md text-sm bg-greenColor/30 py-0 px-2 flex h-[max-content] items-center">
            <FontAwesomeIcon
              icon="fa-solid fa-star"
              size="sm"
              className="mr-1"
            />
            <span>{rating.toFixed(1)}</span>
          </div>
        </LoadingContentComp>
      </div>

      <button className="bg-grayColor text-blackColor rounded-md py-2 px-5 font-semibold hover:bg-secondOrangeColor hover:text-white transition-colors duration-300 uppercase text-sm">
        add to cart{" "}
        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" size="sm" />
      </button>
    </div>
  );
};

export default memo(ColumnCardItem);
