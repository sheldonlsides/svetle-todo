// /** @type {import('./$types').Actions} */
import { invalid, redirect, error } from '@sveltejs/kit';

// let todos: Todo[] = [];

//below code removed for refactoring. Use page.server if API call used a secret
//load function runs on first page load -> to get todo items from api endpoint
//add {fetch} to make relative api calls
// /** @type {import('./$types').PageServerLoad} */
// export async function load({ fetch }) {
// 	const res = await fetch('/api/todos');

// 	if (res.ok) {
// 		const todos = await res.json();

// 		// sets todos returned from the API to props
// 		return {
// 			props: { todos }
// 		};
// 	}

// 	// throw redirect(307, '/');
// 	// throw error(500, 'There was an issue retrieving Todo Items');
// }

// default action when the page is posted
export const actions = {
	default: async ({ cookies, request, fetch }) => {
		const data = await request.formData();

		const name = data.get('name');

		if (!name || name.length <= 2) {
			return invalid(400, {
				name,
				error: 'Missing name or name not required length'
			});
			// throw error(401, 'not logged in');
		}

		let item: Todo = {
			text: name,
			done: false,
			created_at: new Date()
		};

		//calls server api endpoint
		await fetch('/api/todos', { method: 'POST', body: JSON.stringify(item) });

		// console.log(JSON.parse(JSON.stringify({ success: true, todos })));
		// console.log(todos);
		// cookies.set('username', name);
		// console.log(cookies.get('username'));

		return JSON.parse(JSON.stringify({ success: true }));
	}
};
