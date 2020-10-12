function findLongestWord(string = "") {
  let words = string.split(" ");
  let longestWord = words[0];
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'

// const string = "The quick brown fox jumped over the lazy dog";
// let message = string.split(" ");

// console.log(message);
// let longestWord = message[0].length;

// for (let i = 0; i < message.length; i += 1) {
//   let longestWord = message[0].length;
//   if (longestWord < message[i].length);
//   longestWord = message[i];
//   console.log(message[i]);
// }
