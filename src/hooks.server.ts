import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	console.log('hook ran');
	// if (event.url.search.includes('_method')) {
	// 	event.
	// 	// event.request.method = event.request.query.get('_method').toUpperCase();
	// }

	const response = await resolve(event);
	return response;
};
