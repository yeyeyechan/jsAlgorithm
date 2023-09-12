const test1 = Promise.resolve([1, 2, 3]);
test1.then(console.log);

const test2 = new Promise((resolve) => resolve([1, 2, 3]));
test2.then(console.log);

const test3 = Promise.reject([1, 2, 3]);
test3.catch(console.log);

const test4 = new Promise((_, reject) => reject([1, 2, 3]));
test4.catch(console.log);

const request1 = () => new Promise((resolve) => setTimeout(resolve(1), 3000));
const request2 = () => new Promise((resolve) => setTimeout(resolve(1), 2000));
const request3 = () => new Promise((resolve) => setTimeout(resolve(1), 1000));

const result = [];

request1()
  .then((data) => {
    result.push(data);
    return request2();
  })
  .then((data) => {
    result.push(data);
    return request3();
  })
  .then((data) => {
    result.push(data);
    console.log(result);
  });

Promise.all([request1(), request2(), request3()]).then(console.log);
Promise.all([1, 2, 3]).then(console.log);

const request4 = () => new Promise((_, reject) => setTimeout(reject(3), 3000));
const request5 = () => new Promise((_, reject) => setTimeout(reject(3), 2000));
const request6 = () => new Promise((_, reject) => setTimeout(reject(3), 1000));
Promise.allSettled([request4(), request5(), request6()]).then(console.log);

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch("https://jsonplaceholder.typicode.com/todos/sdf")
  .then((response) => {
    if (response.status !== 200) throw new Error(response.statusText);

    console.log("ok");
  })
  .catch((err) => console.error(err));

const request = {
  get(url) {
    return fetch(url);
  },
  post(url, payload) {
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  },
  patch(url, payload) {
    return fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  },
  delete(url) {
    return fetch(url, { method: "DELETE" });
  },
};

request
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  })
  .then((todos) => console.log(todos))
  .catch((err) => console.error(err));
