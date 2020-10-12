function formatString(string, maxLength = 40) {
  // Write code under this line
  const result = string.length < maxLength ? string : string.slice(0, maxLength) + "...";
  return result;
}

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // 'Vestibulum facilisis, purus nec pulvinar...'

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30));
// 'Vestibulum facilisis, purus ne...'
