const calculateEngravingPrice = (message = "", pricePerWord = 0) => {
  let sumWodrs = message.split(" ");
  let normalizedSumWords = Number(sumWodrs.length);
  const costs = normalizedSumWords * pricePerWord;
  return costs;
};

console.log(calculateEngravingPrice("Proin sociis natoque et magnis parturient montes mus", 10)); // 80

console.log(calculateEngravingPrice("Proin sociis natoque et magnis parturient montes mus", 20)); // 160

console.log(calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)); // 240

console.log(calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)); // 120

console.log(calculateEngravingPrice("Uno", 100)); // 100
