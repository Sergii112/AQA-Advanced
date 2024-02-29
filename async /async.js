function fetchTodoById(id) {
	return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
		.then((res) => res.json())
		.then((jsonBody) => console.log(jsonBody))
		.catch((e) => console.log(e));
}
//
// fetchTodoById(1)
//

async function fetchTodoById(id) {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
		const body = await response.json();
		return body;
	} catch (e) {
		console.log(e);
	}
}

// const fetchTodoArrow = async () => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
//     const body = await response.json()
//     console.log(body)
// }

fetchTodoById(1);
