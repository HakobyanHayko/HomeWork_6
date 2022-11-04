class CoffeeShop {
  constructor(name, menu) {
    this.name = name;
    this.menu = menu;
    this.orders = [];
  }
  addOrder(itemName) {
    for (let item of this.menu) {
      if (itemName === item.name) {
        this.orders.push(item);
        console.log("Order added!");
      }
    }
    if (!this.orders[0]) {
      console.log("This item is currently unavailable!");
    }
  }
  fulfillOrder() {
    if (this.orders.length) {
      console.log(`The ${this.orders.shift().name} is ready`);
    } else {
      console.log("All orders have been fulfilled");
    }
  }
  listOrders() {
    return this.orders.map((item) => item.name);
  }

  dueAmount() {
    if (this.orders.length === 0) return 0.0;
    return this.orders.map((item) => item.price).reduce((a, b) => a + b);
  }

  cheapestItem() {
    let cheapePrice = Math.min(...this.menu.map((item) => item.price));
    for (let item of this.menu) {
      if (item.price === cheapePrice) {
        return item.name;
      }
    }
  }

  drinkOnly() {
    return this.menu
      .filter((item) => item.type === "drink")
      .map((item) => item.name);
  }

  foodOnly() {
    return this.menu
      .filter((item) => item.type === "food")
      .map((item) => item.name);
  }
}

class Drinks {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.type = "drink";
  }
}
class Foods{
 constructor(name, price) {
  this.name = name;
  this.price = price;
  this.type = "food";
}
}
let myMenu = [
  new Drinks("tea", 2),
  new Drinks("coffee", 3),
  new Drinks("lemonade", 1),
  new Foods("omlet", 4),
  new Foods("steak", 10),
  new Foods("bacon", 8),
];

let ch = new CoffeeShop("Coffee House", myMenu);
ch.addOrder("lemonade");
ch.addOrder("bacon");
console.log(ch.dueAmount());
ch.fulfillOrder();
ch.fulfillOrder();
ch.fulfillOrder();
console.log(ch.foodOnly());
console.log(ch.drinkOnly());
console.log(ch.cheapestItem());
