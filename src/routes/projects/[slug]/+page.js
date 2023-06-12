import { error } from '@sveltejs/kit';
import { projects } from '../db';
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (projects.some((e) => e.id.toString() === params.slug)) {
		return projects[Number.parseInt(params.slug)];
	}
	throw error(404, 'Not found');
}
