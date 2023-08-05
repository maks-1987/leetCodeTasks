/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  // let k = nums.length;
  // let count = 0;

  // for (let i = 0, j = 0; i < nums.length; i++) {
  //   if (nums[j] !== nums[i]) {
  //     j = i;
  //     count = 0;
  //   }

  //   if (nums[j] === nums[i]) count++;

  //   if (count > 2) {
  //     nums[i] = "_";
  //     k--;
  //   }
  // }
  // nums.sort((a, b) => a - b);
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (k < 2 || nums[i] > nums[k - 2]) {
      nums[k] = nums[i];
      k++;
    }
  }
  console.log(nums);
  return k;
};

// function sortArray(x, y)

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
console.log(removeDuplicates([-3, -1, 0, 0, 0, 3, 3]));
