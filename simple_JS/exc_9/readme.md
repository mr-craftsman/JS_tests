Using DOM elements.
1). Data property.
Create a function getDatasInfo(elements), pass to it an argument a 'links' array type variable.
Create a new array with function. Fill it with values from 'data' property from each 'li' element.
Return this array.
2). Read through HTML document, and JS, with DOM elements.
Show in console all those variables, check witch is an array. For arrays, iterate through them, show each tag and class.
3). Show in console all innerHTML and outerHTML for elements of 'blocks' variable. Comment on their differences.
Set innerHTML value to 'new div value block class'.
Check how HTM changed.
4). Find element with id mainFooter.
Create a function getId(element), pass to it a new found element. In that function get id`s name and return it.
5). Create function getTags(elements), pass an argument to it - a var childElements /array.
Create new array within function, fill it with tag names , from elements in childElements. 
Return this array.
6). Create getClassInfo(element), pass to it as argument- a 'banne' variable.
Return an array with a list of classes, from this passed argument.
7).Find all li elements, that are in  nav tag.
Create a function setDataDirection(elements), to which pass all found elements as an argument.
In that function give every li element a property : 'data-direction=top', but only to those, that do not have that attribute yet.