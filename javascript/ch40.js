const fruits = document.querySelector(".fruits");
const body = document.querySelector("body");

const handleClick = function (event) {
  // if (!event.target.matches(".fruits > li")) return;
  [...fruits.children].forEach((ele) => {
    ele.classList.toggle("active", ele === event.target);
  });
  event.stopPropagation();
};
body.addEventListener("click", (e) => console.log(e));
fruits.addEventListener("click", handleClick);

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
