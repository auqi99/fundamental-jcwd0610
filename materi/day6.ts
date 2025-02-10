// cara menuliskan sebuah object
// cara 1
const object1 = {};

// cara 2
const object2 = new Object();

interface User1 {
  name: string;
  greet: () => void;
  greet1: () => void;
}

const user: User1 = {
  name: "Budi",
  greet() {
    console.log("Hello");
  },
  greet1: () => {
    console.log("Hello");
  },
};

const person: any = {
  name: "joko",
  age: 20,
};

// add property
console.log(person);
person.hobby = "Mancing";
console.log(person);
person["address"] = "Jogja";
console.log(person);

// delete property
console.log(person);
delete person.address;
console.log(person);

// accessing value
console.log(person.name); // using dot (titik)
console.log(person["age"]); // using square bracket

// ngambil key / value dalam bentuk array
console.log(Object.keys(person));
console.log(Object.values(person));

// IMMUTABLE & MUTABLE ==============================================================
/*
Mutable: merujuk pada tipe data yang bisa diubah setelah dibuat. biasanya ini adalah
objek dan array dalam Javascript. Misalnya, kamu bisa mengubah isi array atau properti
objek setelah diciptakan.
(ingat aja DATA NON PRIMITIVE: OBJECT dan ARRAY)

Immutable: merujuk pada tipe data yang tidak bisa diubah setelah dibuat. ini umumnya
berlaku pada tipe data  primitif seperti string, number, boolean, null, undefined dan
symbol dalam Javascript. Begitu nilai primitif ditetapkan, nilai tersebut tidak bisa diubah
(INGAT DATA PRIMITIVE)
*/

// Immutable
const count1: number = 4;
let count2: number = count1;
count2 = 10;

console.log(count1);
console.log(count2);

// Mutable
let orang1: any = { name: "jack" };
let orang2: any = { ...orang1 }; // shallow copy

console.log(orang1);
console.log(orang2);

orang2.age = 20;

console.log(orang1);
console.log(orang2);

// SHALLOW COPY
// Shallow copy adalah salinan dari objek, tetapi hanya di level pertama (top-level) dari objek tersebut.
// Jika objek memiliki properti yang berupa objek lain (nested object), maka properti tersebut hanya disalin sebagai referensi, bukan salinan terpisah.
let original1 = {
  name: "Udin",
  address: {
    city: "Jakarta",
  },
};

let shallowCopy = { ...original1 };

shallowCopy.address.city = "Bandung";
// structuredClone membuat salinan baru dari objek dan objek-objek di dalamnya,
// sehingga objek original dan deepCopy tidak berbagi referensi yang sama

console.log(original1);
console.log(shallowCopy);

// ada shallow copy, perubahan pada objek yang bersifat nested (seperti objek address) akan mempengaruhi kedua objek,
// karena mereka berbagi referensi yang sama untuk objek address. Namun,
// properti yang ada di level pertama (name dalam hal ini) akan disalin secara independen.

// DEEP COPY
// Deep copy adalah salinan dari objek yang membuat salinan dari seluruh struktur objek (termasuk objek-objek yang ada di dalamnya).
// Dengan deep copy, perubahan pada objek salinan tidak akan mempengaruhi objek asli, bahkan pada objek yang nested sekalipun.
let original = {
  name: "Udin",
  address: {
    city: "Jakarta",
  },
};
let deepCopy = structuredClone(original);

deepCopy.address.city = "Bandung";

console.log(original);
console.log(deepCopy);

// OPTIONAL CHAINING =======================================
let user1: any = {};

console.log(user1.address);
console.log(user1.address?.street);

// FOR IN ======================================================
// Kalau ingin melakukan looping didalam sebuah object harus pake 'for in',
// tidak bisa yang lain.
// Harus pake square bracket, ga bisa pake dot / titik.
const person1 = {
  name: "Aceng",
  age: 70,
};

for (const key in person1) {
  console.log(key);
  console.log(person[key]);
}

// DESTRUCTURING ASSIGNMENT
// mengeluarkan property dalam object menjadi sebuah variable

const animal = {
  name: "Joe",
  age: 2,
  weight: 10,
};

// versi non destruct
console.log(animal.name);
console.log(animal.age);
console.log(animal.weight);

// versi destruct object
const { name, age, weight } = animal;

// bisa di rename juga
// const { name: nm, age, weight } = animal;
// console.log(nm);

// bisa diubah isi nya, jika variable nya pakai let
// let { name, age, weight } = animal;
// name = "Jokoooo";

console.log(name);
console.log(age);
console.log(weight);

// versi array non destruct
const array = [10, 20];
console.log(array[0]);
console.log(array[1]);

//versi destruct array
const [a, b] = array;
console.log(a);
console.log(b);

// SPREAD OPERATOR =================================
// digunakan untuk copy isi object / menggabungkan object

