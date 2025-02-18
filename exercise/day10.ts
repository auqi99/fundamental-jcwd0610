// no 1
/*
    Write a JavaScript function called phoneNumber that takes a single argument input. 
    The function is intended to format a phone number. It checks the input to ensure 
    it meets certain criteria and then proceeds with formatting. The formatting 
    includes replacing the leading "0" with "62" and creating a template in the 
    format "(xxxx)-xxxx-xxxxx" where each "x" represents a digit from the input. The 
    function returns the formatted phone number.

    - Check if the input is of type "string." If it's not, return "Invalid phone number."
    - Check if the length of the input is exactly 12 characters. If it's not, return "Invalid phone number."
    - Make sure the input all are numeric 0-9
    ex : 
    input = "085211155555"
    output = "(6285)-2111-55555" 
*/

function phoneNumber(input: string) {
  if (input.length !== 12) {
    return "Invalid phone number";
  }

  for (let i = 0; i < input.length; i++) {
    if (input[i] < "0" || input[i] > "9") {
      return "Invalid phone number";
    }
  }

  input = "62" + input.slice(1); // 6285211155555

  let template = "(xxxx)-xxxx-xxxxx";

  const splitInput = input.split("");

  splitInput.forEach((item) => {
    template = template;
    template = template.replace("x", item);
  });

  return template;
}

console.log(phoneNumber("085211155555"));

// no 2
/*
    buat parent class Product
    constructor = nama, berat, price,stok

    buat child class dari produk yaitu Buku dan Pakaian 
    constructor = super, data unik dari buku dan pakaian 

    buat class OnlineShop
    constructor = products dan cart (private)
    method : 
        - tambahProduk(produk): memasukkan produk ke arr products, kalau sudah ada dalam arr products
            return produk sudah ada dalam toko

        - tambahKeKeranjang(produk, jumlah) : memasukkan produk yang di pilih user ke arr cart. Harus validasi
            sudah ada apa belum dalam cart dan juga validasi ada tidak produknya di catalog, kalau yang di masukkan 
            melebihi stok return stok tidak mencukupi dan tampilkan juga stoknya

        - transaksi(uangUser, jarak) : menampilkan total pembayaran, beserta ongkir. example: 1km * 2000.
            tampilkan juga kembaliannya dan kosongkan cart jika berhasil melakukan transaksi. Harus ada validasi
            untuk uangUser tidak boleh kurang dari total pembayaran.

        - showCatalog : menampilkan isi catalog dari toko

        - showCart : menampilkan isi cart user
*/

class Product {
  name: string;
  weight: number;
  price: number;
  stock: number;

  constructor(name: string, weight: number, price: number, stock: number) {
    this.name = name;
    this.weight = weight;
    this.price = price;
    this.stock = stock;
  }
}

class Buku extends Product {
  author: string;

  constructor(
    name: string,
    weight: number,
    price: number,
    stock: number,
    author: string
  ) {
    super(name, weight, price, stock);
    this.author = author;
  }
}

class Pakaian extends Product {
  size: string;
  color: string;

  constructor(
    name: string,
    weight: number,
    price: number,
    stock: number,
    size: string,
    color: string
  ) {
    super(name, weight, price, stock);
    this.size = size;
    this.color = color;
  }
}

class OnlineShop {
  products: Product[];
  cart: { qty: number; product: Product }[];

  constructor() {
    this.products = [];
    this.cart = [];
  }

  addProduct(product: Product) {
    // cek dulu produk sudah ada di dalam this.products atau belum
    const existingProduct = this.products.find((p) => p.name === product.name);
    // kalau sudah ada return "produk sudah ada di katalog"
    if (existingProduct) {
      return "Product already exist";
    }
    // kalo misalnya ga ada, masukin data produknya ke this.products
    this.products.push(product);
    // return tambah produk sukses
    return "Add product success";
  }
  addToCart(qty: number, product: Product) {
    // cek dulu produk nya ada ga di katalog
    const availableProduct = this.products.find((p) => p.name === product.name);
    // kalo misalnya ga ada, return 'product not found'
    if (!availableProduct) {
      return "Product not found";
    }
    // kalo misalnya ada di katalog,
    // cek lagi produknya di cart sudah ada apa belum
    const cartItem = this.cart.find((c) => c.product.name === product.name);
    // kalo  misalnya sudah ada di dalam cart
    if (cartItem) {
      // cek lagi stok produknya, apakah cukup dengan qty yg dimasukin
      if (availableProduct.stock >= qty) {
        // kalo cukup, stok produknya dikurangi sama qty nya.
        availableProduct.stock -= qty;
        // update qty product tsb di dalam cart ny
        cartItem.qty += qty;

        return "Add to cart success";
      } else {
        // kalo misalnya stoknya tidak cukup, return "stok tidak cukup"
        return {
          message: "Stok tidak cukup",
          remainingStock: availableProduct.stock,
        };
      }
    } else {
      if (availableProduct.stock >= qty) {
        this.cart.push({ qty, product });
        availableProduct.stock -= qty;
        return "Add to cart success";
      } else {
        return {
          message: "Stok tidak cukup",
          remainingStock: availableProduct.stock,
        };
      }
    }

    // kalo misalnya produk belum ada di dalam cart
    // cek lagi stok produknya, apakah cukup dengan qty yg dimasukin
    // kalo cukup, stok produknya dikurangi sama qty nya.
    // kalo misalnya stoknya tidak cukup, return "stok tidak cukup"
  }

  showCard() {
    let total: number = 0;

    this.cart.forEach((c) => {
      total += c.product.price * c.qty;
    });

    return {
      cart: this.cart,
      totalProduct: this.cart.length,
      totalPrice: total,
    };
  }
  showCatalog() {
    return {
      catalog: this.products,
      totalProduct: this.products.length,
    };
  }

  transaction(userMoney: number, distance: number) {
    // totalin dulu totalPrice sama totalWeight
    let totalPrice: number = 0;
    let totalWeight: number = 0;

    this.cart.forEach((c) => {
      totalPrice += c.product.price * c.qty;
      totalWeight += c.product.weight * c.qty;
    });

    let costPerKm: number;

    if (distance < 2) {
      costPerKm = 2000;
    } else if (distance >= 2 && distance <= 5) {
      costPerKm = 3000;
    } else {
      costPerKm = 5000;
    }

    const ongkir = distance * costPerKm;
    const total = totalPrice + ongkir;

    if (userMoney < total) {
      return { message: "Uang gak cukup!", ongkir, totalPrice, total };
    }

    this.cart = [];

    return {
      message: "Transaksi sukses",
      total,
      ongkir,
      kembalian: userMoney - total,
    };
  }
}

const buku1 = new Buku("Cara jago ngoding", 0.4, 80_000, 10, "Aceng");
const pakaian1 = new Pakaian("Kaos Oblong", 0.2, 100_000, 8, "XL", "Blue");

const tokopaedi = new OnlineShop();
console.log(tokopaedi.addProduct(buku1));
console.log(tokopaedi.addProduct(pakaian1));
console.log(tokopaedi.showCatalog());
console.log(tokopaedi.addToCart(2, pakaian1));
console.log(tokopaedi.addToCart(1, buku1));
console.log(tokopaedi.showCatalog());
console.log(tokopaedi.transaction(350_000, 6));
