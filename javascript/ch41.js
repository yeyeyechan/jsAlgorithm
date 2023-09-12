const intervalId = setInterval(
  (test) => {
    console.log(`${test}`);
  },
  500,
  "seo"
);

const timeout = () =>
  setTimeout(
    function (test) {
      clearInterval(intervalId);
    },
    5000,
    "seo"
  );

timeout();

const debounce = (callback, delay) => {
  let timeid;
  return function (...args) {
    if (timeid) clearTimeout(timeid);
    timeid = setTimeout(callback, delay, ...args);
  };
};
const $input = document.querySelector(".input");
const $msg = document.querySelector(".msg");

$input.oninput = debounce((e) => {
  $msg.textContent = e.target.value;
}, 500);

const trottle = (callback, delay) => {
  let timeid;
  return (...args) => {
    if (timeid) return;
    timeid = setTimeout(() => {
      callback(...args);
      timeid = null;
    }, delay);
  };
};
let trottlemsg = 0;
let normalmsg = 0;
const $trottlemsg = document.querySelector(".trottle");
const $normalmsg = document.querySelector(".normal");
const $container = document.querySelector(".container");

$container.addEventListener("scroll", () => {
  $normalmsg.textContent = ++normalmsg;
});
$container.addEventListener(
  "scroll",
  trottle(() => {
    $trottlemsg.textContent = ++trottlemsg;
  }, 500)
);
