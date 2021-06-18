// var updateMatrix = function(mat) {
//     for(let i = 0; i < mat.length; i++) {
//         for(let j = 0; j < mat[i].length; j++) {
//             if(mat[i][j] === 1) {
//                 if(mat[i] !== undefined && mat[i][j - 1] === 0) {
//                     mat[i][j] = 1;
//                 } else if(mat[i] !== undefined && mat[i][j + 1] === 0){ 
//                     mat[i][j] = 1;
//                 } else if(mat[i - 1] !== undefined && mat[i - 1][j] === 0){
//                     mat[i][j] = 1;
//                 } else if(mat[i + 1] !== undefined && mat[i + 1][j] === 0){ 
//                     mat[i][j] = 1;
//                 } else {
//                     mat[i][j] = findDist(mat, i, j);
//                 }
//             }
//         }
//     }
//     return mat;
// };

// var findDist = function(mat, i, j, c = 0, currentMin = mat.length) {
//       if(i < 0 || j < 0 || i >= mat.length || j >= mat[0].length || mat[i][j] === null || c >= currentMin) return Infinity;
//     if(mat[i][j] === 0) return c;

//     let left = findDist(mat, i, j - 1, c + 1, currentMin);
//     if(left < currentMin) currentMin = left;
//     let right = findDist(mat, i, j + 1, c + 1, currentMin);
//     if(right < currentMin) currentMin = right;
//     let down = findDist(mat, i + 1, j, c + 1, currentMin);
//     if(down < currentMin) currentMin = down;
//     let up = findDist(mat, i - 1, j, c + 1, currentMin);
//     if(up < currentMin) currentMin = up;

//     let smallest = Math.min(left, right, down, up)
  
//     return smallest === Infinity ? currentMin + 1  : smallest;
    
// }

// let mat2 = [
//     [0,0,1,0,1,1,1,0,1,1],
//     [1,1,1,1,0,1,1,1,1,1],
//     [1,1,1,1,1,0,0,0,1,1],
//     [1,0,1,0,1,1,1,0,1,1],
//     [0,0,1,1,1,0,1,1,1,1],
//     [1,0,1,1,1,1,1,1,1,1],
//     [1,1,1,1,0,1,0,1,0,1],
//     [0,1,0,0,0,1,0,0,1,1],
//     [1,1,1,0,1,1,0,1,0,1],
//     [1,0,1,1,1,0,1,1,1,0]
// ];
console.log(updateMatrix(mat))
