More about functions.
1).Read and test function, and comment how it works
function theOne() {
    var theVariableOne = 1;
    function theTwo() {
        console.log(theVariableOne);
        var theVariableTwo = 3;
    }
    theTwo();
    console.log(theVariableTwo)
}
theOne()
2). Read and test function, comment how it works
function sortArray() {
    var points = [41, 3, 6, 1, 114, 54, 64];
    points.sort(function (a, b) {
        return a - b;
    });
    return points;
}
sortArray();
console.log(sortArray());
3). Read and test function on different ones.
function callOtherFunction(nameOfFunction) {
    console.log("Hi, I`m 'callOtherFunction' and I call function put as my parameter.");

    var randomNumber1 = Math.random() * 20;
    var randomNumber2 = Math.random() * 10;
    nameOfFunction(randomNumber1, randomNumber2);
}
console.log("Call sum:");
callOtherFunction(function (a, b) {
    console.log("First num:", a);
    console.log("Second num", b)
    console.log("Result", a + b)
})

console.log("Call multiply:");
callOtherFunction(function (a, b) {
    console.log("First num:", a);
    console.log("Second numa", b)
    console.log("Result", a * b)
})

console.log("Call division:");
callOtherFunction(function (a, b) {
    console.log("First num:", a);
    console.log("Second num", b)
    console.log("Result", a / b)
})

3). Create a function to return "Hi" string.
Test out different ways to call function:
-before defining, then after defining.
Comment on this.
Create second function, ex .."there" string.
Write it as an expression. (definition to a variable)
Test it, comment on it.