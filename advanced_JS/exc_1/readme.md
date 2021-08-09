Simple silider.
1).As a styled list - no visual styles, added H and W to display one image, all images have same H and W, all except one image are invisible.
2). Use DomContentLoaded, add next, prev and all list elements variables.
Add num var, to keep image index, and show present image index, Check trough console.
3). Adding slider class invisible, add to zero index element a class visible, use proper vars - array of list elements, var, that shows visible element.
First image should be visible after displaying HTML.
4). Add events to buttons, first just showing console test.
5). In the event responsible for showing next image, do:
-remove visivle class from current image
-increment image variable by one
-add to next visible image , a visible class. Use proper variables.
6). Do the same for previous image button.
7). Check the slider for errors.
8). Solve errors like, disappearing of images, because the variable has no restrains (less than 0, or exceeding array length). Solution like : if to : index less than 0 - last element; number equal or more than number of elements -> 0 .