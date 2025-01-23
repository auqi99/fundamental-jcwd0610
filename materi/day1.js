console.log("Hello World");

// ========Variable (storage / penampungan data)
// var, let, const

var person = "auqi";
console.log(person);
var person;

let person1 = "rifqi";
person1 = "aulia";
console.log(person1);

const person2 = "jack";
// person2 = "kcaj"

//======== VARIABLE NAMING
/*
- must contain only letters, digits, or symbol "$" and "_"
- The first character must not digit
- case sensitive
    let orang
    let Orang
dua 'variable naming' let ini berbeda (o kecil dan O besar)
*/

//======== DATA TYPES
// primitive data types: string, number, boolean, null, dan undefined
// non primitive data types: object dan array

// string -> "",''
console.log("1");

// number -> 1 2 3 4 5 65 200 dst
console.log(150);

// boolean -> true and false
console.log(true);
console.log(false);

// null -> menandakan sebuah value itu masih kosong dan belum terisi
let orang = null

// undefined -> JS tidak tahu isi/value nya
let orang1 = undefined