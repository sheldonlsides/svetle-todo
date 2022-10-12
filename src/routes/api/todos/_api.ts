import { type request, json, error } from '@sveltejs/kit';

let todos: Todo[] = [];

export const api = async (request: Request, todo?: Todo) => {
	let items: Todo[] = [];

	switch (request.method.toUpperCase()) {
		case 'GET':
			if (todo) todos.push(todo);
			// return json(todos);
			break;
		case 'POST':
			if (todo) todos.push(todo);

			// return json(todos);
			break;
		default:
			break;
	}

	return json(todos);
};
