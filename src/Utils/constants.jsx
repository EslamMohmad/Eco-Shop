import category_1 from "../assets/categories/category (1).png";
import category_2 from "../assets/categories/category (2).png";
import category_3 from "../assets/categories/category (3).png";
import category_4 from "../assets/categories/category (4).png";
import category_5 from "../assets/categories/category (5).png";
import category_6 from "../assets/categories/category (6).png";
import category_7 from "../assets/categories/category (7).png";
import category_8 from "../assets/categories/category (8).png";

import slider_1 from "../assets/main-banners/main-banner (1).jpg";
import slider_2 from "../assets/main-banners/main-banner (2).jpg";
import slider_3 from "../assets/main-banners/main-banner (3).jpg";

import icon_1 from "../assets/heading-icons/heading-icon (1).png";
import icon_2 from "../assets/heading-icons/heading-icon (2).png";
import icon_3 from "../assets/heading-icons/heading-icon (3).png";
import icon_4 from "../assets/heading-icons/heading-icon (4).png";
import icon_5 from "../assets/heading-icons/heading-icon (5).png";

import { OptionsControlls, SliderControlls } from "./../pages/Home";
import FeaturedCategories from "../components/Home/FeaturedCategories";
import TopSellingProducts from "./../components/Home/TopSellingProducts";
import CategoriesOfferDeals from "../components/Home/CategoriesOfferDeals";
import DairyBreadEggs from "../components/Home/DairyBreadEggs";

import deal_1 from "../assets/deal-pics/deal-pic (1).jpg";
import deal_2 from "../assets/deal-pics/deal-pic (2).jpg";
import deal_3 from "../assets/deal-pics/deal-pic (3).jpg";
import deal_4 from "../assets/deal-pics/deal-pic (4).jpg";
import deal_5 from "../assets/deal-pics/deal-pic (5).jpg";
import deal_6 from "../assets/deal-pics/deal-pic (6).jpg";

import discountBanner_1 from "../assets/discount-banners/discount-banner (1).jpg";
import discountBanner_2 from "../assets/discount-banners/discount-banner (2).jpg";
import discountBanner_3 from "../assets/discount-banners/discount-banner (3).jpg";

export const screenClass = "max-w-screen-2xl m-auto px-[20px] lg:px-[30px]";

export const headNavlinks = {
  contect: "contect",
  blog: "blog",
  "order tracking": "",
};

export const midNavIconsLinks_Desktop = [
  { icon: "fa-regular fa-user", route: "account", count: false },
  { icon: "fa-regular fa-heart", route: "wishlist", count: true },
  { icon: "fa-solid fa-cart-shopping", route: "cart", count: true },
];

export const midNavIconsLinks = [
  { icon: "fa-solid fa-magnifying-glass", route: "search", count: false },
  ...midNavIconsLinks_Desktop,
];

export const categoriesList = [
  { img: category_1, text: "milk anddairy products" },
  { img: category_2, text: "vegitable and fruits" },
  { img: category_3, text: "breakfast and cereals" },
  { img: category_4, text: "animal biscuits and products" },
  { img: category_5, text: "bread, toast and biscuits" },
  { img: category_6, text: "chicken, meat and fish" },
  { img: category_7, text: "vitamins and minerals" },
  { img: category_8, text: "ice cream and cold drink" },
];

export const footNavRoutesList = ["home", "products", "blogs", "about us"];

export const mainMenuList = {
  home: false,
  products: [
    "Milk anddairy products",
    "Vegitable and fruits",
    "Breakfast andcereals",
    "Animal biscuits and products",
    "Bread, toast and biscuits",
    "Chicken, meat and Fish",
    "Vitamins and minerals",
    "Ice cream and cold drink",
  ],
  blogs: false,
  "about us": false,
};

export const mainSliderImages = [
  {
    img: slider_1,
    heading_one: "100% organic products",
    heading_two: "organic seeds",
  },
  {
    img: slider_2,
    heading_one: "little nuts is helpfull",
    heading_two: "premuim nuts",
  },
  {
    img: slider_3,
    heading_one: "that gives it all it's flavor",
    heading_two: "indian spices",
  },
];

export const categoriesOfferSlides = [
  {
    img: deal_1,
    offer: 24,
    heading: "dals and pulses",
    text: "get over 20$ saving",
  },
  {
    img: deal_2,
    offer: 20,
    heading: "healthy drinks",
    text: "now plus gift set with deal",
  },
  {
    img: deal_3,
    offer: 18,
    heading: "dry fruits",
    text: "get over 15$ saving",
  },
  {
    img: deal_4,
    offer: 27,
    heading: "fresh fruits",
    text: "best price ever place order",
  },
  {
    img: deal_5,
    offer: 31,
    heading: "herbs and spices",
    text: "get over 25$ saving",
  },
  {
    img: deal_6,
    offer: 29,
    heading: "healthy drinks",
    text: "get over 15$ saving",
  },
];

export const dicountBanners = [
  { offer: 23, text: "fruits and vegetables", img: discountBanner_1 },
  { offer: 27, text: "seafood calamari", img: discountBanner_2 },
  { offer: 24, text: "freshy baked bread toast", img: discountBanner_3 },
];

export const tempPartHomeDetails = [
  {
    headingClass: "",
    heading: "featured categories",
    imgSrc: icon_1,
    paragraph: "eating healthy starts at the grocery store.",
    controlls: <SliderControlls uniqeClass="featured-categories" />,
    children: <FeaturedCategories uniqeClass="featured-categories" />,
    className: screenClass,
  },
  {
    headingClass: "",
    heading: "top selling products",
    imgSrc: icon_2,
    paragraph: "fresh and fabulous from farm to table!",
    controlls: <OptionsControlls />,
    children: <TopSellingProducts />,
    className: screenClass,
  },
  {
    headingClass: screenClass,
    heading: "categories offer deals",
    imgSrc: icon_3,
    paragraph: "stocking up on goodness, one aisle at a time.",
    controlls: <SliderControlls uniqeClass="categories-offer" />,
    children: <CategoriesOfferDeals uniqeClass="categories-offer" />,
    className: "bg-black/10 pt-10 pb-14 ",
  },
  {
    headingClass: "order-2",
    heading: "dairy, bread and eggs",
    imgSrc: icon_4,
    paragraph: "quality ingredients for a quality life.",
    controlls: <SliderControlls />,
    children: <DairyBreadEggs />,
    className: `${screenClass} flex flex-col`,
  },
  {
    headingClass: "",
    heading: "what our customers say",
    imgSrc: icon_5,
    paragraph: "people say a lot. So, I watch what thay do.",
    controlls: <SliderControlls />,
    children: <></>,
    className: screenClass,
  },
];
