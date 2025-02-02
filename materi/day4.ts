// ARRAY, biasanya direfrentasikan dengan kurung siku, berdasarkan urutan, indexnya
// sedangkan object direfrentasikan dengan kurung kurawal, berdasarkan key, tidak berasarkan urutan

const arr = []; // cara 1, lebih sering dipake
const arr2 = new Array(); // cara 2

// array of string
const arr1: string[] = ["A", "B", "C", "D"];
const arr3: string[] = new Array("A", "B", "C", "D");

const arr4: number[] = [1, 2, 3, 4];
const arr5: number[] = new Array(1, 2, 3, 4, 5);

// semua data pun bisa dimasukin ke dalam array
[1, "string", true, undefined, null];
// tapi best practice nya, semua datanya mirip(sama2 string atau sama2 number, dll)

// cara ambil value yang ada di dalam array
console.log(arr1[3]);

// cara mengubah isi dalam array nya
console.log(arr3);
arr3[2] = "Z";
console.log(arr3);

// array of object
// key : value

// helloWorld -> camel case, Kata pertama dimulai dengan huruf kecil, kata berikutnya dimulai dengan huruf besar tanpa spasi atau simbol.
// HelloWorld -> pascal case, Mirip dengan Camel Case, tetapi kata pertama juga dimulai dengan huruf besar.
// hello_world -> snake case, Menggunakan huruf kecil dengan garis bawah (_) sebagai pemisah kata.

// length nya ada 3, index nya ada 2
// const teachers: { name: string; email: string }[] = [
//   { name: "joko", email: "joko@mail.com" }, // satu kesatuan ini, namanya properti
//   { name: "alin", email: "alin@mail.com" },
//   { name: "lina", email: "lina@mail.com" },
// ];

// versi simple dengan menggunakan interface
// PascalCase
// singular

// bikin interface untuk address, biar lebih rapi
interface Address {
  street: string;
  city: string;
}

interface Teacher {
  name: string; // kalau ga ada tanda tanya, maka itu wajib di isi
  email: string;
  hobby?: string; // pake tanda tanya menandakan dia optional (bisa di isi atau enggak)
  address?: Address; // pake tanda tanya menandakan dia optional (bisa di isi atau enggak)
}

const teachers: Teacher[] = [
  {
    name: "joko",
    email: "joko@mail.com",
    hobby: "main game",
    address: { city: "Bandung", street: "JL Kolonel" },
  },
  { name: "alin", email: "alin@mail.com" },
  { name: "lina", email: "lina@mail.com" },
];

// cara lain penulisan interface, menggunakan 'type', jangan lupa ditambah (=)
// type Teacher = {
//   name: string;
//   email: string;
// };

// ====================== FOR OF
const fruits: string[] = ["Apple", "Banana", "Orange"];

//=======  singular   plural
for (const fruit of fruits) {
  console.log(fruit);
}

// exercise for of
//hitung jumlah semua bilangan dalam array menggunakan for of
// ex input = [1, 2, 3, 4, 5, 6]

// akan nge looping sebanyak isi array nya
let sum = 0;
const numbers: number[] = [1, 2, 3, 4, 5, 6];
let result: number = 0;

for (const number of numbers) {
  result += number;
}
console.log(result);

// ======================== FUNCTION
// 1. function declaration
/* 
  function namaFunction(parameter){
    // logic
  }
*/
// di JS/TS kita hanya bisa nge return 1x, beda dengan golang bisa 2x

function square(angka: number) {
  // logic
  return angka * angka;
}

// panggil function nya, dengan mengetik nama functionnya
const perkalian = square(4);
const perkalian1 = square(5);

console.log(perkalian);
console.log(perkalian1);

// 2. function expression
// Harus tampung functionnya ke dalam variable,
// -lalu isi dengan function yang ga ada namanya, karena diwakilin sama
// -variable, mis; const (square1)
// function yang ga ada nama variable, disebut 'anonymous function'

const square1 = function (coach: number) {
  return coach * coach;
};

const perkalian2 = square1(12);
const perkalian3 = square1(15);

console.log(perkalian2);
console.log(perkalian3);

// ====================== FUNCTION SCOPE
// variable yang di define di dalam function hanya bisa diakses
// -di dalam function tersebut

function greeting() {
  const hello = "Hello";
  console.log(hello); // ini bisa
}
// console.log(hello); ini ga bisa dipanggil, karena ia berada di luar

greeting(); // panggil nama functionnya

// ========================= PARAMETER & ARGUMENT
// parameter -> variable yang memiliki value dari argument yang dimasukkan
// argument -> value yang dimasukkan saat pemanggilan function

