const isRobotBounded  = instructions => {
        let dir = 90;
        let circle = [[0, 0]]
        for(let i = 0; i < instructions.length; i++) {
            if(instructions[i] === 'L' && dir <= 270){
              dir += 90;  
            } else if(instructions[i] === 'L' && dir === 360) {
                dir = 90;
            } else if(instructions[i] === 'R' && dir >= 90) {
                dir -= 90
            } else if(instructions[i] === 'R' && dir === 0) {
                dir = 270
            };
            let lastPos = circle[circle.length - 1];
            let nextPos;
            if(instructions[i] === 'G') {
                if(dir === 90) {
                    nextPos = [lastPos[0], lastPos[1] + 1];
                } else if(dir === 180) {
                    nextPos = [lastPos[0] - 1, lastPos[1]];
                } else if(dir === 270) {
                    nextPos = [lastPos[0], lastPos[1] - 1];
                } else if ((dir === 0 || dir === 360)) {
                    nextPos = [lastPos[0] + 1, lastPos[1]];
                };
                circle.push(nextPos);
            }
        }
        let [x, y] = circle[circle.length - 1];
         if((x === 0 && y === 0) || dir !== 90) {
            return true
        } else {
            return false;
        }
};
console.log(isRobotBounded('GGLLGG'))
console.log(isRobotBounded('GL'))


// Example 1:
// (0, 0)(0,)
// Input: instructions = "GGLLGG"
// Output: true
// Explanation: The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
// When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.
// Example 2:

// Input: instructions = "GG"
// Output: false
// Explanation: The robot moves north indefinitely.
// Example 3:

// Input: instructions = "GL"
// Output: true
// Explanation: The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...
