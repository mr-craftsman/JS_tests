String interpolation.
Environment.
1). In js file create whoAreYou(), that returns a string, using a passed object 'person'.
Like:
JS
const person = {
  name: "Vlad",
  lastName: "Dracula",
  yearOfBirth: 1431,
  proffesion: "Lord of Wallachia"
};
whoAreYou(person);
HTML
My name is Vlad Drăculea.
I am 586 years old.
My proffesion is Lord of Wallachia

2). In js file create 2 vars that will contain 2 random numbers. Using template strings, console.log their sum.

3). In js file add your name to a variable, then console.log it with a surname.

4). In js file create a function, that will console.log a text in several lines.

5). In js file create a button, and console.log a text. (example below)
HTML
It`s a button.
Its total width is 140px.
It says : "Send message"
JS
const button = {
  value: "Send message",
  idName: "sendMsg",
  width: "100px",
  padding: "20px",
}