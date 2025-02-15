// STACK -> LIFO (Last In First Out)
// [1, 2, 3, 4, 5]  yg diambil duluan '5'

class Stack {
  container: any[];
  maxSize: number;

  constructor() {
    this.container = [];
    this.maxSize = 10;
  }

  private isFull() {
    return this.container.length >= this.maxSize;
  }

  private isEmpty() {
    return this.container.length === 0;
  }

  push(element: any) {
    if (this.isFull()) {
      return "Container full";
    }
    this.container.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Container empty";
    }
    this.container.pop();
  }

  showContainer() {
    return this.container;
  }
}

const stack = new Stack();

console.log(stack.showContainer());
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.showContainer());
stack.pop();
stack.pop();
console.log(stack.showContainer());

// QUEUE => FIFO (First In First Out)

class Queue {
  container: any[];

  constructor() {
    this.container = [];
  }

  enqueque(element: any) {
    this.container.push(element);
  }

  dequeue() {
    this.container.shift();
  }

  showContainer() {
    return this.container;
  }
}

const queue = new Queue();

console.log(queue.showContainer());
queue.enqueque(1);
queue.enqueque(2);
queue.enqueque(3);
queue.enqueque(4);
queue.enqueque(5);
console.log(queue.showContainer());
queue.dequeue();
console.log(queue.showContainer());
queue.dequeue();
console.log(queue.showContainer());
queue.dequeue();
console.log(queue.showContainer());
queue.dequeue();
console.log(queue.showContainer());

// Set -> only unique values
// jarang dipake

const fruits: string[] = ["banana", "apple", "mango", "apple"];

const mySet = new Set(fruits);
console.log(mySet);

// ngecek apakah value nya ada di dalam set
console.log(mySet.has("mango"));

console.log(Array.from(mySet));
console.log([...mySet]);

// versi looping nya
const temp = [];
for (const value of mySet) {
  temp.push(value);
}
console.log(temp);

// delete data dalam set
mySet.delete("apple");
console.log(mySet);

// menghitung data dalam set
console.log(mySet.size);

// Hash Table / Map =============================================
// pakai case unik
const myMap = new Map();

myMap.set("name", "john");
myMap.set(123, 9000);

const object = { address: "jakarta" };
myMap.set(object, 9000);

const fn = () => {};
myMap.set(fn, "ini adalah function");

console.log(myMap.get("name"));
console.log(myMap.get(123));
console.log(myMap.get(fn));
console.log(myMap.get(object));

for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}
console.log(myMap.size); // ngecek jumlah data
console.log(myMap.has(object)); // ngecek apakah value nya ada
console.log(myMap.delete(object)); // delete value nya
console.log(myMap.has(object)); // ngecek apakah masih ada, ketika masih didelete

// contoh Big O notation

function test1() {
  // 0(N2)
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; i++) {
      console.log("hello");
    }
  }

  // 0(n)
  for (let i = 0; i < 10; i++) {
    console.log("Hello");
  }
}
