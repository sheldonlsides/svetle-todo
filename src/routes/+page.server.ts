// /** @type {import('./$types').Actions} */
import { invalid } from '@sveltejs/kit';

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

		const name = data.get('name');

		if (!name) {
			return invalid(400, { name, missing: true });
		}

		cookies.set('username', name);

		console.log(cookies.get('username'));

		return { success: true };
	}
};
