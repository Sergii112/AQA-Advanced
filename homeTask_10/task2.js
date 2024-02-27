function fetchToDo() {
  return fetch(`https://jsonplaceholder.typicode.com/todos/1`)
      .then((res) => res.json())
      .catch((e) => console.log(e))
  
}

function fetchUser() {
  return fetch(`https://jsonplaceholder.typicode.com/users/1`)
      .then((res) => res.json())
      .catch((e) => console.log(e))

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