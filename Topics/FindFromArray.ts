export const FindFromArray = (allEl: string[], elName: string) => {
  for (let el of allEl) {
    if (el === elName) {
      return console.log(
        `Found "${el}" at ${allEl.findIndex((val, i) => val === el)}th index`
      );
    }
  }
  return console.log(`"${elName}" not found`);
};

export const findPairs = () => {
  for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
      console.log(i + j);
    }
  }
};
