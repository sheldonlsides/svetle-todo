import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { api } from '../todos/_api';

// let todos: Todo[] = [];

//api endpoint to get items
/** @type {import('./$types').RequestHandler} */
export function GET({ request }) {
	return api(request);
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	//request.json() get formData request body
	let item: Todo = await request.json();
	return api(request, item);
}
