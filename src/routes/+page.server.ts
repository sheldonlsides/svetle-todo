// /** @type {import('./$types').Actions} */
import { invalid, redirect, error } from '@sveltejs/kit';

let todos: Todo[] = [];

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

		const todo = data.get('name');

		console.log(data);

		if (!todo) {
			return invalid(400, { todo, missing: true });
			// throw error(401, 'not logged in');
		}

		todos.push(todo);

		// cookies.set('username', name);
		// console.log(cookies.get('username'));

		return { success: true, todos };
	}
};