const objectOne = { name: "jacky", password: "Admin123" };
const objectTwo = { email: "jacky@mail.com", name: "wahana" };

// bisa juga ubah disini
const result = { ...objectOne, ...objectTwo, password: "wadidaw" };

// console.log(result);
console.log(result);

// THIS KEYWORD ==============================================
// mengakses property lain di dalam sebuah object

const animal1 = {
  firstName: "udin",
  lastName: "ku",
  greet() {
    console.log(`Halo ${this.firstName} ${this.lastName}`);
  },
};

animal1.greet();

// CLASS ======================================================
// template / cetakan untuk membuat object

// Class Declaration
// dalam class / object, method adalah sebuah function
class User {
  greeting() {
    console.log("Hello World");
  }
  // bisa juga diisi dengan arrow function
  greeting1 = () => {
    console.log("Hello World");
  };
}

// nb
// ilmu tambahan
//syntax function declaration
// function test() {}

//syntax function expression
// const test2 = function () {}

// Class Expression
const User1 = class {
  greeting() {
    console.log("Hello World");
  }

  greeting1() {
    console.log("Hello World");
  }
};

// CREATE AN OBJECT FROM CLASS
// nama class nya bebas

const human = new User1();
const human1 = new User1();

human.greeting();
human1.greeting1();

// CONSTRUCTOR =====================================================
// method bawaan dari class yang akan dijalankan pertama kali saat membuat object baru
// menggunakan class

// ACCESS MODIFIER ->

class Person {
  name: string;
  #email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.#email = email;
  }

  private showEmail() {
    return "budi@mail.com";
  }

  sendReminder() {
    const email = this.showEmail();
    return email;
  }

  greeting() {
    return `Hello ${this.name}`;
  }
}

// parameter dari name
const orang = new Person("Budi", "budi@mail.com");
const orang3 = new Person("Udin", "udin@mail.com");
console.log(orang.sendReminder());

console.log(orang.greeting());
console.log(orang3.greeting());

// GETTER & SETTER =========================================
// Getter (get) dan Setter (set) adalah metode khusus yang digunakan untuk membaca
// dan mengubah nilai properti secara lebih terkontrol.

const orang4 = {
  firstName: "udin",
  lastName: "jaienab",

  get fullName() {
    return this.firstName + " " + this.lastName;
  },

  set fullName(value) {
    const split = value.split(" ");
    this.firstName = split[0];
    this.lastName = split[1];
  },

  register(value: string) {
    const split = value.split(" ");
    this.firstName = split[0];
    this.lastName = split[1];
  },

  showDetail() {
    return this.firstName + " " + this.lastName;
  },
};

console.log(orang4.firstName + " " + orang4.lastName);
console.log(orang4.fullName); // menggunakan getter
orang4.fullName = "Joko Siti"; // menggunakan setter
console.log(orang4.firstName);
console.log(orang4.lastName);

orang4.register("Udin Awei"); // menggunakan method lain
console.log(orang4.firstName);
console.log(orang4.lastName);
console.log(orang4.showDetail());

// INHERITANCE ========================================================
// pewarisan dari parent class bisa di akses oleh child class
// property dan method dari parent class bisa diakses oleh child class

// TIDAK MENGGUNAKAN KONSEP INHERITANCE
class Employee {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
  work() {
    console.log(`${this.name} is working`);
  }
}

class Manager {
  name: string;
  salary: number;
  department: string;

  constructor(name: string, salary: number, department: string) {
    this.name = name;
    this.salary = salary;
    this.department = department;
  }

  work() {
    console.log(`${this.name} is working`);
  }
}

/* 
  Masalah dalam kode yang tidak menggunakan Inheritance :
    - Duplikasi kode: name, salary, dan metode work() harus ditulis ulang di Employee dan Manager.
    - Sulit dikelola: Jika ada perubahan di work(), kita harus mengedit di banyak tempat.
*/

// MENGGUNAKAN KONSEP INHERITANCE
class Employee1 {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  work() {
    console.log(`${this.name} is working`);
  }
}
class Manager2 extends Employee1 {
  department: string;

  constructor(name: string, salary: number, department: string) {
    super(name, salary); // memanggil constructor parent class (Employee2)
    this.department = department;
  }
}

const manager = new Manager2("Adit", 2000000, "IT");

manager.name; // property dari parent
manager.salary; // property dari parent
manager.department; // properti dari child (Manager2)
manager.work(); // method dari parent

// INSTANCE OF ===================================================
// mengecek apakah sebuah object memiliki hubungan ke class tertentu
// kepake nya di back-end untuk error handling

class Animal {}
class Rabbit extends Animal {}
class Tree {}

const rabbit = new Rabbit();

console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Rabbit);
console.log(rabbit instanceof Tree);
