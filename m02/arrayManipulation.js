// sort practice
const numbers = [1, 7, 34, 3, 2, 4, 6];

const sortedNumber = numbers.sort((a, b) => a - b);
console.log(typeof sortedNumber);
console.log(numbers);

const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil(start - stop / step) },
    (_, i) => start + i * step,
  );
console.log(range(0, 20, 1));
