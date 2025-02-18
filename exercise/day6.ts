interface Student{
  name: string;
  email: string;
  age: number;
  score: number;
}

const students: Student[] = [
  {name: "budi", email: "budi@mail.com", age: 20, score: 65},
  {name: "siti", email: "siti@mail.com", age: 23, score: 70},
  {name: "jack", email: "jack@mail.com", age: 18, score: 99},
  {name: "blake", email: "blake@mail.com", age: 45, score: 80},
];


class CalculateStudent {
  students: Student[];
  constructor(students: Student[]) {
      this.students = students;
  }

  calculate(){
      let maxScore: number, minScore: number, avgScore: number;
      let maxAge: number, minAge: number, avgAge: number;


  const sortStudentByScore = this.students.sort((a, b) => a.score - b.score);    
  const sumStudentScore = this.students.reduce((a, b) => a+ b.score, 0);
  minScore = sortStudentByScore[0].score;
  maxScore = sortStudentByScore[sortStudentByScore.length - 1].score;
  avgScore = sumStudentScore / this.students.length;


  const sortStudentByAge = this.students.sort((a, b) => a.age - b.age);
  const sumStudentByAge = this.students.reduce((a, b) => a + b.age, 0);
  minAge = sortStudentByAge[0].age;
  maxAge = sortStudentByAge [sortStudentByAge.length - 1].age;
  avgAge = sumStudentByAge / this.students.length;

  return {
      score: {
          highest: maxScore,
          lowest: minScore,
          average: avgScore
      },
      age: {
          highest: maxAge,
          lowest: minAge,
          average: avgAge
      }
  };
  }
}

const CalculateStudents = new CalculateStudent(students);
console.log(CalculateStudents.calculate());


// No 2

// class Product {
//   name: string;
//   price: number;

//   constructor(name: string, price: number) {
//     this.name = name;
//     this.price = price;
//   }
// }

// class Transaction {
//   private cart: { product: Product; qty: number }[] = [];
//   private total: number = 0;

//   addToCart(product: Product, qty: number): void {
//     this.cart.push({ product, qty });
//     this.total += product.price * qty;
//     console.log(`${qty}x ${product.name} added to cart.`);
//   }

//   showTotal(): void {
//     console.log(`Current Total: $${this.total.toFixed(2)}`);
//   }

//   checkout(): { total: number; products: { name: string; price: number; qty: number }[] } {
//     if (this.cart.length === 0) {
//       throw new Error("Cart is empty! Add products before checkout.");
//     }

//     const transactionData = {
//       total: this.total,
//       products: this.cart.map(item => ({
//         name: item.product.name,
//         price: item.product.price,
//         qty: item.qty,
//       })),
//     };