// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

function maxSubArray(nums) {
  let maxSubArray = nums[0];
  let currentMaxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    const nextElement = nums[i + 1];
    if (nextElement === undefined) {
      return maxSubArray;
    }
    if (currentMaxSum + nextElement <= nextElement) {
      currentMaxSum = nextElement;
    } else {
      currentMaxSum += nextElement;
    }
    maxSubArray = currentMaxSum > maxSubArray ? currentMaxSum : maxSubArray;
  };
  return maxSubArray;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));