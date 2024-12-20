export const waiting = (time) =>
  new Promise((resolve) => setTimeout(resolve, time));

export const shuffleArray = (array) => {
  let arr = [];

  do {
    let num = Math.floor(Math.random() * array.length);
    arr.push(array[num]);
    arr = arr.filter((item, index) => {
      return arr.indexOf(item) === index;
    });
  } while (arr.length < array.length);

  return arr;
};
