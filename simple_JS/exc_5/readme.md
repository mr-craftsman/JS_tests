Regarding .this property.
1). Create an object "Car",  with properties and methods.
Properties: brand, colour, numberOfKm (initial val 0)
Methods: showCarInfo() - returns properties values ;
drive(km) - adds km to property. Use .this to implement this method.
2). Add to a prior Car object a property - an array of strings - dates of technical inspections.
Add it outside objects body.
Add two methods - one adding a new entry to an array, and other returning all tech. inspections. Use ".this".
3). Analyze code:
var calculator = {
    save: function (newA, newB) {
        this.a = newA;
        this.b = newB;
    }}
    Add methods sum and multiply of saved numbers.
4). Create 'stairs" object.
Add property "step" with value 0.
Add new methods - up() to increase a step by 1, down(), to decrease step by 1, showStep(), to show current step.