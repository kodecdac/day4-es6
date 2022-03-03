let user = { id: 1, username: "rohit", follower: 100 };
console.log(user);

// we did here cloning
let user1 = { ...user };
console.log(user1);
user1.city = "mumbai";

let user2 = { ...user, city: "delhi", id: 2 };

// After update
console.log(user);
console.log(user1);
console.log(user2);
