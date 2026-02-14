const dataCache = new Map();

const specialTask = (id) => {
  console.log(`Run the special task for : ${id}`);
  return { id: id, data: `some data from ${id}` };
};

const getData = (id) => {
  if (dataCache.has(id)) {
    console.log("cache hit for id : " ,id)
    return dataCache.get(id);
  }
  console.log("cache miss for id", id)
  const data = specialTask(id);
  dataCache.set(id, data);
  return data;
};
console.log(dataCache);
console.log("1. get the data from",getData(123));
console.log("2. get the data from",getData(22));
console.log(dataCache);
