// no 1
// Specifications :
// Create a program to calculate total salary based on employee type
// There are two types of employee : full-time & part-time
// Salary for full-time employee :
// IDR 100.000 / hour
// IDR 75.000 / hour, if the number of working hours per day is more than 6 hours
// Salary for part-time employee :
// IDR 50.000 / hour
// IDR 30.000 / hour, if the number of working hours per day is more than 6 hours

// Requirements :
// Create an Employee as a parent class
// Create a FulltimeEmployee and ParttimeEmployee as a child of Employee class
// Create a method in that class to add working hour per day
// Create a method in that class to calculate total salary
// Use inheritance concept

// di TS ada 'enum'
enum Gender {
  MALE,
  FEMALE,
}
class Employee {
  name: string;
  gender: "male" | "female";
  workingHours: number;

  constructor(name: string, gender: "male" | "female") {
    this.name = name;
    this.gender = gender;
    this.workingHours = 0;
  }

  formatPrice(price: number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  }
}

class FullTimeEmployee extends Employee {
  hourlyRate: number;
  extraHourlyRate: number;

  constructor(name: string, gender: "male" | "female") {
    super(name, gender);
    this.hourlyRate = 100_000;
    this.extraHourlyRate = 75_000;
  }

  addWorkingHours(hours: number) {
    this.workingHours += hours;
  }

  calculateSalary() {
    if (this.workingHours <= 6) {
      return {
        name: this.name,
        gender: this.gender,
        status: "fulltime",
        hours: this.workingHours,
        totalSalary: this.formatPrice(this.workingHours * this.hourlyRate),
      };
    } else {
      const regularHours = 6;
      const extraHours = this.workingHours - regularHours;

      return {
        name: this.name,
        gender: this.gender,
        status: "Full time",
        hours: this.workingHours,
        totalSalaryRegular: this.formatPrice(regularHours * this.hourlyRate),
        totalSalaryExtra: this.formatPrice(extraHours * this.extraHourlyRate),
        total: this.formatPrice(
          regularHours * this.hourlyRate + extraHours * this.extraHourlyRate
        ),
      };
    }
  }
}

class PartTimeEmployee extends Employee {
  hourlyRate: number;
  extraHourlyRate: number;

  constructor(name: string, gender: "male" | "female") {
    super(name, gender);
    this.hourlyRate = 50_000;
    this.extraHourlyRate = 30_000;
  }

  addWorkingHours(hours: number) {
    this.workingHours += hours;
  }

  calculateSalary() {
    if (this.workingHours <= 6) {
      return {
        name: this.name,
        gender: this.gender,
        status: "Part time",
        hours: this.workingHours,
        totalSalary: this.formatPrice(this.workingHours * this.hourlyRate),
      };
    } else {
      const regularHours = 6;
      const extraHours = this.workingHours - regularHours;

      return {
        name: this.name,
        hours: this.workingHours,
        status: "Part time",
        totalSalaryRegular: this.formatPrice(regularHours * this.hourlyRate),
        totalSalaryExtra: this.formatPrice(extraHours * this.extraHourlyRate),
        total: this.formatPrice(
          regularHours * this.hourlyRate + extraHours * this.extraHourlyRate
        ),
      };
    }
  }
}

const employee1 = new FullTimeEmployee("joko", "male");
const employee2 = new PartTimeEmployee("siti", "female");

employee1.addWorkingHours(4);
employee1.addWorkingHours(2);
employee1.addWorkingHours(4);

employee2.addWorkingHours(2);
employee2.addWorkingHours(1);
employee2.addWorkingHours(4);

console.log(employee1.calculateSalary());
console.log(employee2.calculateSalary());

// no 2
// Create a shooting game between two player
// Each player has three properties : name, health and power
// Each player will take turns to shooting
// Before shooting, players get a chance to get random items (health +10 or power +10)
// The game will continue until one of the players has health < 0

class Player {
  name: string;
  health: number;
  power: number;

  constructor(name: string, health = 10, power = 10) {
    this.name = name;
    this.health = 100;
    this.power = 10;
  }

  hit(power: number) {
    this.health -= power;
  }

  useItem(item: { health: number; power: number }) {
    this.health += item.health;
    this.power += item.power;
  }

  showStatus() {
    return `${this.name} -> health: ${this.health} | Power: ${this.power}`;
  }
}

// kerjain ini dulu, dari pada 'useItem'
class ShootingGame {
  player1: Player;
  player2: Player;

  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    /*
    power = 10, health = 0
    power = 0, health = 10
    power = 10, health = 10
    power = 0, health = 0
    */
    const health = Math.random() < 0.5 ? 0 : 10;
    const power = Math.random() < 0.5 ? 0 : 10;
    return { health, power };
  }

  start() {
    while (this.player1.health > 0 && this.player2.health > 0) {
      // generate random item
      const item1 = this.getRandomItem();
      const item2 = this.getRandomItem();

      // menggunakan hasil random item
      this.player1.useItem(item1);
      this.player2.useItem(item2);

      // tampilin status sebelum hit
      console.log(this.player1.showStatus());
      console.log(this.player2.showStatus());

      // hit player lain
      this.player1.hit(this.player2.power);
      this.player2.hit(this.player1.power);

      // tampilin status setelah hit
      console.log(this.player1.showStatus());
      console.log(this.player2.showStatus());
    }

    if (this.player1.health <= 0) {
      return `${this.player2.name} WIN!`;
    } else {
      return `${this.player1.name} WIN!`;
    }
  }
}

const aceng = new Player("aceng");
const udin = new Player("udin");
const game = new ShootingGame(aceng, udin);

console.log(game.start());
