import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { api } from '../_api';

//api endpoint to get items
/** @type {import('./$types').RequestHandler} */
export async function DELETE({ request }) {
	let res = await api(request);
	console.log(`my method is ${request.method}`);
	return json({ status: res.status, message: 'Item successsfully deleted' });
}
