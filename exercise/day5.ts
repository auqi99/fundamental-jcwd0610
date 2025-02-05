// no 1
//Write a function to get the lowest, highest and average value in the array

// cara 1 pake sort function
const sortFunction = (arr: number[]) => {
  arr.sort((a, b) => a - b);
  const lowest: number = arr[0];
  const highest: number = arr[arr.length - 1];
  const sum: number = arr.reduce((a, b) => a + b);
  const average: number = sum / arr.length;

  // return {lowest: lowest, highest: highest, average: average};
  // bisa diringkas jika key & value nya sama 👇
  return { lowest, highest, average };
};

// versi pakai template literals
const result = sortFunction([3, 2, 6, 4, 1, 7, 11]);
console.log(
  `lowest: ${result.lowest}, highest: ${result.highest}, average: ${result.average}`
);

// versi tanpa template literals
console.log(sortFunction([3, 2, 6, 4, 1, 7, 11]));

// cara 2 tanpa sort function
const sortFunction1 = (arr: number[]) => {
  let lowest: number = arr[0];
  let highest: number = arr[0];
  let sum: number = 0;

  for (const num of arr) {
    if (num < lowest) lowest = num;
    if (num < highest) highest = num;
    sum += num;
  }
  const average = sum / arr.length;

  return { lowest, highest, average };
};

console.log(sortFunction1([3, 2, 6, 4, 1, 7, 11]));

// no 2
// Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.

const concatWords = (words: string[]) => {
  if (words.length === 1) {
    return words[0];
  } else {
    const lastWord = words.pop();
    return words.join(", ") + " and " + lastWord;
  }
};

console.log(concatWords(["apple", "banana", "cherry", "date"]));

// no 3
//Write a function from a given array of numbers and return the second smallest number

const secondSmallest = (arr: number[]) => {
  if (arr.length < 2) {
    return "minimum array length harus 2";
  }

  const sortedArr = arr.sort((a, b) => a - b);

  return sortedArr[1];
};

console.log(secondSmallest([5, 1, 3, 4, 7]));

// no 4
const calculateArr = (arr1: number[], arr2: number[]) => {
  const result: number[] = [];

  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] + arr2[i]);
  }

  return result;
};

console.log(calculateArr([1, 2, 3, 4], [3, 2, 1, 0]));

// no 5
// Write a function that adds an element to the end of an array.
// However, the element should only be added if it is not already in the array

const addNewElement = (arr: number[], newElement: number) => {
  if (!arr.includes(newElement)) {
    arr.push(newElement);
  }

  return arr;
};

console.log(addNewElement([1, 2, 3, 4], 7));
console.log(addNewElement([1, 2, 3, 4], 4));

// no 6
// Write a function from a given array of mixed data types
// and return the sum of all the number

const sumNumberDataTypes = (arr: any[]) => {
  let total: number = 0;

  arr.forEach((value) => {
    if (typeof value === "number") {
      total += value;
    }
  });

  return total;
};

console.log(sumNumberDataTypes(["3", 1, "string", null, false, undefined, 2]));

// no 7
// Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
// array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
// array can only contain 5 elements).

const limitData = (maxsize: number, ...integers: number[]) => {
  const result: number[] = [];

  integers.forEach((integers) => {
    if (result.length === maxsize) {
      return;
    }
    result.push(integers);
  });

  return result;
};

console.log(limitData(3, 6, 9, 1, 33, 20, 5, 10));

// no 8
// Write a function that will combine 2 given array into one array

const combineArr = (arr1: number[], arr2: number[]) => {
  return [...arr1, ...arr2];
};

console.log(combineArr([1, 2, 3], [4, 5, 6]));

// no 9
// Write a function to find duplicate values in an array

const findDuplicates = (arr: number[]) => {
  const duplicates: number[] = [];

  // loop setiap elemen dalam array
  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];

    // cek apakah angka ini sudah muncul sebelumnya dalam array
    let count: number = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === currentNumber) {
        count++;
      }
    }

    // jika angka udah muncul lebih dari sekali, tambahkan ke variable duplicates
    if (count > 1 && !duplicates.includes(currentNumber)) {
      duplicates.push(currentNumber);
    }
  }

  return duplicates;
};

console.log(findDuplicates([1, 1, 2, 2, 2, 3, 3, 4, 5, 5]));

// no 10
// Write a function to find the difference in 2 given array

const findDifference = (arr1: number[], arr2: number[]) => {
  const difference: number[] = [];

  for (const item of arr1) {
    if (!arr2.includes(item) && !difference.includes(item)) {
      difference.push(item);
    }
  }

  for (const item of arr2) {
    if (!arr1.includes(item) && !difference.includes(item)) {
      difference.push(item);
    }
  }

  return difference;
};

console.log(findDifference([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// no 11
// write a function that will return primitive data types only

const filterPrimitiveDataTyoes = (arr: any[]) => {
  return arr.filter((value) => {
    return typeof value !== "object" || value === null;
  });
};

console.log(filterPrimitiveDataTyoes([1, [], undefined, {}, "string", {}, []]));

// // no 12
// Write a function from the below array of number that will return sum of duplicate values.

const sumDuplicateValues = (arr: number[]) => {
  const seen: number[] = [];
  const duplicate: number[] = [];
  let result: number = 0;

  for (const value of arr) {
    if (seen.includes(value)) {
      if (!duplicate.includes(value)) {
        duplicate.push(value);
      }
    } else {
      seen.push(value);
    }
  }

  console.log(seen);
  console.log(duplicate);

  for (const value of arr) {
    if (duplicate.includes(value)) {
      result += value;
    }
  }

  return result;
};

console.log(sumDuplicateValues([10, 20, 10, 40, 50, 10, 60, 60, 10]));

// no 13
// Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'.
// The function will randomly pick between rock, paper, or scissor.

const rockPaperScissor = (player: "rock" | "paper" | "scissor") => {
  const choice: ("rock" | "paper" | "scissor")[] = ["rock", "paper", "scissor"];

  const computer = choice[Math.floor(Math.random() * 2.9)];

  if (player === computer) {
    return { result: "Draw", computer, player };
  }

  if (
    (player === "rock" && computer === "scissor") ||
    (player === "scissor" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return { result: "Win", computer, player };
    // return "Win" (cara simple)
  }

  return { result: "Lose", computer, player };
  //   return "Lose" (cara simple)
};

console.log(rockPaperScissor("rock"));
