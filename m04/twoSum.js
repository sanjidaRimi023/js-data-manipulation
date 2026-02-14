// two sum , target

const twoSum = (arr, target) => {
  const numMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    const complement = target - currentNumber;
    console.log(`complement`, complement);
    console.log(`current number`, currentNumber);

    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(currentNumber, i);
    console.log("number map", numMap);
  }
  return undefined;
};
console.log(twoSum([5, 2, 7, 5, 4], 10));
