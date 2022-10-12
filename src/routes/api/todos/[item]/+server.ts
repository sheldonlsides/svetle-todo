import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

let todos: Todo[] = [];

//api endpoint to get items
/** @type {import('./$types').RequestHandler} */
export function DELETE({}) {
	return json({ name: 'Item Endpoint' });
}
