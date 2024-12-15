export const waiting = (time) =>
  new Promise((resolve) => setTimeout(resolve, time));
