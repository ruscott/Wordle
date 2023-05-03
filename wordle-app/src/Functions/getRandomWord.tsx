export const getRandomWord = (wordList: string[]): string => {
  var randomNumber: number = Math.floor(Math.random() * wordList.length);
  return wordList[randomNumber];
};
