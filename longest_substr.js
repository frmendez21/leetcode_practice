// Given a string s, find the length of the longest substring without repeating characters.

// create obj to hold chars
// i = right = 0 slow
// j = left = 0 fast
// if string in obj increment else init to 1
// while obj at char greater than 1
// decrement obj @ i
// increment  i
// ans = max of ans or j - i + 1

 const lengthOfLongestSubstring = string => {
    if(string.length === 0) return 0;
    const obj = {};
    let i = 0;
    let res = 0;
    for(let j = 0; j < string.length; j++) {
        if(obj[string[j]]) {
            obj[string[j]] ++;
        } else {
            obj[string[j]] = 1;
        }
        while(obj[string[j]] > 1) {
            obj[string[i]]--;
            i++;
        }
        res = Math.max(res, j - i + 1)
    };
    return res;
 };

 console.log(lengthOfLongestSubstring('abcabcbb'))
// Example 1:
// once we get to a trigger while loop decrement till 1 i goes to b
// Input: s = "abcabcbb"
// Output: 3
// Expla
// nation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0