//        parameter 👇
function greeting1(name: string) {
  const hello = "Hello";
  return hello + " " + name;
}

//             argument  👇
console.log(greeting1("budi"));
console.log(greeting1("siti"));
console.log(greeting1("wahyu"));

// ============================ DEFAULT PARAMETER

function multiply(a: number, b: number = 2) {
  //versi pakai kondisi
  // if (!b) {
  //   return a * a;
  // }
  return a * b;
}

// 5 masuk ke a, 7 masuk ke b
console.log(multiply(5, 7));
console.log(multiply(5));

// ================================== REST PARAMETER
// mewakili sisa argument ke dalam 1 variable parameter
// cuma ini jarang dipake, good to know

function myFunc(a: number, b: number, ...manyMoreArgs: number[]) {
  console.log(a);
  console.log(b);
  console.log(manyMoreArgs);
}

myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9);

// ============================= NESTED FUNCTION
// fungsi yang berada dalam fungsi
// inner function bisa akses parameter dari outer function
// outer function tidak bisa akses parameter dari inner function

// outer function
function getMessage(firstName: string) {
  // inner function 1
  function sayHello() {
    return "Hello " + firstName + ",";
  }

  // inner function 2
  function welcomeMessage() {
    return "welcome to Purwadhika";
  }

  return sayHello() + " " + welcomeMessage();
}

console.log(getMessage("Auqi"));

// =============================== CLOSURE
// inner function selalu mempunyai akses ke variable dan parameter dari outer function
// bahkan setelah function tersebut di return

// outer function
function greeting2(name: string) {
  const defaultMessage: string = "Hello";

  // inner function
  return function () {
    return defaultMessage + " " + name;
  };
}

const result1 = greeting2("Auqi");
console.log(result1());

// ============================ RECURSIVE
// fungsi yang memanggil dirinya sendiri

function countDown(number: number) {
  console.log(number);

  let nextNumber = number - 1;

  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}

countDown(10);

// ================================== ARROW FUNCTION
// shortcut untuk menuliskan function expression
const square3 = function (number: number) {
  return number * number;
};

// syntax -> () => {}
// contoh jika diubah ke arrow function
const square4 = (number: number) => {
  return number * number;
};

// kalo misalnya ga ada pembahasan lain, cuma 1 line bisa disingkat kaya gini
const square2 = (number: number) => number * number;

// =========================== ARRAY BUILT-IN METHOD
// JOIN -> menggabungkan value yang ada dalam array ke dalam bentuk string
const words: string[] = ["hello", "world"];
console.log(words.join(" "));

// POP -> menghilangkan value paling akhir dalam array
const words1: string[] = ["test", "hello", "world"];
console.log(words1);
words1.pop();
console.log(words1);

// contoh lain
const test: { name: string }[] = [
  { name: "budi" },
  { name: "wakwaw" },
  { name: "minah" },
];

test.pop();
console.log(test);

// PUSH -> menambahkan data baru ke paling akhir array
const words4: string[] = ["hello", "world"];
words4.push("test");
console.log(words4);

// SHIFT -> menghilangkan value paling depan dalam array
const words2: string[] = ["test", "hello", "world"];
words2.shift();
console.log(words2);

// UNSHIFT -> menambahkan value ke urutan paling depan array
const words3: string[] = ["hello", "world"];
words3.unshift("test");
console.log(words3);

// CONCAT -> menggabungkan 2/lebih array menjadi 1 array
const array1: string[] = ["hello"];
const array2: string[] = ["boy"];
const array3: string[] = ["berantem"];
const array4: string[] = ["yok"];

// cara utama
console.log(array1.concat(array2).concat(array3).concat(array4));

// cara lain
const mergeArr = [...array1, ...array2, ...array3, ...array4]; //spread
console.log(mergeArr);

// SPLICE -> untuk menghapus, mengganti, atau menambahkan value pada sebuah array
// rumus -> splice(startIndex, brpYgMauDiDelete, item)

const months: string[] = ["jan", "march", "april", "june"];
months.splice(1, 0, "feb"); // menambahkan data baru pada index 1
console.log(months);

months.splice(4, 1); // menghapus june, index ke 4
console.log(months);

months.splice(3, 1, "may"); // mengganti value april menjadi may, pada index 3
console.log(months);

// SLICE -> mereturn array baru berdasarkan start index dan end index
// rumus -> slice(startIndex, endIndex), endIndex nya tidak diambil
// -karena hanya sebagai pembatas

