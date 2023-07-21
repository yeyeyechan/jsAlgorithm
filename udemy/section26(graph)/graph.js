class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertax(vertax) {
    if (!this.adjacencyList[vertax]) this.adjacencyList = [];
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
}
