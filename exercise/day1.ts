// no 1
let length: number = 5;
let width: number = 3;
let area: number = length * width;

console.log(area);

// no 2
let l: number = 5;
let w: number = 3;
let p: number = 2 * (l + w);

console.log(p);

// no 3
const radius: number = 14; // input
const diameter: number = 2 * radius;
const circumference: number = diameter * 3.14;
const area1: number = 3.14 * radius * radius;

console.log(
  `diameter: ${diameter} circumference: ${circumference} area: ${area1}`
);

// no 4
const segitiga: number = 180;
const sudutA: number = 80;
const sudutB: number = 65;
console.log(segitiga - (sudutA + sudutB));

// no 5
const hari: number = 366;
const tahun: number = Math.floor(hari / 365);
const bulan: number = Math.floor((hari % 365) / 30);
const tanggal: number = Math.floor((hari % 365) % 30);
console.log(`${tahun} tahun, ${bulan} bulan, ${tanggal} hari`);

// no 6
const tanggal1: Date = new Date("2024-11-31");
const tanggal2: Date = new Date("2024-11-12");
const bedaTanggal: number = Math.abs(tanggal1.getTime() - tanggal2.getTime());
const bedaHari = Math.round(bedaTanggal / (1000 * 3600 * 24));

console.log(`perbedaan hari tanggal 1 & tanggal 2 = ${bedaHari}`);
