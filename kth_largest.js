// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.
class MaxHeap {
    constructor() {
        this.array = [null];
    };

    insert(val) {
        let last = this.array[this.array.length - 1];
        this.array.push(val);
        if(val > last) {
            this.siftUp(this.array.length - 1);
        };
    };

    siftUp(idx) {
        if(idx === 1) return;
        let parentIdx = Math.floor(idx / 2);
        if(this.array[idx] > this.array[parentIdx]) {
            [this.array[idx], this.array[parentIdx]] = [this.array[parentIdx], this.array[idx]];
            this.siftUp(parentIdx);
        };
    };

    siftDown(idx) {
        if(idx === this.array.length - 1) return;
        let leftIdx = idx * 2;
        let rightIdx = idx * 2 + 1;

        let left = this.array[leftIdx];
        let right = this.array[rightIdx];

        if(this.array[idx] < left || this.array[idx] < right) {
            if(!left) left = -Infinity;
            if(!right) right = -Infinity;

            const max = left > right ? leftIdx : rightIdx;

            [this.array[idx], this.array[max]] = [this.array[max], this.array[idx]];
            this.siftDown(max);
        };
    };

    deleteMax() {
        const root = this.array[1];
        [this.array[1], this.array[this.array.length - 1]] = [this.array[this.array.length - 1], this.array[1]];
        this.array.pop();
        this.siftDown(1);
        return root;
    }

};
 const findKthLargest = (nums, k) => {
    const maxHeap = new MaxHeap();
    nums.forEach(num => maxHeap.insert(num));
    for(let i = 1; i < k; i++) {
        maxHeap.deleteMax()
    }
    return maxHeap.deleteMax();
 };

 console.log(findKthLargest([3,2,1,5,6,4], 2))

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4
 

// Constraints:

// 1 <= k <= nums.length <= 104
// -104 <= nums[i] <= 104