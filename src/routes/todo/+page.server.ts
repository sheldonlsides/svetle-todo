// /** @type {import('./$types').Actions} */
import { invalid, redirect, error } from '@sveltejs/kit';

let todos: Todo[] = [];

//load function to get todo items from api endpoint
/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const res = await fetch('http://127.0.0.1:5174/api/todos');
	console.log(res);

	if (res.ok) {
		const todos = await res.json();

		// sets todos returned from the API to props
		return {
			props: { todos }
		};
	}
}

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

		const name = data.get('name');

		console.log(data);

		if (!name) {
			return invalid(400, { name, missing: true });
			// throw error(401, 'not logged in');
		}

		todos.push({
			text: name,
			created_at: new Date(),
			done: false
		});

		// console.log(todos);
		// cookies.set('username', name);
		// console.log(cookies.get('username'));

		return { success: true, todos };
	}
};
