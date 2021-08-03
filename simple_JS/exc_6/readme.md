Constructor and its use.
1). Create a "Basket" constructor. 
Then use it to create an object, with properties:
-products - an array of strings
-sum - total sum of money.
Enhance the constructor by adding methods :
-addProduct(name, price) //string, number
Put the data as an object in array this.products
-showBasket() - to show all products with prices as an arrya, and a sum of money to pay.
Test your object.
2). Verify and fix constructor:
var Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + " is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + " changes name to " + newname);
    this.name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};

//function call
var robot = new Robot("Radowid");
robot.sayHi("Rujewit");
robot.changeName("Roksana");
robot.isFunctional = false;
var robotTwo = new Robot("Janek");
robot.sayHi("Rujewit");
robotTwo.sayHi("Rujewit");
robot.fixIt();
robot.sayHi("Rujewit");

3). Create Calculator constructor, with no data.
Each new object has to have an empty array holding history of all operations.
Then, using prototype, add new methods:
-add(num1, num2) - metod adds 2 vars, and returns solution. Operations array will get info string, like 'added num1 and num2, got result res'
-multiply(num1, num2) multiplies and returns result, adds info string to op.array, similar to above.
-substract(num1, num2) -as above, but substraction.
-divide(num1, num2)- as above but division.
-showOperations() - print out all saved operation data.
-clearOperations() - to clear info array.
hint - using .this helps