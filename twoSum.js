// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function twoSum(nums, target) {
  const compliments = {};
  let answer = null;
  nums.forEach((element, index) => {
    if (compliments[element] >= 0) {
      answer = [index, compliments[element]];
    }
    compliments[target-element] = index;
  });
  console.log(answer);
};

twoSum([2,7,11,15], 9)
