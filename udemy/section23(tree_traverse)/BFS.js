class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  BFS() {
    let root = this.root;
    let queue = [];
    let visited = [];
    queue.push(root);
    while (queue.length) {
      let visit = queue.shift();
      visited.push(visit.value);
      if (visit.left) queue.push(visit.left);
      if (visit.right) queue.push(visit.right);
    }
    return visited;
  }
  preOrder() {
    let root = this.root;
    let visited = [];
    function traverse(node) {
      visited.push(root);
      if (root.left) traverse(root.left);
      if (root.right) traverse(root.right);
    }
    traverse(root);
  }
  preOrder() {
    let visited = [];
    function traverse(root) {
      visited.push(root.value);
      if (root.left) traverse(root.left);
      if (root.right) traverse(root.right);
    }
    traverse(this.root);
  }

  postOrder() {
    let visited = [];
    function traverse(root) {
      if (root.left) traverse(root.left);
      if (root.right) traverse(root.right);
      visited.push(root);
    }
    traverse(this.root);
    return visited;
  }

  inOrder() {
    let visited = [];
    function traverse(root) {
      if (root.left) visited.push(root.left);
      visited.push(root);
      if (root.right) visited.push(root.right);
    }
    traverse(this.root);
    return visited;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS());
