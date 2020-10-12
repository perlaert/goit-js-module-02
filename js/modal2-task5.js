function checkForSpam(str) {
  "use strict";
  // Write code under this line
  let normalizedWord = str.toLowerCase();
  let findWords = normalizedWord.includes("spam") || normalizedWord.includes("sale");
  return findWords;
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// const str = "Get best sale offers now!";
// let normalizedStr = str.toLowerCase();
// let message = normalizedStr.split(" ");
// console.log(message);
// console.log(message.includes("spam") || message.includes("sale"));
