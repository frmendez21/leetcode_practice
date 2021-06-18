// Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

// A subarray is a contiguous subsequence of the array.

// Return the sum of all odd-length subarrays of arr.

const sumOddLengthSubarrays = arr => {
   let sum = 0; 
   for(let i = 0; i < arr.length; i++) {
       for(let j = i; j < arr.length; j ++) {
           const sub = arr.slice(i, j + 1);
           if(sub.length % 2 === 1) sum += sub.reduce((acc, el) => acc + el, 0)
       } 
   }
   return sum;
};

let arr = [1,4,2,5,3]; // 58
console.log(sumOddLengthSubarrays(arr))

