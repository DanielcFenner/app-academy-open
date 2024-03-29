// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(head = null) {
    this.head = head;
  }

  addToTail(val) {
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      return this.head;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }

    curr.next = newNode;
    return this.head;
  }

  listLength() {
    // Returns the length of the list
    let length = 0;
    let curr = this.head;
    while (curr) {
      length++;
      curr = curr.next;
    }
    return length;
    // Implement in O(n) and in O(1) time complexity
  }

  sumOfNodes() {
    // Returns the sum of the values of all the nodes
    let sum = 0;
    let curr = this.head;
    while (curr) {
      sum += curr.value;
      curr = curr.next;
    }
    return sum;
    // Write your hypothesis on the time complexity of this method here
  }

  averageValue() {
    // Returns the average value of all the nodes
    let sum = 0;
    let length = 0;
    let curr = this.head;
    while (curr) {
      sum += curr.value;
      length++;
      curr = curr.next;
    }

    return sum / length;
    // Write your hypothesis on the time complexity of this method here
  }

  findNthNode(n) {
    // Returns the node at the nth index from the head
    let curr = this.head;
    while (n !== 0) {
      n--;
      curr = curr.next;
    }
    return curr;
    // Write your hypothesis on the time complexity of this method here
  }

  findMid() {
    // Returns the middle node
    let normal = this.head;
    let twice = this.head;
    while (twice.next && twice.next.next) {
      normal = normal.next;
      twice = twice.next.next;
    }
    return normal;

    // Implement this as a singly linked list then as a doubly linked list
    // How do the implementation for singly and doubly vary if at all?
    // Write your hypothesis on the time complexity of this method here
  }

  reverse() {
    // Returns a new reversed version of the linked list by adding to tail
    // Write your hypothesis on the time complexity of this method here
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    let curr = this.head;
    let prev = null;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
    return this;
    // Write your hypothesis on the time complexity of this method here
  }
}

class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(val) {
    let newNode = new DoublyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this.head;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;

    return this.head;
  }

  findMid() {
    // Returns the middle node
    // Implement this as a singly linked list then as a doubly linked list
    // How do the implementation for singly and doubly vary if at all?
    let normal = this.head;
    let twice = this.head;
    while (twice.next && twice.next.next) {
      normal = normal.next;
      twice = twice.next.next;
    }
    return normal;
    // Write your hypothesis on the time complexity of this method here
  }

  reverse() {
    // Returns a new reversed version of the linked list
    // Write your hypothesis on the time complexity of this method here
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    let curr = this.head;
    let prev = null;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      curr.prev = next;
      prev = curr;
      curr = next;
    }
    this.head = prev;
    return this;
    // Write your hypothesis on the time complexity of this method here
  }
}

module.exports = {
  SinglyLinkedNode,
  SinglyLinkedList,
  DoublyLinkedNode,
  DoublyLinkedList,
};
