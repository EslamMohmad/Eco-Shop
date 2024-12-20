import { screenClass } from "../../../Utils/constants";
import { useSelector } from "react-redux";
import { shuffleArray } from "../../../Utils/functions";
import SaleTheMonth from "./SaleTheMonth";
import RowProductsSlider from "./RowProductsSlider";

const ProductsBannersGrid = () => {
  const { products } = useSelector(({ ProductsSlice }) => ProductsSlice);
  const limitedProducts = Object.values(products).flat().slice(0, 27);

  return (
    <div className="py-14">
      <div className={`${screenClass}`}>
        <SaleTheMonth />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-7">
          <RowProductsSlider
            products={shuffleArray(limitedProducts).slice(0, 9)}
            heading="top selling"
            delay="2000"
          />
          <RowProductsSlider
            products={shuffleArray(limitedProducts).slice(9, 18)}
            heading="trending products"
            delay="2500"
          />
          <RowProductsSlider
            products={shuffleArray(limitedProducts).slice(18, 27)}
            heading="recently added"
            delay="3000"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsBannersGrid;
