async function fetchToDo() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const body = await response.json();
    return body;
  } catch (e) {
    console.log(e);
  }
}

async function fetchUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    return user;
  } catch (e) {
    console.log(e);
  }
}

Promise.all([
  fetchToDo(),
  fetchUser(),
])
  .then((result) => {
    console.log('All response result:', result);
  });

Promise.race([
  fetchToDo(),
  fetchUser(),
])
  .then((result) => {
    console.log('Race response result:', result);
  });
