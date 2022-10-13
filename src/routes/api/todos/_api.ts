import { type request, json, error, redirect } from '@sveltejs/kit';

let todos: Todo[] = [];

export const api = async (request: Request, todo?: Todo) => {
	// let items: Todo[] = [];
	let body = {};
	let status = 500;

	switch (request.method.toUpperCase()) {
		case 'GET':
			if (todo) todos.push(todo);
			status = 200;
			break;
		case 'POST':
			if (todo) todos.push(todo);
			status = 200;
			break;
		case 'DELETE':
			const id = await request.headers.get('id');
			todos = todos.filter((todo) => todo.id !== id);
			status = 307;

			break;
		default:
			break;
	}

	// if (request.method === 'DELETE') {
	// 	console.log(`my method is ${request.method}`);
	// 	return {
	// 		headers: { Location: '/todo' },
	// 		status
	// 	};
	// }

	return json({ status, todos });
};
