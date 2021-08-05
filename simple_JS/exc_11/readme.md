Events
1)a. Using first HTML - it has 2 elements with classes parent and children.
Add an event, that will show 'children' while hovering over 'parent'. (hint display:none)
Add a second event , so after hovering out off element, hides 'children' element again.
(do not hide all elements at once)
1)b. Passing parameters, .this.
Modify recent events, so that hiding 'chindren' elements, would be executed by 'hideChindrenElement()' function, and .this.
Add function within event.
2). Check the HTML for errors, then, move script tag to head section. Explain what happened.
Create an event DOMcontentLoaded for 'document' element, and move the code within. How things changed ?
Move again the script tag to the file end, and notice , how things changed.
3). Use HTML, add an event to the button.
Code this within DOMcontentLoaded event.
4). Use HTML with 3 buttons and 3 counters. 
Add an event to each button, so that counter increases after each click.Code this within DOMcontentLoaded event.
5). Use HTML ith 3 buttons and counter. Add an event, that each button will increase counter by one. Code this within DOMcontentLoaded event.
6). Use HTML with 3 div elements. Add one common event, that will change background colour, but only within a clicked element. Use .this. Code this within DOMcontentLoaded event.
Use var = randomColor = "#"+Math.floor(Math.random()).toString(16);
7). Use HTML with one div element. Add an event, that will show cursor location , while hovering over that element. Look up both global cursor location, and local cursor location. 
Code this within DOMcontentLoaded event.
8). Use HTML with nested elements with added events. Use method stopPropagation and stopImmediatePropagation, so that:
-events for 1 and 2 will work, but not for the 3
-events for 4 and 1 event for 5 element will work.
9). Use HTML with 2 elements, showing window size. 'window". Add an event, that will cause proper values will be shown, even after rescaling.
10). Use HTML. How to use element with 'b' id, within innerFuncOne, so to change its colour.