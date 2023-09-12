const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("accept", "application/json");
xhr.send();

xhr.onreadystatechange = () => {
  if (xhr.readyState !== XMLHttpRequest.DONE) return;

  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.response));
  } else {
    console.error("Error", xhr.status, xhr.statusText);
  }
};
