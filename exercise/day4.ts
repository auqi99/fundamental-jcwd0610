// no 1
function segitiga(height: number) {
  for (let i = 1; i <= height; i++) {
    let row: string = ""; // untuk mendefine sebuah variable, ada berapa row nya

    // nested loop (looping di dalam looping)
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}
segitiga(5);

// no 2
// nested loop
function segitiga1(height: number) {
  let currentNumber: number = 1;

  for (let i = 1; i <= height; i++) {
    let row: string = "";

    for (let j = 1; j <= i; j++) {
      if (currentNumber < 10) {
        row += "0" + currentNumber + " ";
      } else {
        row += currentNumber + " ";
      }
      currentNumber++;
    }
    console.log(row);
  }
}

segitiga1(5);

// no 3
function fizzBuzz(num: number) {
  let output: string = "";

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output += "FizzBuzz" + " ";
    } else if (i % 3 === 0) {
      output += "Fizz" + " ";
    } else if (i % 5 === 0) {
      output += "Buzz" + " ";
    } else {
      output += i + " "; // Jika bukan kelipatan 3 atau 5, cetak angka
    }
  }

  console.log(output);
}

fizzBuzz(15);

// no 4
function bmi(weight: number, height: number) {
  const result = weight / (height * height);

  if (result < 18.5) {
    return "less weight";
  } else if (result >= 18.5 && result <= 24.9) {
    return "ideal";
  } else if (result >= 25.0 && result <= 29.9) {
    return "overweight";
  } else if (result >= 30.0 && result <= 39.9) {
    return "very overweight";
  } else {
    return "obesity";
  }
}

const weight: number = 55; // in kg
const height: number = 1.58; // in meters

const hasil = bmi(weight, height);
console.log(hasil);

// no 5

// cara 1
// build-in method
function removeOddNumbers(numbers: number[]) {
  //langsung return (cara 1)
  return numbers.filter((number) => number % 2 === 0);

  // pake return result (cara lain)
  // const result = numbers.filter((number) => number % 2 === 0);
  // return result;
}

console.log(removeOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 10]));

// cara 2
// looping manual
function removeOddNumbers1(numbers: number[]) {
  const result: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push(numbers[i]);
    }
  }

  return result;
}

console.log(removeOddNumbers1([1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12]));

// no 6
// pake built in method
function splitString(input: string) {
  return input.split(" ");
}

console.log(splitString("Hello World"));

// tanpa built in method
function splitString1(input: string) {
  const kata: string[] = [];
  let tempString: string = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      kata.push(tempString);
      tempString = "";
      continue;
    }

    tempString += input[i];
  }

  kata.push(tempString);

  console.log(kata);
}

splitString1("Hello World Purwadhika");
