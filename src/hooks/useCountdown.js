import { useEffect, useState } from "react";

const useCountdown = (date) => {
  const [timer, setTimer] = useState(date);
  const speed = 1000;

  useEffect(() => {
    let timeFunc;
    timeFunc = setTimeout(() => {
      if (timer.sec > 0) {
        setTimer((prev) => ({ ...prev, sec: [prev.sec--] }));
      } else if (timer.min > 0) {
        setTimer((prev) => ({ ...prev, min: [prev.min--], sec: 60 }));
      } else if (timer.mrs > 0) {
        setTimer((prev) => ({ ...prev, hrs: [prev.hrs--], min: 60, sec: 60 }));
      } else if (timer.day > 0) {
        setTimer((prev) => ({
          ...prev,
          day: [prev.day--],
          hrs: 24,
          min: 60,
          sec: 60,
        }));
      } else setTimer(date);
    }, speed);
    return () => clearTimeout(timeFunc);
  }, [timer.sec]);

  return timer;
};

export default useCountdown;
