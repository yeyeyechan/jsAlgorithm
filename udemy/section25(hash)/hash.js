class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(val) {
    const PRIME = 31;
    let total = 0;
    for (let i = 0; i < Math.min(val.length, 100); i++) {
      total = (total * PRIME + val[i].charCodeAt(0) - 96) % this.keyMap.length;
    }
    return total;
  }
  set(key, val) {
    let idx = this._hash(key);
    if (!this.keyMap[idx]) this.keyMap[idx] = [];
    this.keyMap[idx].push([key, val]);
  }

  get(key) {
    let idx = this._hash(key);
    for (let i = 0; i < this.keyMap[idx].length; i++) {
      if (this.keyMap[idx][i][0] === key) return this.keyMap[idx][i][1];
    }
    return undefined;
  }
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1]))
            valuesArr.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valuesArr;
  }
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0]))
            keysArr.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keysArr;
  }
}
let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("purple", "#DDA0DD");
ht.set("violet", "#DDA0DD");

ht.keys().forEach(function (key) {
  console.log(ht.get(key));
});
