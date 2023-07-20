class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (node.value === current.value) return undefined;
        if (node.value < current.value) {
          if (!current.left) {
            current.left = node;
            return this;
          }
          current = current.left;
        } else if (node.value > current.value) {
          if (!current.right) {
            current.right = node;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
  find(val) {
    if (!this.root) return false;
    else {
      let current = this.root;
      let found = false;
      while (current && !found) {
        if (current.value === val) return current;
        else if (current.value < val) current = current.right;
        else current = current.left;
      }
      return false;
    }
  }
}

let bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(2);
bst.insert(7);
bst.insert(11);
console.log(bst.insert(16));
