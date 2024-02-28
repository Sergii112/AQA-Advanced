const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function fetchTodoById(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const body = await response.json();
  return body;
}

async function fetchAllTodos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const body = await response.json();
  return body;
}

// fetchAllTodos()
//     .then((v)=> v.map((todo)=> ({...todo, title: todo.title.toUpperCase()})))
//     .then((v)=> console.log(v))

// function createPost(){
//    return  fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((response) => response.json())
// }

async function createPost(requestBody) {
  const response = await fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const body = await response.json();
  return body;
}

// createPost({
//     title: 'Stanislav',
//     body: 'Taran',
//     userId: 1,
// }).then((v)=> console.log(v))

Promise.all([fetchTodoById(1), fetchTodoById(2)]).then((values) => console.log(values));

Promise.race([fetchTodoById(1), fetchTodoById(2)]).then((values) => console.log(values));

// hw
// function printWithDelay(text, ms){
//
// }

class TodoController {
  constructor(baseUrl) {
    this._baseURL = baseUrl;
  }

  async fetchTodoById(id) {
    const response = await fetch(`${this._baseURL}/todos/${id}`);
    const body = await response.json();
    return body;
  }
}

const todoController = new TodoController(BASE_URL);

todoController.fetchTodoById(1);
