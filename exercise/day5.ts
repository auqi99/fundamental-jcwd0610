// no 1
function sortFunc(arr: number[]): {
  lowest: number;
  highest: number;
  avg: number;
} {
  arr.sort((a, b) => a - b);
  const lowest = arr[0];
  const highest = arr[arr.length - 1];
  const sum = arr.reduce((a, b) => a + b, 0);
  const avg = sum / arr.length;
  return { lowest, highest, avg };
}
console.log(sortFunc([32, 12, 10, 21, 9]));

// no 2
function concatWords(words: string[]): string {
  if (words.length === 1) return words[0];
  const lastWord = words.pop()!;
  return words.join(", ") + " and " + lastWord;
}
console.log(concatWords(["apple", "banana", "cherry", "date"]));

// no 3

//Write a function from a given array of numbers and return the second smallest number

function secondSmallest(arr: number[]): number | string {
  if (arr.length < 2) return "minimum array length harus 2";
  return arr.sort((a, b) => a - b)[1];
}
console.log(secondSmallest([5, 3, 1, 7, 2, 6]));

// no 4
function addArrays(arr1: number[], arr2: number[]): number[] {
  const result: number[] = [];
  const maxLength = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < maxLength; i++) {
    result.push((arr1[i] || 0) + (arr2[i] || 0));
  }
  return result;
}
console.log(addArrays([1, 2, 3, 2, 4], [3, 2, 1]));

// no 5
function addUniqueElement(arr: number[], newElement: number): number[] {
  if (!arr.includes(newElement)) arr.push(newElement);
  return arr;
}
console.log(addUniqueElement([1, 2, 3, 4], 7));

// no 6
function sumNumbersDataType(arr: any[]): number {
  return arr.reduce(
    (sum, value) => (typeof value === "number" ? sum + value : sum),
    0
  );
}
console.log(sumNumbersDataType(["3", 1, "string", null, false, undefined, 2]));

// no 7
function limitData(maxSize: number, ...integers: number[]): number[] {
  return integers.slice(0, maxSize);
}
console.log(limitData(3, 7, 10, 24, 3, 6, 7, 8));

// no 8
function combineArray<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}
console.log(combineArray([1, 2, 3], [3, 2, 1]));

// no 9
function findDuplicateValues(arr: number[]): number[] {
  const seen = new Set<number>();
  const duplicate: number[] = [];
  for (const value of arr) {
    if (seen.has(value) && !duplicate.includes(value)) duplicate.push(value);
    else seen.add(value);
  }
  return duplicate;
}
console.log(findDuplicateValues([1, 2, 2, 2, 3, 3, 4, 5, 5]));

// no 10
function findDifference(arr1: number[], arr2: number[]): number[] {
  return [
    ...arr1.filter((item) => !arr2.includes(item)),
    ...arr2.filter((item) => !arr1.includes(item)),
  ];
}
console.log(findDifference([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// no 11
function filterPrimitiveDataTypes(
  arr: any[]
): (number | string | boolean | null | undefined)[] {
  return arr.filter(
    (item) =>
      typeof item === "number" ||
      typeof item === "string" ||
      typeof item === "boolean" ||
      item === null ||
      typeof item === "undefined"
  );
}
console.log(
  filterPrimitiveDataTypes([1, [], undefined, {}, "string", {}, [], null])
);

// no 12
function sumDuplicateValues(arr: number[]): number {
  const duplicateValues = arr.filter(
    (value, index, self) => self.indexOf(value) !== index
  );
  return duplicateValues.reduce((sum, item) => sum + item, 0);
}
console.log(sumDuplicateValues([10, 20, 40, 10, 50, 30, 10, 60, 10, 20]));

// no 13
function playRockPaperScissors(
  playerChoice: string
): { result: string; computerChoice: string; playerChoice: string } | string {
  const choices = ["rock", "paper", "scissor"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  if (!choices.includes(playerChoice)) return "wrong input!";
  if (playerChoice === computerChoice)
    return { result: "draw", computerChoice, playerChoice };
  if (
    (playerChoice === "rock" && computerChoice === "scissor") ||
    (playerChoice === "scissor" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    return { result: "win", computerChoice, playerChoice };
  }
  return { result: "lose", computerChoice, playerChoice };
}
console.log(playRockPaperScissors("rock"));
