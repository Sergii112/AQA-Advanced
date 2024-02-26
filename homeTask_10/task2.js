function fetchToDo() {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/1`)
      .then((response) => response.json())
      .then(toDo => resolve(toDo))
      .catch(error => reject(error))
  })
}

function fetchUser() {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/users/1`)
      .then((response) => response.json())
      .then(user => resolve(user))
      .catch(error => reject(error))
  })
}

Promise.all([
  fetchToDo(),
  fetchUser()
])
  .then(result => {
    console.log('All response result:', result)
  })

Promise.race([
  fetchToDo(),
  fetchUser()
])
  .then(result => {
    console.log('Race response result:', result)
  })