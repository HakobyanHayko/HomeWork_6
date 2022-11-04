class Abstract {
  constructor() {
    if (this.constructor === Abstract) {
      throw new Error("Can't instantiate abstract class!");
    }
  }
  sayHi() {
    console.log("I am working");
  }
}
class A extends Abstract {}
let myObj = new A();
myObj.sayHi();
let myAbstract = new Abstract() ;
