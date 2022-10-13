let todos: Todo[] = [];

//load function runs on first page load -> to get todo items from api endpoint
//add {fetch} to make relative api calls
/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const res = await fetch('/api/todos');
	console.log(res);

	if (res.ok) {
		todos = await res.json();

		// sets todos returned from the API to props
		return {
			props: { todos }
		};
	}

	// throw redirect(307, '/');
	// throw error(500, 'There was an issue retrieving Todo Items');
}
