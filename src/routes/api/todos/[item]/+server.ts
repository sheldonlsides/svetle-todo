import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { api } from '../_api';

//api endpoint to get items
/** @type {import('./$types').RequestHandler} */
export function DELETE({ request }) {
	return api(request);
}
