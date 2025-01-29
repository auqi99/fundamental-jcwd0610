// no 1
const angka: number = 25;
if (angka % 2 === 0) {
  console.log(`${angka} is even number`);
} else {
  console.log(`${angka} is odd number`);
}

// ternary operator
//                  condition ?  true : false
console.log(angka % 2 === 0 ? "genap" : "ganjil");

// no 2
// syarat bilangan prima adalah angka tersebut tidak boleh habis dibagi oleh angka lain,
// selain 1 dan dirinya sendiri

let n: number = 7;
let isPrime: boolean = true;

if (n <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log(isPrime);

// no 3
//cara 1 (rumus pasti)
const angka1: number = 5;
const jumlah: number = (angka1 * (angka1 + 1)) / 2;
console.log(jumlah);

// cara 2
const N: number = 3;
let sum: number = 0;
let message: string = "";

for (let i = 1; i <= N; i++) {
  sum += i;

  if (i === N) {
    message += i + "";
  } else {
    message += i + " + ";
  }
}

console.log(sum);
console.log(message + " = " + sum);

// no 4
const num: number = 4;
let result: number = 1;
let pesan: string = "";

for (let i = num; i >= 1; i--) {
  result *= i;

  if (i === 1) {
    pesan += i + "";
  } else {
    pesan += i + " x ";
  }
}

console.log(pesan + " = " + result);

// no 5
const fib: number = 15;

let a: number = 0;
let b: number = 1;

for (let i = 0; i < fib; i++) {
  let next = a + b;
  a = b;
  b = next;
}
console.log(a);
