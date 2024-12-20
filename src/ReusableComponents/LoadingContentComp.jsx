import { useSelector } from "react-redux";

const LoadingContentComp = ({ children, width, height }) => {
  const { loadingProductsState } = useSelector(
    ({ ProductsSlice }) => ProductsSlice
  );

  return !loadingProductsState.value ? (
    children
  ) : (
    <div
      className={`relative bg-black/15 rounded-md animate-pulse h-[${
        height || "auto"
      }] w-[${width || "100%"}] `}
      style={{ height, width }}
    ></div>
  );
};

export default LoadingContentComp;
