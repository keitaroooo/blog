import { error } from '@sveltejs/kit';
import { getPostBySlug } from '$lib/utils/posts.js';

export function load({ params }) {
	const post = getPostBySlug(params.slug);

	if (!post) {
		error(404, 'Not found');
	}

	return { post };
}
