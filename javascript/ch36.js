let [a, b = 3] = [1, 2];
console.log(a, b);

function urlParser(url) {
  let host, domain, path;

  const parsedUrl = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);

  console.log(parsedUrl);
}

urlParser("https://naver.com/test/abc/cdef");

console.log("test! please test!".match(/[\w]+/g));
console.log("test! please test!".match(/(\w+)!\s[\w]+\s(\w+)!/));
console.log(/(\w+)!\s[\w]+\s(\w+)!/.exec("test! please test!"));

function rest(a, ...b) {
  console.log(a, b);
}
rest(1, 2, 3);
rest(1, [2, 3]);

const { a1, b1 } = { a1: 1, b1: 2 };
const { a1: a2, b1: b2 } = { a1: 1, b1: 2 };
console.log(a1, b1);
console.log(a2, b2);
