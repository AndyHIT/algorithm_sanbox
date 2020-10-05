// Function: push, pop, peek, size

const Stack = function () {
  this.count = 0;
  this.values = {};

  this.push = (item) => {
    this.values[this.count] = item;
    this.count++;
  };

  this.pop = () => {
    if (this.count === 0) return undefined;
    this.count--;
    delete this.values[this.count];
    return this.values;
  };

  this.peek = () => {
    return this.values[this.count - 1];
  };

  this.size = function () {
    return this.count;
  };
};

let myStack = new Stack();
myStack.push("a");
myStack.push("b");
myStack.push("c");
myStack.push("d");
console.log(myStack.size());
myStack.pop();
console.log(myStack.peek());
console.log(myStack);
