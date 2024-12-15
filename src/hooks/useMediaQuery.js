import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
  const [state, setState] = useState(false);
  const media = window.matchMedia(query);

  useEffect(() => {
    const stateChange = () => setState(() => media.matches);

    stateChange();

    media.addEventListener("change", stateChange);

    return () => media.removeEventListener("change", stateChange);
  }, [state, media.matches]);

  return state;
};

export default useMediaQuery;
