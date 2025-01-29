// no 1
const input: number = 9;

for (let i = 1; i <= 10; i++) {
  console.log(`${input} x ${i} = ${input * i}`);
}

//no 2

// cara 2 bang daniel
const kata: string = "madam";
const isPalindrome: boolean = kata === kata.split("").reverse().join("");
console.log(isPalindrome);

// cara 1 bang daniel

// index -> startnya dari 0
// length -> startnya dari 1

const kata1: string = "kakak";
let hasil: string = "";

for (let i = kata1.length - 1; i >= 0; i--) {
  hasil += kata1[i];
}

console.log(hasil);

// cara 2 bang daniel

// no 3
const cm: number = 100_000;
const km: number = cm / 100_000;

console.log(`konversi dari ${cm} cm adalah ${km} km`);

// no 4
// biasanya kalau kita masuk ke aplikasi, codingan yang ini tinggal di copas aja

let angka: number = 1000;
let uang: any = new Intl.NumberFormat("id-ID", {
  // id = bahasa ID = kode negara, akan menggunakan format penulisan negara tersebut
  style: "currency", //memanggil sintaks currency
  currency: "IDR", // menentukan currency apa yang digunakan
  //   maximumFractionDigits: 0 // untuk ngilangin dua '0' setelah koma
}).format(angka);
console.log(uang);

// no 5
const Kata: string = "Hello World";
const cari: string = "ell";
const hasil1: string = Kata.replace(cari, "");
console.log(hasil1);

// no 6
const inputKalimat: string = "hello world";
let ubahKata = inputKalimat.split(" ");
// console.log(ubahKata.length);
// console.log(ubahKata);
// console.log(ubahKata[0]);
// console.log(ubahKata[0][0]);

for (let i = 0; i < ubahKata.length; i++) {
  ubahKata[i] = ubahKata[i][0].toUpperCase() + ubahKata[i].slice(1);
}

console.log(ubahKata.join(" "));

// no 7
const tulisanku: string = "AkU BOy";
let tukar: string = "";

for (let i = 0; i < tulisanku.length; i++) {
  if (tulisanku[i] === tulisanku[i].toUpperCase()) {
    tukar += tulisanku[i].toLowerCase();
  } else {
    tukar += tulisanku[i].toUpperCase();
  }
}

console.log(tukar);

// no 8
const num1: number = 90;
const num2: number = 93;
console.log(num1 > num2 ? num1 : num2);

// no 9
const num3: number = 42;
const num4: number = 27;
const num5: number = 18;

const smallest: number = Math.min(num3, num4, num5);
const largest: number = Math.max(num3, num4, num5);
const middle: number = num3 + num4 + num5 - smallest - largest;

console.log(`${smallest} ${middle} ${largest}`);

// no 10
const input1: any = "";

if (typeof input1 === "string") {
  console.log(1);
} else if (typeof input1 === "number") {
  console.log(2);
} else {
  console.log(3);
}

// no 11
//cara 1
const inputString3: string =
  "An apple a day keeps the doctor away".toLowerCase();
const gantiKata: string = "a";
let modifikasiString: string = "";

for (let i = 0; i < inputString3.length; i++) {
  if (inputString3[i] === gantiKata) {
    modifikasiString += "*";
  } else {
    modifikasiString += inputString3[i];
  }
}

console.log(modifikasiString);

//cara 2
const kata4: string = "An apple a day keeps the doctor away";
const hasil2: string = kata4.toLowerCase().replaceAll("a", "*");
console.log(hasil2);
