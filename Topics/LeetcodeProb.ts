// * Problem 1
// ! idValidParenthesis = (str) => bool
// ! Checks if parenthesis is properly closed
// Todo: We can Implement this using stack!!!

export const isValidParenthesis = (chars: string) => {
  const ParamStack: string[] = [];
  const brackets: Record<string, string> = {
    '{': '}',
    '(': ')',
    '[': ']',
  };

  for (let char of chars) {
    if (brackets[char]) {
      ParamStack.push(char);
    } else {
      const last = ParamStack.pop();
      if (!last || brackets[last] !== char) {
        return false;
      }
    }
  }

  return ParamStack.length === 0;
};

// * Problem 2
// ! reverseString = (str) => str
// ! returns the reversed str
// Todo: We can Implement this using stack!!!

export const reverseString = (str: string) => {
  const stack = [];
  for (let char of str) {
    stack.unshift(char);
  }
  return stack.join('');
};

// * Problem 3
// ! wordCounter = (str) => {word: count}
// ! returns the cout of word present in a str(phrase | sentence)
// Todo: We can Implement this using HASHtABLE!!!

export const wordCounter = (str: string) => {
  if (str === '') return {};
  const words = str.toLowerCase().split(/\s+/);

  let wordMap: Record<string, number> = {};
  for (const word of words) {
    //console.log('hey'!!, wordMap[word]);
    if (word in wordMap) {
      wordMap[word]++;
      continue;
    }
    wordMap[word] = 1;
  }

  return wordMap;
};

// * Problem 3
// ! wordCounter = (str) => {word: count}
// ! returns the cout of word present in a str(phrase | sentence)
// Todo: We can Implement this using HASHtABLE!!!

export const twoSum = (nums: number[], target: number) => {
  const numMap: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // If we've seen the complement before, we found our pair
    if (complement in numMap /*&& numMap[complement] !== i*/) {
      //console.log(complement, nums[i]);

      return [numMap[complement], i];
    }

    // Store the current number and its index
    numMap[nums[i]] = i;
  }

  console.error(
    new Error(`No two numbers sum to ${target} in the provided array`)
  );
  return [] as number[];
};
