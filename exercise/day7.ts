// No 1
// Create a function to check if two objects are equal

const checkObjectEqual = (obj1: any, obj2: any) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  console.log(keys1);
  console.log(keys2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  console.log(obj1["d"]);
  console.log(obj2["c"]);

  // for in
  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

console.log(checkObjectEqual({ a: 1, d: 1 }, { a: 1, d: 3 }));

// No 2
// Create a function to get the intersection of two objects
const intersection = (obj1: any, obj2: any) => {
  const duplicate = {}; // variable penampung duplicate

  // for in
  for (const key in obj1) {
    console.log(key);

    if (obj1[key] === obj2[key]) {
      duplicate[key] = obj1[key];
    }
  }

  return duplicate;
};

console.log(intersection({ a: 1, c: 1 }, { a: 1, c: 2 }));

// No 3
// Create a function to merge two array of student data and remove duplicate data
// Student data : name & email

interface Student {
  name: string;
  email: string;
}

const combineArray = (arr1: Student[], arr2: Student[]) => {
  const mergeArr = [...arr1, ...arr2];
  const temp: Student[] = [];

  // Di sini, dilakukan perulangan untuk setiap elemen dalam mergeArr.
  // Untuk setiap mergeArr[i], kode ini mencari apakah sudah ada objek Student
  // dalam array temp yang memiliki email yang sama. Jika tidak ada,
  // berarti elemen tersebut belum ada dalam temp,
  // sehingga elemen tersebut dimasukkan ke dalam array temp.
  for (let i = 0; i < mergeArr.length; i++) {
    const existingStudent = temp.find(
      (student) => student.email === mergeArr[i].email
    );

    if (!existingStudent) {
      temp.push(mergeArr[i]);
    }
  }

  return temp;
};

const input1 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];
const input2 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];

console.log(combineArray(input1, input2));

// No 4
// Create a function that can accept input as an array of objects
// and switch all values into property and property into value.

const switchKeyToValue = (data: any[]) => {
  const result = []; // variable penampung

  data.forEach((item) => {
    const temp = {};

    for (const key in item) {
      temp[item[key]] = key;
      console.log(item[key]);
    }

    result.push(temp);
  });

  return result;
};

console.log(
  switchKeyToValue([
    { name: "david", age: 28 }, // iterasi 1
    { name: "david", age: 20 }, // iterasi 2
  ])
);

// No 5
// Create a function to find a factorial number using recursion
const factorial = (n: number) => {
  if (n === 1) {
    return {
      steps: [1],
      total: 1,
    };
  } else {
    const next = factorial(n - 1);
    console.log(next);

    return {
      steps: [n, ...next.steps],
      total: n * next.total,
    };
  }
};

const { steps, total } = factorial(5);

console.log(steps);
console.log(total);
console.log(steps.join(" x ") + " = " + total);

/* 
Proses Eksekusi Rekursi:
    1. factorial(5) dipanggil, tetapi untuk menghitung total, ia harus menunggu 
       factorial(4).
    2. factorial(4) dipanggil, tetapi ia harus menunggu factorial(3).
    3. factorial(3) dipanggil, tetapi ia harus menunggu factorial(2).
    4. factorial(2) dipanggil, tetapi ia harus menunggu factorial(1).
    5. Base case tercapai di factorial(1), sehingga dikembalikan 
       { steps: [1], total: 1 }.
    6. Sekarang factorial(2) bisa lanjut dengan hasil dari factorial(1), 
       menghitung { steps: [2, 1], total: 2 * 1 }, lalu mengembalikan hasilnya.
    7. factorial(3) lanjut dengan hasil dari factorial(2), menghitung 
       { steps: [3, 2, 1], total: 3 * 2 }, lalu mengembalikan hasilnya.
    8. factorial(4) lanjut dengan hasil dari factorial(3), menghitung 
       { steps: [4, 3, 2, 1], total: 4 * 6 }, lalu mengembalikan hasilnya.
    9. factorial(5) akhirnya mendapatkan hasil dari factorial(4), menghitung 
       { steps: [5, 4, 3, 2, 1], total: 5 * 24 }, lalu mengembalikan hasil akhir.

Kesimpulan:
    - Setiap pemanggilan rekursi harus menunggu hasil dari pemanggilan berikutnya 
      sebelum ia bisa melanjutkan perhitungannya.
    - Karena itu, kode dalam return pada else baru dieksekusi setelah pemanggilan 
      rekursif selesai dan mulai kembali ke atas dari base case.
    - Itulah sebabnya console.log(next) mencetak hasil dari rekursi terdalam ke luar, 
      bukan sebaliknya.
*/
