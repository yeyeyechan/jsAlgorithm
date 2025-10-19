function test() {
  "use strict";
  console.log(this);
}
new test();
test();
