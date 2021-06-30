// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.
// input: unsorted array of ints 
// sort the array of ints
// split array by negatives and positives
// output: triplets that add to 0
// const threeSum = nums => {
//     let res = [];
//     let set = new Set();
//     let sorted = nums.sort((a, b) => a - b);
//     for(let i = 0; i < sorted.length; i++) {
//         if(sorted[i] > 0) break;
//             let triplet = findTriplet(i, sorted);
//             if(triplet) {
//                 let key = triplet.join('');
//                 if(!set.has(key)) {
//                     res.push(triplet)
//                 }
//                 set.add(key)
//             }
//     }
//     return res;
// };
// const findTriplet = (currIdx, arr) => {
//     let lo = currIdx + 1;
//     let hi = arr.length - 1;
//     while(lo < hi) {
//         let sum = arr[currIdx] + arr[lo] + arr[hi];
//         if(sum < 0 ) {
//             lo++
//         } else if(sum > 0){
//             hi--;
//         } else {
//             return [arr[currIdx], arr[lo], arr[hi]];
//         }
//     }
// };

const threeSum = nums => {
    let sorted = nums.sort((a, b) => a - b);
    let res = {};
    let i = 0; 
    while (i < sorted.length) {
        let lo = i + 1;
        let hi = sorted.length - 1;
        while (lo < hi) {
            let sum = sorted[i] + sorted[lo] + sorted[hi];
            if(sum < 0) {
                lo ++;
            } else if (sum > 0) {
                hi --;
            } else {
                let arr = [sorted[i], sorted[lo++], sorted[hi--]]
                res[arr.join('')] = arr;
                while(lo < hi && sorted[lo] === sorted[lo - 1]) {
                    lo++;
                }
            }
        }
        i++;
    }
    return Object.values(res);
};
console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([]))
console.log(threeSum([0]))
console.log(threeSum([0,0,0,0]))
console.log(threeSum([-2,0,1,1,2]))

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
//[ -4, -1, -1, 0, 1, 2 ]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []
 

// Constraints:

// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105