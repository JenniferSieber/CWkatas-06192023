///codewars 6.19.2023
// https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-7&r%5B%5D=-8&r%5B%5D=-6&tags=Fundamentals&beta=false&order_by=sort_date%20desc

// KATA 1
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

function pipeFix(numbers) {
  let arr = []
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    arr.push(i)
  }
  return arr;
}

console.log(pipeFix([1,2,3,5,6,8,9]))
console.log(pipeFix([-1,4]))

// KATA 2
//  build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

function findMultiples(integer, limit) {
  let arr = [];
  for (let i = integer; i <= limit; i++) {
    if (i % integer === 0) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(findMultiples(5, 25))
console.log(findMultiples(1, 2))
console.log(findMultiples(11, 54))

//KATA 3
// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
function smash(words) {
  return words === [] || words === null ? '': words.join(' ');

};

console.log(smash([]))
console.log(smash(["hello", "world"]))
console.log(smash(["hello", "amazing", "world"]))
console.log(smash(["this", "is", "a", "really", "long", "sentence"]))