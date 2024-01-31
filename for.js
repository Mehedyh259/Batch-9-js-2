// for (let i = 1; i <= 10; i += 1) {
//   console.log("mehedy", i);
// }

// for (let i = 0; i <= 100; i += 2) {
//   console.log("Sorry babu.....! ", i);
// }

// const nums = [23, 43, 2, 5, 346, 203, 2];

// let sumOfOdd = 0; // 23 43 5 203
// let sumOfEven = 0; // 2 346 2

// for (let i = 0; i < nums.length; i++) {
//   const x = nums[i]; // array[indexNumber]

//   if (x % 2 === 1) {
//     sumOfOdd += x; // sumOfOdd = sumOfOdd + x
//   } else {
//     sumOfEven += x;
//   }
// }

// console.log(sumOfEven);
// console.log(sumOfOdd);

const nums = [23, 43, 2, 5, 346, 203, 2];

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

for (let item of nums) {
  console.log(item);
}
