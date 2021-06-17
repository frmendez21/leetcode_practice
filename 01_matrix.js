
var updateMatrix = function(mat) {
    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[i].length; j++) {
            if(mat[i][j] === 1) {
                if(mat[i] !== undefined && mat[i][j - 1] === 0) {
                    mat[i][j] = 1;
                } else if(mat[i] !== undefined && mat[i][j + 1] === 0){ 
                    mat[i][j] = 1;
                } else if(mat[i - 1] !== undefined && mat[i - 1][j] === 0){
                    mat[i][j] = 1;
                } else if(mat[i + 1] !== undefined && mat[i + 1][j] === 0){ 
                    mat[i][j] = 1;
                } else {
                    mat[i][j] = findDist(mat, i, j);
                }
            }
        }
    }
    return mat;
};

var findDist = function(mat, i, j, c = 0) {

    if(i < 0 || j < 0 || i >= mat.length || j >= mat[0].length || mat[i][j] === null) return Infinity;

    if(mat[i][j] === 0) return c;

   
    let copy = mat[i][j];
    mat[i][j] = null;
    

    let left = findDist(mat, i, j - 1, c + 1);

    let right = findDist(mat, i, j + 1, c + 1);

    let down = findDist(mat, i + 1, j, c + 1);

    let up = findDist(mat, i - 1, j, c + 1);

    mat[i][j] = copy;

    let smallest =  Math.min(left, right, down, up) + 1;
    return smallest;

};
    // return smallest === Infinity ? currentMin + 1 : smallest;
    




     // let left;
    // let right;
    // let down;
    // let up;
    // let res;
// if(mat[i][j - 1] !== undefined && mat[i][j - 1] !== null) {
    //     // left = findDist(mat, i, j - 1, c + 1, currentMin);
    //     res = findDist(mat, i, j - 1, c + 1, currentMin) + 1;
    //     return res !== Infinity ? res : c;
    // }

    // if(mat[i][j + 1] !== undefined && mat[i][j + 1] !== null) {
    //     // right = findDist(mat, i, j + 1, c + 1, currentMin);
    //     res = findDist(mat, i, j + 1, c + 1, currentMin) + 1;
    //     return res !== Infinity ? res : c;
    // }

    // if(mat[i + 1] !== undefined && mat[i + 1][j] !== null) {
    //     // down = findDist(mat, i + 1, j, c + 1, currentMin);
    //     res = findDist(mat, i + 1, j, c + 1, currentMin);
    //     return res !== Infinity ? res : c;
    // }

    // if(mat[i - 1] !== undefined && mat[i - 1][j] !== null) {
    //     // up = findDist(mat, i - 1, j, c + 1, currentMin);
    //     res = findDist(mat, i - 1, j, c + 1, currentMin);
    //     return res !== Infinity ? res : c;
    // }

let mat2 = [
    [0,0,1,0,1,1,1,0,1,1],
    [1,1,1,1,0,1,1,1,1,1],
    [1,1,1,1,1,0,0,0,1,1],
    [1,0,1,0,1,1,1,0,1,1],
    [0,0,1,1,1,0,1,1,1,1],
    [1,0,1,1,1,1,1,1,1,1],
    [1,1,1,1,0,1,0,1,0,1],
    [0,1,0,0,0,1,0,0,1,1],
    [1,1,1,0,1,1,0,1,0,1],
    [1,0,1,1,1,0,1,1,1,0]
];


let mat1 = [[0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0]]

let mat = [
    [1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1],
    [1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1],
    [1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1],
    [1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1],
    [0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1],
    [1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0],
    [1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1],
    [1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1],
    [0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1],
    [1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1],
    [1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0],
    [1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1],
    [0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1],
    [0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1],
    [1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1],
    [1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0],
    [1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1],
    [1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0],
    [1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1],
    [1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0],
    [1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1],
    [0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1],
    [1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1],
    [1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1],
    [0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1],
    [1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0],
    [1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1],
    [0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0]
];

console.log(updateMatrix(mat))
// var findDist = function(mat, i, j, c, l = true, r = true, d = true, u = true) {
//   if(i < 0 || j < 0 ) {
//     c = 0;
//     return null;
//   };

//   if(i > mat.length - 1 || j > mat.length - 1) {
//      c = 0;
//      return null;
//   };

//   if(mat[i][j] === undefined) {
//       c = 0;
//       return null;
//   }

//   if(mat[i][j] === 0) return c;

//   const right = r === true ? findDist(mat, i, j + 1, c + 1, l = false, r = true, d = false, u = false) : null;
//   if(right !== null && right > 0) {
//       return right;
//   } else if(r === true){
//       c = 0;
//       l = true;
//   }

//   const left = l === true ? findDist(mat, i, j - 1, c + 1, l = true, r = false, d = false, u = false) : null;
//   if(left !== null && left > 0 ) {
//       return left;
//   } else if(l === true){
//       c = 0;
//       d = true;
//   }

//   const down = d === true ? findDist(mat, i + 1, j, c + 1, l = false, r = false, d = true, u = false) : null;
//   if(down !== null && down > 0) {
//       return down; 
//   } else if(d === true) {
//       c = 0; 
//       u = true;
//   }

//   let up = u === true ? findDist(mat, i - 1, j, c + 1, l = false, r = false, d = false, u = true) : null;
//   if(up !== null && up > 0) {
//       return up;
//   } else {
//      return c;
//   }

// };





// if(mat[i][j] === 0) return count;
    
    // if(mat[i + 1] !== undefined) {
    //     findDist(mat, i + 1, j, count + 1)
    // } 

    // if(mat[i - 1] !== undefined) {
    //     findDist(mat, i - 1, j, count + 1)
    // }

    // if(mat[i][j + 1] !== undefined) {
    //     findDist(mat, i, j + 1, count + 1 )
    // }

    // if(mat[i][j - 1] !== undefined) {
    //     findDist(mat, i, j - 1, count + 1)
    // }

/*
Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

 

Example 1:


Input: mat = [
    [0,0,0],
    [0,1,0],
    [0,0,0]
]
Output: [[0,0,0],[0,1,0],[0,0,0]]

Example 2:


Input: mat = [
    [0,0,0],
    [0,1,0],
    [1,1,1]
]
Output: [[0,0,0],[0,1,0],[1,2,1]]
 
// iterate through mat 
// i = row, j = col
if ij = 1, check all pos around it
// pos = (1, 1), check (0, 1), (1, 0), (1, 2), (2, 1)
// pos = (2, 1), check(2, 0), (2, 2), (1, 1)
Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 104
1 <= m * n <= 104
mat[i][j] is either 0 or 1.
There is at least one 0 in mat.

*/



