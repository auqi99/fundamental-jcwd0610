// ========= IF STATEMENT
// syntax

/* 
if(condition) {
code block
}
*/

const age: number = 21;

if (age >= 18) {
  console.log("kamu bisa bikin anak");
}

// ========== ELSE STATEMENT
const age1: number = 10;
if (age1 >= 17) {
  console.log("anda bisa bikin anak");
} else {
  console.log("maaf, latihan lagi yang bener");
}

// ============ ELSE IF STATEMENT
const grade: string = "C";

if (grade === "A") {
  console.log("apik nilaimu le");
} else if (grade === "B") {
  console.log("lumayan iki le");
} else if (grade === "C") {
  console.log("sing sabar le");
} else {
  console.log("sing rajin le sekolahnya");
}

// ============= SWITCH CASE
const month: string = "januari";

switch (month) {
  case "januari":
    console.log("bulan januari");
    break;
  case "februari":
    console.log("bulan februari");
    break;
  case "maret":
    console.log("bulan maret");
    break;
  default:
    console.log("bulan tidak ditemukan");
    break;
}

// ============ LOGICAL OPERATOR
// && -> and
// || -> or
// != -> not

// AND -> harus keduanya bernilai true agar menghasilkan nilai true
const umur: number = 18;
const punyaSIM: boolean = true;

//      true     true    -> true
if (umur >= 17 && punyaSIM === true) {
  console.log("boleh bawa kendaraan");
} else {
  console.log("ga boleh bawa kendaraan");
}

// OR -> kalau salah satu nya ada yang nilainya true, akan menghasilkan nilai true
const car: string = "mercy";

//    true      false      -> true
if (car === "mercy" || car === "bmw") {
  console.log("mobil jerman");
} else {
  console.log("mobil jepang");
}

// NOT -> membalikkan nilai boolean
const isSunny: boolean = false;
const isRaining: boolean = !isSunny;

console.log(isSunny);
console.log(isRaining);

// =============== TERNARY OPERATOR
// shortcut untuk if else condition
// condition ? true : false

const str: string = "typescript";

if (str === "javascript") {
  console.log("javascript");
} else {
  console.log("not javascript");
}

console.log(str === "javascript" ? "javascript" : "not javascript");

console.log(
  str === "javascript"
    ? "javascript"
    : str === "typescript"
    ? "typescript"
    : "not found"
);

//contoh NaN, yg di parseInt bukan angka
console.log(parseInt("dkcbkdb"));

// ============== LOOP STATEMENT (perulangan)
// rangkaian instruksi yang dilakukan berulangkali hingga kondisinya tidak terpenuhi

// type: for loop, while loop, and do while loop

// FOR LOOP -> mempunyai 2 statement
// statement 1: menginisialisasikan variable dari looping itu sendiri
// statement 2: mendefine kondisi dari looping tersebut
// statement 3: kode yang dieksekusi di akhir setiap iterasi

/* 
    for(statement1;statement2;statement3){
    code block yang akan diulang
    }
*/

for (let i = 0; i < 6; i++) {
  console.log("Hello World");
}

// WHILE LOOP

let i: number = 0;

while (i < 10) {
  console.log("Hello World");
  i++;
}

// DO WHILE LOOP

/* 
    do {} while ();
*/

// dia akan melakukan looping 1x, baru melakukan pengecekan, meskipun value ny false

let count: number = 7;

do {
  console.log("ini iterasi ke: " + count);
  count++;
} while (count <= 5);

// =============== BREAK
// untuk menghentikan loop

let sum: number = 0;

while (true) {
  console.log("Sum : " + sum);

  if (sum >= 5) {
    break;
  }

  sum++;
}

// ========== COUNTINUE
// melakukan skip pada looping

for (let i = 0; i < 5; i++) {
  if (i === 3) continue; // nge skip satu angka
// if (i === 3 || i === 4) continue;

  console.log(i);
  
}
