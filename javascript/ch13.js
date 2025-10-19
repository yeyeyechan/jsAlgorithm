var x = 3;

function bar() {
  var x = 6;
  foo();
}
function foo() {
  console.log(x);
}
bar();
foo();
