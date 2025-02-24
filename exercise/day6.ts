/* Create a class to calculate array of student data
● The object has this following properties :
○ Name → String
○ Email → String
○ Age → Date
○ Score → Number
● Parameters : array of student
● Return values :
○ Object with this following properties : 
■ Score
● Highest ● Lowest ● Average
■ Age
● Highest ● Lowest ● Average */

class Student {
  name: string;
  email: string;
  age: number; // Age is now a number (year)
  score: number;

  constructor(name: string, email: string, age: number, score: number) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.score = score;
  }
}

interface StudentDataSummary {
  score: {
    highest: number;
    lowest: number;
    average: number;
  };
  age: {
    highest: number;
    lowest: number;
    average: number;
  };
}

class StudentDataCalculator {
  students: Student[];

  constructor(students: Student[]) {
    this.students = students;
  }

  calculateSummary(): StudentDataSummary {
    if (this.students.length === 0) {
      return {
        score: { highest: 0, lowest: 0, average: 0 },
        age: { highest: 0, lowest: 0, average: 0 },
      };
    }

    const scores = this.students.map(student => student.score);
    const ages = this.students.map(student => student.age);

    const highestScore = Math.max(...scores);
    const lowestScore = Math.min(...scores);
    const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;

    const highestAge = Math.max(...ages);
    const lowestAge = Math.min(...ages);
    const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;

    return {
      score: {
        highest: highestScore,
        lowest: lowestScore,
        average: averageScore,
      },
      age: {
        highest: highestAge,
        lowest: lowestAge,
        average: averageAge,
      },
    };
  }
}

// Example Usage:
const students: Student[] = [
  new Student("Alice", "alice@example.com", 2002, 95),
  new Student("Bob", "bob@example.com", 2001, 80),
  new Student("Charlie", "charlie@example.com", 2003, 90),
];

const calculator = new StudentDataCalculator(students);
const summary = calculator.calculateSummary();
console.log(summary);

const emptyCalculator = new StudentDataCalculator([]);
const emptySummary = emptyCalculator.calculateSummary();
console.log(emptySummary);

/* Create a program to create transaction
● Product Class
○ Properties 
■ Name
■ Price
● Transaction Class
○ Properties 
■ Total
■ Product
● All product data
● Qty
○ Add to cart method → Add product to transaction
○ Show total method → Show total current transaction
○ Checkout method → Finalize transaction, return transaction data */

class Product {
  name: string;
  price: number;
  
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

interface ProductInCart {
  product: Product;
  quantity: number;
}

interface TransactionData {
  total: number;
  products: { name: string; price: number; quantity: number }[];
}

class Transaction {
  total: number = 0;
  products: ProductInCart[] = [];

  add_to_cart(product: Product, quantity: number): void {
    this.products.push({ product, quantity });
    this.total += product.price * quantity;
  }

  show_total(): void {
    console.log(`Current Total: ${this.total}`);
  }

  checkout(): TransactionData {
    const transaction_data: TransactionData = {
      total: this.total,
      products: this.products.map(item => ({
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
      })),
    };
    return transaction_data;
  }
}

// Example Usage
const product1: Product = new Product("Laptop", 1000);
const product2: Product = new Product("Mouse", 50);

const transaction: Transaction = new Transaction();
transaction.add_to_cart(product1, 1);
transaction.add_to_cart(product2, 2);

transaction.show_total();

const checkout_data: TransactionData = transaction.checkout();
console.log(checkout_data);

// Discussion
class Product1 {
  constructor (public name: string, public price:number) {
  }
}

interface Cart {
product: Product1;
qty: number;
}

class Transaction1 {
  private cart: Cart[] = [];
  private total: number = 0;

  addToCart(product: Product1, qty: number) {
    const existingProduct = this.cart.find((item) => item.product.name === product.name);

    if(existingProduct) {
      existingProduct.qty += qty;
    } else {
      this.cart.push({product, qty})
    }

    this.total = product.price * qty;
  }

  showCart() {
    return this.cart;
  }

  showTotal() {
    return this.total;
  }

  checkout(userMoney: number) {
    if(userMoney < this.total) {
      return "Uang Kurang"; 
    } 

    // return "Pembayaran berhasil";
    return {
      total: this.total,
      message: "Transaksi Berhasil",
      kembalian: userMoney - this.total,
    }
  }
}

const kaos = new Product("Kaos", 20000);
const jaket = new Product("Jaket", 30000);

const transaction1 = new Transaction1();
transaction1.addToCart(kaos, 2);
console.log(transaction1.showCart());
console.log(transaction1.showTotal());
console.log(transaction1.checkout(50000))