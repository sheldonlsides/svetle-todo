import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

let todos: Todo[] = [];

//api endpoint to get items
/** @type {import('./$types').RequestHandler} */
export function GET({}) {
	return json(todos);
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	let item: Todo = await request.json();
	todos.push(item);

	console.log(item);
	console.log('item added');

	if (request.ok) return json(todos);

	throw error(500, 'There was a problem adding item');
}
