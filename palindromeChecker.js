/* 
  Given a string
  return whether or not it's possible to make a palindrome out of the string's
  characters.

  What is it about a string that makes it possible for it to become a
  palindrome?
*/

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * - Space: O(?).
 * - Time: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str can be rearranged into a palindrome.
 */
function canStringBecomePalindrome(str) {
    // Create a frequency map to count the occurrences of each character
    const frequencyMap = {};

    // Count the occurrences of each character in the string
    for (const char of str) {
        if (frequencyMap[char]) {
            frequencyMap[char]++;
        } else {
            frequencyMap[char] = 1;
        }
    }

    // Initialize a variable to keep track of the number of characters with odd frequencies
    let oddCount = 0;

    // Iterate through the frequency map
    for (const char in frequencyMap) {
        if (frequencyMap[char] % 2 !== 0) {
            oddCount++;

            // If there are more than one characters with odd frequencies, it's not possible to form a palindrome
            if (oddCount > 1) {
                return false;
            }
        }
    }

    // If we've reached this point, the string can be rearranged into a palindrome
    return true;
}

/*****************************************************************************/
