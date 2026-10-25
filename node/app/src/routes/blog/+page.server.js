import { getAllPosts } from '$lib/utils/posts.js';

export function load() {
	const posts = getAllPosts().map(({ title, slug, excerpt, printDate, tags }) => ({
		title,
		slug,
		excerpt,
		printDate,
		tags
	}));

	return { posts };
}
