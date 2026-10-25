import { getAllPosts, tagCounts } from '$lib/utils/posts.js';

export function load() {
	const all = getAllPosts();
	const posts = all.map(({ title, slug, excerpt, printDate, tags }) => ({
		title,
		slug,
		excerpt,
		printDate,
		tags
	}));

	return { posts, tags: tagCounts(all) };
}
