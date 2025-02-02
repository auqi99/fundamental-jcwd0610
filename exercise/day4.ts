// no 1
// nested loop (looping di dalam looping)
function segitiga(height: number) {
  for (let i = 1; i <= height; i++) {
    let row: string = "";

    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}
segitiga(5);

// no 2
// nested loop
// function triangle(height: number) {
//   let currentNumber: number = 1;

//   for (let i = 1; i <= height; i++) {
//     let str: string = "";

//     for (let j = 1; j <= i; j++) {
//       // ternary
//       str += (currentNumber < 10 ? "0" : "") + currentNumber + " ";
//     }
//     currentNumber++;
//   }
//   console.log(str);
// }
// triangle(5);

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
const weight: number = 70;
const height2: number = 1.75;

// function hasilBMI(weight: number, height: number) {
//   const result = weight / (height * height);

//   if (result < 18.5) {
//     return "less weight";
//   } else if (result >= 18.5 && result <= 24.9) {
//     return "Ideal";
//   } else if (result >= 25.0 && result <= 29.9) {
//     return "Overweight";
//   } else if (result >=) {
//     return "Very Overweight";
//   } else {
//     return "Obesity";
//   }
// }
// console.log(hasilBMI(weight, height2));

// no 5
// build-in method
function removeOddNumber(arr: number[]): number[] {
  return arr.filter((number) => number % 2 === 0);
}
const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(removeOddNumber(array));

// tanpa build-in method
function removeOddNumberManual(arr: number[]): number[] {
  const temp: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      temp.push(arr[i]);
    }
  }
  return temp;
}
const array1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(removeOddNumberManual(array1));
