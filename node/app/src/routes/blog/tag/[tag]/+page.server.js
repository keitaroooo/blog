import { error } from '@sveltejs/kit';
import { getAllPosts, tagCounts } from '$lib/utils/posts.js';

function listed(posts) {
	return posts.map(({ title, slug, excerpt, printDate, tags }) => ({
		title,
		slug,
		excerpt,
		printDate,
		tags
	}));
}

export function entries() {
	const tags = new Set();
	for (const post of getAllPosts()) {
		for (const tag of post.tags) tags.add(tag);
	}
	return [...tags].map((tag) => ({ tag }));
}

export function load({ params }) {
	const all = getAllPosts();
	const posts = listed(all.filter((post) => post.tags.includes(params.tag)));
	if (!posts.length) error(404, 'Not found');
	return { tag: params.tag, posts, tags: tagCounts(all) };
}
