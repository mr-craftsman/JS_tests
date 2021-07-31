Basic object manipulation in JS.
1). create a random object, like a Country, with set of datafields like -capital(string),-population(number),-president(string),-primeMinisters(array of strings).
Iterate and show all props of this object.
2). create an object timeMachine, add props :
shape(string), model(string), method run(date,place)
Show all properties in a console, and run the method.
3). create object - book.
Add properties : title, author, numberOfPages
Show properties in a console.
 4). create object - person.
 Add properties : name, age, sayHello() - wrtiting "hello" strings.
 Show all properties in console and run method.
 5). create object - a recipe.
 Add properties - title(string), servings(number), ingredients(array of strings).
 Add field "ingredients" outside objects body.
 Show all this in console.
 6). create an object:
 var movie = {
    director: "Peter Jackson",
    writers: [" J.R.R. Tolkien ", "Fran Walsh", "Philippa Boyens", "Peter Jackson"],
    stars: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    country: "New Zealand | USA",
    budget: "$93,000,000",
    imdbPoints: 8.8,
    year: 2001,
    time: "2h 58 min",
    category: " Adventure, Drama, Fantasy"
}
Then use for loop to iterate all info in console.
7). create an object
var animals = [
    {
        type: "cat",
        breed: "persian",
        name: "Tiberius",
        health: [
            {
                date: "2012-03-03",
                visitType: "grafting"
            },
            {
                date: "2015-06-23",
                visitType: "bowel surgery"
            }
        ]
    },
    {
        type: "Guinea pig",
        breed: "The Rex",
        name: "Marko",
        health: [
            {
                date: "2015-12-04",
                visitType: "grafting"
            },
            {
                date: "2016-03-15",
                visitType: "ear cleaning"
            }
        ]
    }

]

use for and for..in loops to write all info in a console.

8). add an object:
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

Then check, if spoon exists.