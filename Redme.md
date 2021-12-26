1)Element.append()
->
The Element.append() method inserts a set of Node objects or DOMString objects after the last child of the Element. DOMString objects are inserted as equivalent Text nodes.

Differences from Node.appendChild():

Element.append() allows you to also append DOMString objects, whereas Node.appendChild() only accepts Node objects.
Element.append() has no return value, whereas Node.appendChild() returns the appended Node object.
Element.append() can append several nodes and strings, whereas Node.appendChild() can only append one node.

2)Element.prepend()
->
The Element.prepend() method inserts a set of Node objects or DOMString objects before the first child of the Element. DOMString objects are inserted as equivalent Text nodes.

3)Node.insertBefore()
->
The insertBefore() method of the Node interface inserts a node before a reference node as a child of a specified parent node.

If the given node already exists in the document, insertBefore() moves it from its current position to the new position. (That is, it will automatically be removed from its existing parent before appending it to the specified new parent.)

This means that a node cannot be in two locations of the document simultaneously.

4)//deleting elements
  document.querySelector('.btn--close-cookie').addEventListener('click',function(){
    message.remove();  it is imporant
  })


 //Modern Way TO Scrolling
   section_1.scrollIntoView({behavior:'smooth'}); just one line code just select section that want to scroll and add function of scrollIntoView


   Intersection Observer API
The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.

Historically, detecting visibility of an element, or the relative visibility of two elements in relation to each other, has been a difficult task for which solutions have been unreliable and prone to causing the browser and the sites the user is accessing to become sluggish. As the web has matured, the need for this kind of information has grown. Intersection information is needed for many reasons, such as:

Lazy-loading of images or other content as a page is scrolled.
Implementing "infinite scrolling" web sites, where more and more content is loaded and rendered as you scroll, so that the user doesn't have to flip through pages.
Reporting of visibility of advertisements in order to calculate ad revenues.
Deciding whether or not to perform tasks or animation processes based on whether or not the user will see the result.
