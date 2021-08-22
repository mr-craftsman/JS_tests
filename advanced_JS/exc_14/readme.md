Classes
Create environment(npm init, modules, webpack output js/out.js)
1). Vehicles.
Create an abstract class Vehicle. Create 3 objects : boat, car, plane, using proper classes inheriting from Vehicle. In those classes create methods, that will write in console log a typical action (like flying, floating). Cars cant fly - limit the use of methods to proper instances.

2). Create a "duck" class in js file. It`s an abstract class, that other classes will inherit from. Inside that class create a constructor and methods:
-constructor - that sest up duck type, 
ex. this.type="normal duck"
-quack() - console.log "quack quack"
-swim() - console.log "i swim"
-display() - console log "looks like [duck type]"
Create an object "duckling" and call all methods for it.

3). Using "duck" class, create another "wildDuck". Write a constructor for it, that will change ducks type properly.
Create an object "wildDuckling", call all methods for it.

4). Using "duck" class create another "mallardDuck", create a proper constructor with proper type, then an object "mallardDuckling", call all methods.

5). All 'ducks' now inherit form "duck" class. Add a method fly() to a proper class, thet console.logs "I am flying"

6). Using "duck" class creat another "rubberDuck".
Write a constructor, changing duck type.
Create an object "rubberDuckling", call all methds.
Then - change fly() method, so that this object console.logs "rubber ducks cant fly".

7). Create a form in HTML - to add products to a list. In a proper js ex07.js add class Food - an abstract class (with name, protein, carbs, fat, per grams).
Write code, so after filling in the form and clisking 'add', several things will happen :
-new product will be added (to ul id products)
-a new object will be created - using a class inheriting from Food. Above 250 kcal - "fastFood", below - "lowCaloriesFood"
-add his new object to 'foods' array, and write in in console.log.
Some calculations - 1g protein 4,5 kcal, 1g fat - 9,5 kcal, 1g carbs 5g kcal
ex. (name, protein, carbs, fat)
new FastFood('FrenchFries', 3.4, 41, 15)
(calculates calories)
Add several foods.
Create a method, to print all information about the product.

8). On creating horizontal and vertical navigation on a website.
Create an abstract class 'navGenerator', that will be used to create navigations.
While creating nav, pass as argument nav type and elements array.
Create two mehods in base class:
-getType() - showing nav type
-showItems() - showing nav elements

Vertical nav to be animated - add a method, that will console.log text : "animation navigation tpe : vertical"
let hNavGenerator  = new HorizontalNavGenerator("horizontal", ['start', 'about']);
let vNavGenerator  = new VerticalNavGenerator("vertical", ['home', 'contact']);