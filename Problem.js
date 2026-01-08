// // Problem 1: Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("hello"));


// // Problem 2: Count Vowels in a String
function countVowels(text) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  
  return text.toLowerCase().split('')
    .filter(char => vowels.includes(char)).length;
}

console.log(countVowels("Programming")); 


// // Problem 4: Find the Maximum Number
const numbers = [5, 1, 9, 3];

const result = Math.max(...numbers);

console.log(result);


// // Problem 6: Sum of All Numbers in an Array
function sumAll(nums) {
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i]; 
  }
  return total;
}
const data = [1, 2, 3, 4];
console.log(sumAll(data)); 


// Problem 7: Find Even Numbers in an Array
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}
console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello")); 


// Problem 5: Remove Duplicates from an Array
function cleanArray(list) {
  let uniqueOnes = [];

  for (let val of list) {
    if (!uniqueOnes.includes(val)) {
      uniqueOnes.push(val);
    }
  }
  return uniqueOnes;
}
const myData = [1, 2, 2, 3, 4, 4];
console.log(cleanArray(myData));


// Problem 8: Capitalize First Letter of Each Word
function capitalizeWords(str) {
  return str.split('').map(word => {
    return word[0].toUpperCase() + word.slice(1);}).join('');
}
console.log(capitalizeWords("hello world")); 


// Problem 9: Find the Factorial of a Number
function n(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i; 
  }
  return result;
}
console.log(n(5)); 


// Problem 10: PingPong Challenge
function playPingPong() {
  for (let n = 1; n <= 20; n++) {
    let output = "";
    
    if (n % 3 === 0) output += "Ping";
    if (n % 5 === 0) output += "Pong";
    
    console.log(output || n);
  }
}
playPingPong();




