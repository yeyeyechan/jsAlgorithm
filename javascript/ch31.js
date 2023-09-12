const regtest = /is/i;
const test = "r is well";
console.log(regtest.test(test));

const newregtest = new RegExp(/is/i);

console.log(newregtest.test(test));

const count = (str, chr) => str.match(new RegExp(chr, "gi"));
const count3 = (str, chr) => str.match(new RegExp(chr, "g"));
const count2 = (str, chr) => new RegExp(chr, "gi").exec(str);
console.log(count("Is is is", "is"));
console.log(count2("Is is is", "is"));
console.log(count3("Is is is", "is"));

const a = "A AAB AAA A";
console.log(a.match(new RegExp("a{1,2}", "gi")));
const regexp1 = /a{1,2}/gi;
const regexp2 = /a{1}/gi;
const regexp3 = /a{1,}/gi;
const regexp4 = /a+/gi;
const regexp5 = /a?/gi;
console.log(a.match(regexp1));
console.log(a.match(regexp2));
console.log(a.match(regexp3));
console.log(a.match(regexp4));
console.log(a.match(regexp5));

const b = "color colour";
const regexp6 = /colou?r/g;
console.log(b.match(regexp6));

const regexp7 = /A|B/gi;
console.log(a.match(regexp7));

const regexp8 = /A+|B+/gi;
const regexp9 = /[AB]+/gi;
const c = " A AAB BAA AB";
console.log(c.match(regexp8));
console.log(c.match(regexp9));

const d = "122,123";
console.log(d.match(/[0-9,]+/gi));
console.log(d.match(/[\d,]+/gi));
console.log(d.match(/[\D,]+/gi));
const e = "sdf123_&*^";
console.log(e.match(/[\w,]+/gi));
console.log(e.match(/[\W,]+/gi));

const f = "sfd 123 df";

console.log(f.match(/[^\D]+/gi));
console.log(f.match(/^[\D]+/gi));
console.log(f.match(/[\D]+$/gi));

const url = "https://naver.com";
console.log(/^https?:\/\//.test(url));
// 왜지? console.log(/^[https]:\/\//.test(url));
console.log(/^(http|https):\/\//.test(url));

const targetnum = " 1231d23";
console.log(/^[\d]+$/g.test(targetnum));
console.log(/^\d+$/g.test(targetnum));
console.log(/^\s+/.test(targetnum));
console.log(/^[\s]+/.test(targetnum));
console.log(/^[0-9a-zA-Z]{4,9}$/.test(targetnum));
const phone = "010-1231-1231";
console.log(/^\d{3}-[0-9]{4}-[0-9]{4}/.test(phone));
const email = "xamev123@gmail.com";
console
  .log
  ///^[0-9a-zA-Z]([_-\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([_-\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(
  //  email
  // )
  ();
const str = "!@#$@#$@%DSFDSFDSF";
console.log(str.replace(/[^0-9A-Za-z]/gi, ""));
