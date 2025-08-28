### What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: 
We can access an element by getElementById using the specefic id. And then we can keep it in a variable and manipulate it. And it is same for the getElementsByClassName it uses the assigned class to manipulate it.

querySelector / querySelectorAll can select tags or classes and can run a loop.


### How do you create and insert a new element into the DOM?
Ans: 
To create an element we need to write createElement and then the element tag. Then we can put classNAme and innerHtml then get the element by Id where we need to insert it. Then we just need append the new createdElement to the target element.


### What is Event Bubbling and how does it work?
Ans:
Event bubbling is a concept of where an event starts at the deepest element and then bubbles up to its parent element. When clicking an element the event got triggred to the root.



### What is Event Delegation in JavaScript? Why is it useful?
Ans:
Event deligation is a technique where a single eventListener is added to the parrent instade of each child. It is useful because it improves the memory performence. Also makes code easier to manage.
### What is the difference between preventDefault() and stopPropagation() methods?
Ans:
preventDefault() prevents the default action of an element. But it can still bubble up to its parents.

