const course1 = { name: "Math" }
const course2 = { name: "Physics" }

const lessonMap = new Map()
lessonMap.set(course1, { lessonId: "L1", duration: 60 })
lessonMap.set(course2, { lessonId: "L2", duration: 45 })



const a = { x: 1 }
const b = { y: 2 }

const obj = {}

obj[a] = "first" //[object Object]
obj[b] = "second" //[object Object]
console.log(obj["[object Object]"])



