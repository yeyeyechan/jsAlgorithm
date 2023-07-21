class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertax) {
    if (!this.adjacencyList[vertax]) this.adjacencyList[vertax] = [];
  }
  addEdge(vertax1, vertax2) {
    this.adjacencyList[vertax1].push(vertax2);
    this.adjacencyList[vertax2].push(vertax1);
  }
  removeEdge(vertax1, vertax2) {
    this.adjacencyList[vertax1] = this.adjacencyList[vertax1].filter(
      (v) => v !== vertax2
    );
    this.adjacencyList[vertax2] = this.adjacencyList[vertax2].filter(
      (v) => v !== vertax1
    );
  }
  removeVertax(vertax) {
    while (this.adjacencyList[vertax].length) {
      const adjacencyVertax = this.adjacencyList[vertax].pop();
      this.removeEdge(adjacencyVertax, vertax);
    }
    delete this.adjacencyList[vertax];
  }
  depthFirstRecursive(vertax) {
    let check = {};
    let visited = [];
    const adjacencyList = this.adjacencyList;
    (function DFS(vertex) {
      if (!vertex) return null;
      check[vertex] = true;
      visited.push(vertex);
      adjacencyList[vertex].forEach((v) => {
        if (!check[v]) DFS(v);
      });
    })(vertax);
    console.log(visited);
    return visited;
  }
  depthFirstIterative(vertex) {
    let visited = [];
    let check = {};
    let ready = [vertex];
    while (ready.length) {
      let current = ready.pop();
      if (!check[current]) {
        check[current] = true;
        visited.push(current);
        this.adjacencyList[current].forEach((v) => {
          if (!check[v]) {
            ready.push(v);
          }
        });
      }
    }
    console.log(visited);
    return visited;
  }
  breadthFirst(vertex) {
    let result = [];
    let visited = {};
    let queue = [vertex];
    visited[vertex] = true;
    while (queue.length) {
      let vt = queue.shift();
      result.push(vt);
      this.adjacencyList[vt].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          queue.push(v);
        }
      });
    }
    console.log(result);
    return result;
  }
}
let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
g.breadthFirst("A");
