class Node {
  constructor(ele) {
    this.ele = ele;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(ele) {
    const newNode = new Node(ele);
    if (this.head === null) this.head = newNode;
    else {
      let current = this.head;
      while (current.next) current = current.next;
      current.next = newNode;
      this.length++;
    }
  }
  removeAt(position) {
    if (position >= 0 && position < this.length) {
      let current = this.head,
        previous,
        index = 0;
      if (position === 0) {
        this.head = this.head.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.length--;
      return current.ele;
    } else {
      return null;
    }
  }
  insert(ele, position) {
    const newNode = new Node(ele);
    let current = this.head,
      previous,
      index = 0;
    if (position > -1 && position < this.length) {
      if (position === 0) {
        this.head = newNode;
        this.head.next = current;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = newNode;
        newNode.next = current;
      }
      this.length++;
      return true;
    } else {
      return false;
    }
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
      str += `  ${current.ele}`;
      current = current.next;
    }
    return str;
  }
  indexOf(ele) {
    let current = this.head,
      index = 0;
    while (current) {
      if (current.ele === ele) return index;
      index++;
      current = current.next;
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
}

const linkedList = new LinkedList();
const names = ["jack", "mike", "john", "mikey", "jay"];
names.forEach((ele) => {
  linkedList.append(ele);
});
console.log(linkedList.toString());
