Tree search
1). Using constructor, create a 'Tree' function, with 'type' property - holding tree type.
Create 3 different instances with Tree constructor.
Add method 'bloom()' to the constructor, with return text log 'I am blooming'.
2). Searchind DOM - without using DOMContentLoaded.
Create a separate function for every subpoint.
a). Getting information from data attribute:
-find 'menu' id element
-create a function getDataInfo(element), and pass to it the element found above
-creata a new array within function, and fill that array with values from data-info attribute of every 'li' element. (hint: the li elements are children of menu)
-return that array with values
b). Looking up elements by id:
-find element with 'main-container' id.
-create a function getElementClass(element), and pass to it as argument, the element found above
-return an array consisting of class names of this element
c). Looking up elements by class:
-find elements with 'pink-colour' class
-create a function getElementTex(element), and pass found elements to it.
-return the text contained in this element
d). Looking up element by class:
-find element with 'images' class
-create a function getElementAlt(element), and pass to it elements found above
-create an array in function, and fill it with values from 'alt' attributes form images. Get those attributes from elements passed as arguments.
e). Looking up element by class:
-find element with 'my-link' class
-create a function getElementHref(element), and pass to it found elements as argument
-create an array in function, and fill it with values you got from href link attributes. Get those attributes from elements passed as arguments.