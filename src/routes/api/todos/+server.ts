import { error } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export function GET({}) {
	console.log();
	const value: string = 'hello there';

	return new Response(value);
}
