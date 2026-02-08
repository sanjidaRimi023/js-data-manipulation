console.time("time")
const results = [
  {
    subject: "Mathematics",
    mark: 105,
  },
  {
    subject: "Physics",
    mark: 222,
  },
  {
    subject: "Chemistry",
    mark: 92,
  },
  {
    subject: "Biology",
    mark: 74,
  },
  {
    subject: "English",
    mark: 88,
  },
  {
    subject: "Computer Science",
    mark: 95,
  },
];
const topper = results.reduce((topMark, result) => {
  return topMark.mark > result.mark ? topMark : result
}, results[0]);
console.log(topper);

console.timeEnd("time")
