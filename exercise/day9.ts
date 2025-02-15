/* 
    You have implemented the BankQueue class to manage customer queues in a bank. In this scenario, 
    you can perform operations such as adding customers to the queue, calling the next customer, and 
    counting the number of customers in the queue.

   constructor:
   - this.queue

   method : 
   - enqueue : menambahkan value baru dalam antrian
   - dequeue : menghilangkan value paling depan dalam antrian
   - size : melihat jumlah antrian saat ini
*/

class BankQueue {
  queue: string[]; //  = []; bisa tambah ini, dan constructor nya dihapus

  constructor() {
    this.queue = [];
  }

  private isEmpty() {
    return this.queue.length === 0;
  }

  enqueue(costumer: string) {
    this.queue.push(costumer);
    return "enqueque success";
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Antrian kosong";
    }

    this.queue.shift();

    return "dequeue success";
  }
  size() {
    return `jumlah antrian ${this.queue.length}`;
  }
}

const bri = new BankQueue();

console.log(bri.enqueue("jaki"));
console.log(bri.enqueue("sari"));
console.log(bri.enqueue("wara"));

// cek antrian
console.log(bri.queue);

// panggil antrian yang paling depan
console.log(bri.dequeue());

// cek antrian lagi, setelah dipanggil
console.log(bri.queue);

// panggil lagi antrian yang paling depan
console.log(bri.dequeue());

// cek antrian lagi, setelah dipanggil
console.log(bri.queue);

/* 
    You are given a JavaScript class called Train that simulates a train's passenger management system. 
    The Train class has the following methods and properties:

    - constructor(): Initializes the Train with an initial passenger, "masinis," and a maximum 
    capacity of 10 passengers.
    - isFull(): Checks if the train is at full capacity. It returns true if the train is full 
    and false otherwise.
    - isEmpty(): Checks if the train has no passengers except "masinis." It returns true if the 
    train is empty and false otherwise.
    - showPassenger(): Returns an object that contains the list of passengers on the train and 
    the remaining available seats.
    - passengerIn(name): Adds a passenger with the given name to the train. It returns "add passenger 
    success" if the passenger is successfully added, "train full" if the train is at full capacity, 
    and "passenger already exists" if the passenger is already on the train.
    - passengerOut(name): Removes a passenger with the given name from the train. It returns 
    "remove passenger success" if the passenger is successfully removed, "cannot remove masinis" 
    if an attempt is made to remove the "masinis," "train empty" if the train is already empty, and 
    "passenger not found" if the passenger with the given name is not found on the train.
*/

class Train {
  #container: string[];
  #maxSize: number;

  constructor(maxSize: number = 11) {
    // 11 akan diambil jika default value nya tidak diisi
    this.#container = ["masinis"]; // 11, sudah termasuk masinis
    this.#maxSize = maxSize;
  }

  private isFull() {
    return this.#container.length >= this.#maxSize;
    // bisa juga gini
    // const full = this.container.length >= this.maxSize;
    // return full;
  }

  private isEmpty() {
    return this.#container.length === 1;
  }

  passengerIn(name: string) {
    if (this.isFull()) {
      return "Penumpangnya Penuh cuy";
    }

    if (this.#container.includes(name)) {
      return "orangnya udah di dalem";
    }

    this.#container.push(name);

    return "Check-in berhasil";
  }

  passengerOut(name: string) {
    if (name === "masinis") {
      return "Masinis jangan turun";
    }

    if (this.isEmpty()) {
      return "Kereta masih kosong";
    }

    const index = this.#container.indexOf(name);

    if (index === -1) {
      return "Penumpang tidak ditemukan";
    }

    this.#container.splice(index, 1);

    return `${name} berhasil dikasih faham`;
  }

  showPassenger() {
    return {
      passenger: this.#container
        .filter((value) => value !== "masinis")
        .join(", "),
      remainingSeat: this.#maxSize - this.#container.length,
    };
  }
}

const taksaka = new Train();

// const taksaka = new Train(15); bisa di isi default value nya,
// jika udah melebihi jumlah default valuenya,  maka return 'Penumpangnya penuh cuy'

console.log(taksaka.passengerIn("aris"));
console.log(taksaka.passengerIn("worek"));
console.log(taksaka.passengerIn("husna"));
console.log(taksaka.passengerIn("husna"));
console.log(taksaka.passengerIn("mursid"));
console.log(taksaka.passengerIn("kak gem"));
console.log(taksaka.passengerIn("hansen"));

console.log(taksaka.showPassenger());
console.log(taksaka.passengerOut("kak gem"));
console.log(taksaka.showPassenger());
console.log(taksaka.passengerOut("kak gem"));

// tambahan
const result = {
  datas: [
    { name: "joko", NIK: "972497245986429", gender: "male" },
    { name: "joni", NIK: "97249724586429", gender: "female" },
    { name: "iko", NIK: "972497245986429", gender: "shemale" },
  ],
};

const hasil = result.datas.map((data) => {
  return data;
});

console.log(hasil[0]);

const test = { ...hasil[0] };

console.log(test);

result.datas.push();
console.log(hasil);
