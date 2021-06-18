// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 const merge = intervals => {
    if(intervals.length <= 1) return intervals;
     const res = [];
    let sorted = intervals.sort((a, b) => a[0] - b[0]);
    for(let i = 0; i < sorted.length - 1; i++ ) {
        let [x1, y1] = sorted[i];
        let [x2, y2] = sorted[i + 1];
        if(((x1 >= y2 && x1 <= y2) || (y1 >= x2 && y1 <= y2)) || ((x2 >= x1 && x2 <= y1) || (y2 >= x1 && y2 <= y1)) ) {
            let arr = [x1, y1, x2, y2];
            let merged = [Math.min(...arr), Math.max(...arr)]
            sorted.splice(i, 2, merged)
            i --;
        } 
    }
    return sorted;
 };
 console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
 console.log(merge([[1,4],[4,5]]))
 console.log(merge([[1,4],[2,3]]))
 console.log(merge([[1,4],[0,0]]))
 console.log(merge([[1,4],[0,2],[3,5]])) 
// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
