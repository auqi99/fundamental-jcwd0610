// versi JS
// const message = "Hello World";

// versi TS
// const message1: string = "woy";
// const message2: string | number = 0;

// ======== STRING BUILD IN METHOD

const nama: string = "Buudi";
const message: string = "Hello World";
const nama1: string = "Joko";
const nama2: string = "budi";
const nama3: string = "erma";

console.log(nama.toLowerCase());
console.log(nama.toUpperCase());
console.log(nama.replace("u", "I"));
console.log(nama.replaceAll("u", "I"));
console.log(message.split(""));

// memisahkannya dengan spasi
console.log(message.split(" "));

console.log(nama1.concat(nama2).concat(nama3));
console.log(nama1 + nama2 + nama3);

console.log(nama.slice(0, 3));

// ========== TEMPLATE LITERALS / TEMPLATE STRING
const nama4: string = "Carli";
const nama5: string = `welcome ${nama4}`;
console.log(nama5);

console.log("welcome " + nama4);

// ========== NUMBER BUILD IN METHOD
const angka: string = "200";
console.log(typeof Number(angka)); // konversi tipe data string ke number
console.log(angka);
console.log(parseInt(angka)); //konversi tipe data string ke number
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// ========== STRING CONVERSION
const angka1: number = 20;
console.log(String(angka1));
console.log(angka1.toString());

// ========== BOOLEAN CONVERSION
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(-5));
console.log(Boolean(""));
console.log(Boolean("0"));
console.log(Boolean("ab"));

// ========== DATE
const now: Date = new Date();
console.log(now);

// Get Method
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getTime());

// Set method
now.setDate(10);
now.setMonth(3);
now.setFullYear(2050);

console.log(now);

// ============== BASIC OPERATOR
/*
    + -> pertambahan
    - -> pengurangan
    * -> perkalian
    / -> pembagian
    % -> modulo (sisa bagi), pengecekan ganjil(jika ada sisa bagi nya), genap(jika tidak ada sisa bagi nya)
    ** -> pangkat
*/

console.log(1 + 1);
console.log(2 - 1);
console.log(3 * 4);
console.log(100 / 4);
console.log(10 % 4);
console.log(10 ** 5);

// ================= MODIFY IN PLACE
let n: number = 8;
n += 2; //n = n + 2
console.log(n);

// ================== INCREMENT & DECREMENT
let counter: number = 1;

counter++; // increment
// counter--; // decrement

console.log(counter);

// ====================== POSTFIX & PREFIX
let counter1: number = 2;

// console.log(counter1++); // postfix
console.log(++counter1); // prefix

// ================= COMPARISON OPERATOR
// ==
// ===
// <
// >
// <=
// >=

// console.log(5 == "5"); // true pengecekan value nya saja
// console.log(5 === "5"); // true pengecekan value dan tipe data nya
console.log(5 < 2);
console.log(5 > 2);
console.log(5 <= 5);
console.log(5 >= 5);

// ===================== MATH

// Math ceil -> membulatkan angka ke atas
console.log(Math.ceil(4.7));

// Math floor -> membulatkan angka ke bawah
console.log(Math.floor(4.7));

// Math round -> membulatkan angka ke bilangan bulat terdekat
console.log(Math.round(4.7));
console.log(Math.round(4.3));

// Math max -> mengembalikan angka terbesar dari sekumpulan angka
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 100));

// Math min -> mengembalikan angka terkecil dari sekumpulan angka
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 100));

// Math abs -> menghilangkan tanda negatif
console.log(Math.abs(-11));

// Math random -> menghasilkan angka acak antara 0 dan 1
console.log(Math.random());
