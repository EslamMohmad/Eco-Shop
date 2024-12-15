import { memo, useEffect, useState } from "react";

const SearchInput = ({ focusState }) => {
  const [currentText, setCurrentText] = useState({
    letter: "",
    index: 0,
    placeholderIndex: 0,
  });
  useEffect(() => {
    const textArray = [
      "search your groceries items...",
      "don't forget offers...",
    ];
    const speed = 100;
    const delay = 2000;
    let currLetter;
    let nextPlaceholder;

    function placeholder(letter, index, placeholderIndex) {
      return (nextPlaceholder = setTimeout(
        () =>
          setCurrentText({
            letter,
            index,
            placeholderIndex,
          }),
        delay
      ));
    }

    if (focusState) return;

    if (currentText.index < textArray[currentText.placeholderIndex].length) {
      currLetter = setInterval(() => {
        setCurrentText({
          letter: (currentText.letter +=
            textArray[currentText.placeholderIndex][currentText.index]),
          index: (currentText.index += 1),
          placeholderIndex: currentText.placeholderIndex,
        });
      }, speed);
    } else if (currentText.placeholderIndex < textArray.length - 1) {
      placeholder("", 0, (currentText.placeholderIndex += 1));
    } else placeholder("", 0, 0);

    return () => (clearInterval(currLetter), clearTimeout(nextPlaceholder));
  }, [currentText.index, currentText.placeholderIndex, focusState]);

  return (
    <input
      type="text"
      placeholder={currentText.letter}
      className="outline-none ml-3 h-full w-[350px]"
      // onChange={() => setCurrentText("")}
      name="desktop search"
      id="desktop search"
    />
  );
};

export default memo(SearchInput);
