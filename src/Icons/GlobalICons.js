import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faUser, faEye } from "@fortawesome/free-regular-svg-icons";

import {
  faPhoneVolume,
  faMagnifyingGlass,
  faCartShopping,
  faBars,
  faChevronDown,
  faTag,
  faBookmark,
  faXmark,
  faBagShopping,
  faPlus,
  faMinus,
  faChevronLeft,
  faChevronRight,
  faStar,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export const globalIcons = () =>
  library.add(
    faPhoneVolume,
    faMagnifyingGlass,
    faUser,
    faHeart,
    faCartShopping,
    faBars,
    faChevronDown,
    faTag,
    faBookmark,
    faXmark,
    faBagShopping,
    faPlus,
    faMinus,
    faChevronLeft,
    faChevronRight,
    faStar,
    faHeart,
    faEye,
    faArrowRight
  );
