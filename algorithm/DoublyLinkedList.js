class Node {
  constructor(ele) {
    this.ele = ele;
    this.prev = null;
    this.next = null;
  }
}
class DoublyLinkedList {
  constructor() {
    (this.head = null), (this.tail = null);
    this.length = 0;
  }
  insert(ele, position) {
    let current = this.head,
      index = 0,
      previous;
    const newNode = new Node(ele);
    if (position > -1 && position < this.length) {
      if (position === 0) {
        if (this.head) {
          this.head = newNode;
          this.head.next = current;
          current.prev = this.head;
        } else {
          this.head = newNode;
          this.tail = newNode;
        }
      } else if (position === this.length) {
        current = this.tail;
        current.next = newNode;
        newNode.prev = current;
        this.tail = newNode;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = newNode;
        newNode.prev = previous;
        newNode.next = current;
        current.prev = newNode;
      }
      this.length++;
      return true;
    } else {
      return false;
    }
  }
  remove(position) {
    let current = this.head,
      previous,
      index = 0;
    if (position > -1 && position < this.length) {
      if (position === 0) {
        this.head = current.next;
        if (this.length === 1) {
          this.tail = nul;
        } else {
          this.head.prev = null;
        }
      } else if (position === this.length - 1) {
        current = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
        current.next.prev = previous;
      }
      this.length--;
      return current.ele;
    } else {
      return null;
    }
  }
  append(ele) {
    const newNode = new Node(ele);
    let current;
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }
  indexOf(ele) {
    let current = this.head,
      index = 0;
    while (current) {
      if (current.ele === ele) return index;
      index++;
    }
    return -1;
  }
  remove(ele) {
    let index = this.indexOf(ele);
    return this.remove(index);
  }
  getHead() {
    return this.head;
  }
  getTail() {
    return this.tail;
  }
  size() {
    return this.length;
  }
  isEmpty() {
    return this.length === 0;
  }
  toString() {
    let current = this.head,
      str = "";
    while (current) {
      str += ` ${current.ele}`;
      current = current.next;
    }
    return str;
  }
}
const linkedList = new DoublyLinkedList();
const names = ["jack", "mike", "john", "mikey", "jay"];
names.forEach((ele) => {
  linkedList.append(ele);
});
console.log(linkedList.toString());
