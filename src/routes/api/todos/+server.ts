import { error } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

let todos: Todo[] = [];

//api endpoint to get items
/** @type {import('./$types').RequestHandler} */
export function GET({}) {
	todos.push({
		text: 'Sara',
		created_at: new Date(),
		done: false
	});

	todos.push({
		text: 'Sheldon',
		created_at: new Date(),
		done: false
	});

	return new Response(JSON.stringify(todos));
}
