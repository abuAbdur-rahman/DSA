export const reverseString = (val: string): string =>
  val.split('').reverse().join('');
export const ispallindrome = (val: string): boolean =>
  reverseString(val) === val;
export const reverseInteger = (val: number): number =>
  parseInt(reverseString(val.toString())) * Math.sign(val);
export const sentenceCapitalization = (val: string): string =>
  val
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');

export const FizzBuzz = (to: number) => {
  for (let i = 1; i <= to; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('FizzBuzz');
    } else if (i % 3 == 0) {
      console.log('Fizz');
    } else if (i % 5 == 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
};

type Analysis = {
  bestBuy: number;
  bestSell: number;
};

export const MaxProfit = (stockPrices: number[]): Analysis => {
  //   let bestBuy: number;
  //   let bestSell: number;
  //   bestBuy = Math.min(...stockPrices);
  //   const bestBuyIndex = stockPrices.findIndex((price) => price === bestBuy);
  //   bestSell = Math.max(...stockPrices.slice(bestBuyIndex));
  let bestBuy = stockPrices[0];
  let bestSell = 0;

  for (let stockPrice of stockPrices.slice(1)) {
    bestBuy = Math.min(bestBuy, stockPrice);
    bestSell = Math.max(bestSell, stockPrice);
  }

  return {
    bestBuy,
    bestSell,
  };
};

export const chunk = (Arr: any[], chunkSize: number): any[] => {
  const newArr: any[] = [];
  for (let i = 0; i < Arr.length; i += chunkSize) {
    //using Splice
    //newArr.push([...Arr].splice(i, chunkSize));
    //console.log(Arr);

    //using slice
    newArr.push(Arr.slice(i, i + chunkSize));
  }

  return newArr;
};

export const twoSum = (Arr: number[], target: number): number[] => {
  let sum: number[];
  for (let i = 0; i < Arr.length; i++) {
    const num1 = Arr[i];
    for (let j = 0; j < Arr.length; j++) {
      const num2 = Arr[j];
      if (num1 + num2 === target) {
        return [num1, num2];
      }
    }
  }
  console.error(new Error(`there's no sum of ${target} in the Provided Array`));
  return [] as number[];
};
