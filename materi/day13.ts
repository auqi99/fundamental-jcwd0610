import { myFunc } from "./test";

// simulasi fetch data ke BE
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve("Data berhasil diambil");
      } else {
        reject("Terjadi kesalahan");
      }
    }, 1000);
  });
}

// promise tanpa async await
// fetchData()
//   .then((response) => {
//     console.log(response);
//     return response;
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// menggunakan async await -> lebih simple

// pakai function biasa
// async function getData(){}

// pakai arrow function
const getDataUser = async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getDataUser();

const getData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    console.log(response.ok);

    // kondisi error handling, jika ada kesalahan ketika fetch data
    if (!response.ok) {
      // throw "Terjadi kesalahan"  ,bisa juga gini
      throw new Error("Terjadi kesalahan");
    }

    console.log(users);
  } catch (error) {
    console.log(error);
  }
};

getData();

// promise biasa tanpa async await

const getData1 = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      console.log(users);
    })
    .catch((error) => {
      console.log(error);
    });
};

getData1();

// JSON -> javascript object notation
const user = {
  name: "Budi",
  age: 32,
};

// convert object js ke JSON
const userJSON = JSON.stringify(user);
console.log(userJSON);

// convert JSON ke object js
const parseJSON = JSON.parse(userJSON);
console.log(parseJSON);

// modules
// versi JS liat di note
myFunc();

// HOISTING -> var & function declaration
/*
    Hoisting adalah mekanisme di javascript di mana deklarasi variable dan fungsi
    diangkat (hoisted) ke atas dari cakupan (scope) sebelum kode dieksekusi.
*/

// testFunctionExpression(); // ini gkk bakalan bisa karena bukan hoisting
const testFunctionExpression = () => {};

testFunctionDeclaration();
function testFunctionDeclaration() {}
