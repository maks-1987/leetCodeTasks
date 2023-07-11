/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  let result = [];
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      result.push(i, map.get(target - nums[i]));
    }

    map.set(nums[i], i);
  }

  return result;
};

console.log(twoSum([3, 2, 4], 6));
