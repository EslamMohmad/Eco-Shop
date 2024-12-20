import { useState } from "react";
import LoadingContentComp from "./LoadingContentComp";
import Star from "./Rating";
import Rating from "./Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RowCardItem = ({ discount, images = [], name, price, rating }) => {
  const [onHoverState, setOnHoverState] = useState(false);
  const [loadImg, setLoadImg] = useState(false);

  return (
    <div className="flex gap-3 border-t py-5">
      <div
        className="relative [&>img]:absolute [&>img]:transition-opacity [&>img]:duration-500 w-1/3 lg:[&>img]:max-h-[120px]"
        onMouseEnter={() => setOnHoverState(true)}
        onMouseLeave={() => setOnHoverState(false)}
      >
        <img
          loading="lazy"
          src={images[0]}
          className={`!relative ${
            loadImg && onHoverState ? "opacity-0" : "opacity-1"
          } object-cover w-full h-full`}
          onLoad={() => setLoadImg(true)}
        />

        <img
          loading="lazy"
          src={images[1]}
          className={`absolute left-0 top-0 ${
            loadImg && onHoverState ? "opacity-1" : "opacity-0"
          } object-cover w-full h-full`}
        />
      </div>
      <div className="flex flex-col gap-1 flex-grow">
        <LoadingContentComp width="80%" height="24px">
          <h3 className="font-semibold text-blackColor hover:text-secondOrangeColor cursor-pointer text-nowrap overflow-hidden text-ellipsis w-[70%]">
            {name}
          </h3>
        </LoadingContentComp>
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
        <LoadingContentComp width="70%" height="24px">
          <Rating rating={rating} />
        </LoadingContentComp>
        <button className="bg-grayColor text-blackColor rounded-md py-2 px-5 font-semibold hover:bg-secondOrangeColor hover:text-white transition-colors duration-300 uppercase text-sm w-[max-content] mt-auto">
          add to cart
          <FontAwesomeIcon
            icon="fa-solid fa-cart-shopping"
            size="sm"
            className="ml-2"
          />
        </button>
      </div>
    </div>
  );
};

export default RowCardItem;
