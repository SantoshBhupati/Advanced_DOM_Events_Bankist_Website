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
