import { getAllPosts } from '$lib/utils/posts.js';

export function load() {
	const posts = getAllPosts().map(({ title, slug, excerpt, printDate }) => ({
		title,
		slug,
		excerpt,
		printDate
	}));

	return { posts };
}
