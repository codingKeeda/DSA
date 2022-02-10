// Move Zeroes
// Easy

// 8082

// 220

// Add to List

// Share
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

function moveZeroes(nums) {
  let [i, j] = [0, 1]
  while (nums[j] !== undefined) {
    if(nums[i] === 0) {
      if (nums[j] !== 0) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j++;
      } else {
        j++;
      }
    } else {
      i++;
      j++;
    }
  }
  console.log(nums);
};

moveZeroes([0,0,0,3,12]);