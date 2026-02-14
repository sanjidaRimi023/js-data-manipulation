//find common friends (metual friends)

const USER_COUNT = 50000;
let usersA = [];
let usersB = [];
const createUser = (id) => ({ id: `user_${id}`, name: `user ${id}` });

for (let i = 0; i < USER_COUNT; i++) {
  usersA.push(createUser(i));
  usersB.push(createUser(i + 25000));
}
//
const commonFriendsData = (usersA, usersB) => {
  const starttime = performance.now();
  const cmnFrd = [];
  usersA.forEach((userA) => {
    usersB.forEach((userB) => {
      if (userA.id === userB.id) {
        cmnFrd.push(userB);
      }
    });
  });
  const endtime = performance.now();
  return { totalfrd: cmnFrd.length, timetook: endtime - starttime };
};
// console.log(commonFriendsData(usersA,usersB))
const commonFriendsDatafast = (usersA, usersB) => {
  const starttime = performance.now();
  const commonFriend = [];
  const idListA = new Set(usersA.map((user) => user.id));

  usersB.forEach((userB) => {
    if (idListA.has(userB.id)) {
      commonFriend.push(userB);
    }
  });
  const endtime = performance.now();
  return { count: commonFriend.length, timetook: endtime - starttime };
};
console.log(commonFriendsDatafast(usersA, usersB));
