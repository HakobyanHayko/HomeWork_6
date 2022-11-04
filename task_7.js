class Product {
  constructor(name, type, price) {
    this.name = name;
    this.type = type;
    this.price = price;
  }
}

class ShoppingCart {
  addProduct(product) {
    if (!this[product.name]) {
      this[product.name] = [product];
    } else {
      this[product.name].push(product);
    }
  }

  removeProduct(product) {
    delete this[product.name];
  }

  totalPrice() {
    let price = 0;
    let itemsArr = [];
    for (let key in this) {
      this[key].forEach(function (item) {
        itemsArr.push(item);
      });
    }
    price = itemsArr.map((item) => item.price).reduce((a, b) => a + b);
    if (itemsArr.length >= 5) price *= 0.9;
    for (let key in this) {
      if (this[key].length > 3) {
        price = price - Math.floor(this[key].length / 3) * this[key][0].price;
      }
    }
    return price.toFixed(2);
  }
  replace(productName, replacementProduct) {
    for (let key in this) {
      this[key].forEach((item) => {
        if (item.name === productName) {
          this.removeProduct(item);
          this.addProduct(replacementProduct);
        }
      });
    }
  }
}
let p1 = new Product("apple", "food", 5);
let p2 = new Product("banana", "food", 10);
let p3 = new Product("coffee", "drinc", 6);
let p4 = new Product("bread", "food", 20);
let p5 = new Product("phone", "electronics", 400);
let myCart = new ShoppingCart();
myCart.addProduct(p1);
myCart.addProduct(p1);
myCart.addProduct(p1);
myCart.addProduct(p1);
myCart.addProduct(p1);
myCart.addProduct(p1);
myCart.addProduct(p1);
myCart.addProduct(p2);
myCart.addProduct(p3);
myCart.addProduct(p4);
myCart.addProduct(p5);
myCart.addProduct(p2);
console.log(myCart.totalPrice());