const fruits1: string[] = ["Apple", "Banana", "Orange", "Mango", "Lemon"];
console.log(fruits1.slice(1, 4));

// versi kebalik, tapi jarang bnget usecase seperti ini
console.log(fruits1.slice(-4, -1));

// INDEXOF -> mencari index dari value yang kita search,
// kalo tidak ditemukan maka akan me return -1
const fruits2: string[] = ["Apple", "Banana", "Orange", "Manggo", "Lemon"];
console.log(fruits2.indexOf("Lemon"));
console.log(fruits2.indexOf("Watermelon"));

// SORT -> mengurutkan isi array berupa string atau number
// versi string
const fruits3: string[] = ["Manggo", "Apple", "Banana", "Orange"];
fruits3.sort();
console.log(fruits3);

// versi string kebalik
const fruits4: string[] = ["Manggo", "Apple", "Banana", "Orange", "Lemon"];
fruits4.sort().reverse();
console.log(fruits4);

//versi number tanpa compare function
const points: number[] = [5, 8, 2, 0, 1, 6];
points.sort();
console.log(points);
// tapi ini masih ada kekurangan, jika kita masukkan angka 10, maka 10 nya akan
// ditarok didepan karena menghitung 1 di awalan sepuluh (1)0

// solusi nya, pakai versi number menggunakan compare function
const points1: number[] = [5, 1, 8, 2, 6, 4, 9];
// points1.sort((a, b) => a - b); // ascending
points1.sort((a, b) => b - a); // descending
console.log(points1);

// REVERSE -> membalikkan urutan element dalam array
const points2: number[] = [3, 2, 10, 5, 6];
points2.reverse();
console.log(points2);

// MAP -> melakukan looping pada array dan akan mereturn array baru
// bakal sering digunakan di front end, untuk nampilin komponen-komponen
// menggunakan callback

const points3: number[] = [1, 2, 3, 4, 5, 6];

// parameter ke 2 berupa index nya, jika index nya ga kita pake, maka bisa dihapus
//parameter ke 1 harus singular dari arraynya
//                            👇
const result2 = points3.map((point, index) => {
  // kalau ada logic yang perlu ditulis, bisa tulis disini
  return point * 3;
});

console.log(result2);

// nb: kalau pake kurawal, jangan lupa di return, kalau ga ada kurawal maka
// -otomatis ngereturn sendiri
// mis; const result2 = points3.map((point) => points * 2)

// FOREACH - > bakal melakukan looping sebanyak isi array nya, tapi tidak mereturn array baru
// juga menggunakan callback
const fruits5: string[] = ["Manggo", "Apple", "Banana", "Orange", "Lemon"];
let container = ""; // pengecualian, ga ditulis juga gak apa2

const result3 = fruits5.forEach((fruit, idx) => {
  console.log(fruit);
  console.log(idx);
  container += fruit + " "; // pengecualian, ga ditulis juga gak apa2
  return fruit;
});

console.log(container); // pengecualian, ga ditulis juga gak apa2
console.log(result3);

// FILTER -> melakukan looping pada array dan menghasilkan array baru
// berdasarkan kondisi pada return function

const ages: number[] = [32, 15, 4, 22, 12, 55];
const result4 = ages.filter((age) => {
  // kondisi nya diletakkan di return function 👇
  return age > 17;
});
console.log(result4);

// FIND -> mencari value yang ditemukan pertama kali di dalam array

const ages1: number[] = [17, 32, 14, 67, 98];
// versi satu line
// const result5 = ages1.find((age) => age > 14)

// versi lebih dari 1 line
const result5 = ages1.find((age) => {
  return age > 30;
});
console.log(result5);

// FINDINDEX -> mirip kaya find tapi yang dihasilkan adalah indexnya
const ages2: number[] = [11, 32, 53, 75, 99];
const result6 = ages2.findIndex((age) => {
  return age > 50;
});
console.log(result6);

// REDUCE -> biasa digunakan untuk melakukan operasi aritmatika pada tiap isi array
const numbers1: number[] = [200, 50, 100, 50];
// versi 1 line
// const result7 = numbers1.reduce((a, b) => a * b);

// versi lebih dari 1 line dan ada return nya
const result7 = numbers1.reduce((a, b) => {
  return a * b;
});

console.log(result7);

// INCLUDES -> mengecek value pada array ada apa tidak,
// hasil return nya berupa boolean
const fruits6: string[] = ["Manggo", "Apple", "Banana", "Orange", "Lemon"];
console.log(fruits6.includes("Banana")); // true
console.log(fruits6.includes("Durian")); // false
