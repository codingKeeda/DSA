// Contains Duplicate
// Easy

// 3704

// 923

// Add to List

// Share
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true


function containsDuplicate(nums) {
  const hashMap = new Map();
  for (const element of nums) {
    if (hashMap.has(element)) {
      return true;
    }
    hashMap.set(element, true);
  };
  return false;
};


console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));