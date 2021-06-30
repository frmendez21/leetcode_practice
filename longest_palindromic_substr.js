// Given a string s, return the longest palindromic substring in s.
const longestPalindrome = s => {
    let longestPdrome = s[0];
    for(let i = 0; i < s.length; i++) {
        for(let j = i; j < s.length; j++) {
            let substr = s.slice(i, j);
            if(substr === substr.split('').reverse().join('')) {
                if(substr.length > longestPdrome.length) {
                    longestPdrome = substr;
                }
            }
        }
    }
    return longestPdrome;
};

console.log(longestPalindrome('babad'))
// Example 1:

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
// Example 3:

// Input: s = "a"
// Output: "a"
// Example 4:

// Input: s = "ac"
// Output: "a"