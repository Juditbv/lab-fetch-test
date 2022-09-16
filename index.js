const getTodoHtml = (todo) => {
  return todo.completed
    ? `<div class="card card-todo card-true"><h3 class="card-title">${todo.title}</h3><p class="card-text">${todo.completed}</p></div>`
    : `<div class="card card-todo card-false"><h3 class="card-title">${todo.title}</h3><p class="card-text">${todo.completed}</p></div>`;
};

document.querySelector("#getPosts").addEventListener("click", getPosts);
document.querySelector("#getTodos").addEventListener("click", getTodos);

function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_end=10")
    .then((response) => response.json())
    .then((res) => {
      let data = "";
      res.forEach((post) => {
        data += `
        <div class="card">
            <h3 class="card-title">${post.title}</h3>
            <p class="card-text">
                ${post.body}
            </p>
            <p class="text-small">Autor del post: ${post.id}</p>
        </div>
        `;
      });

      document.querySelector("#output").innerHTML = data;
    })
    .catch((error) => console.log(error));
}

function getTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_end=10")
    .then((response) => response.json())
    .then((res) => {
      let data = "";
      res.forEach((todo) => {
        data += getTodoHtml(todo);
      });

      document.querySelector("#output").innerHTML = data;
    })
    .catch((error) => console.log(error));
}
