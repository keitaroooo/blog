import { getAllPosts, tagCounts } from '$lib/utils/posts.js';

export const prerender = true;

const site = 'https://blog.keitaroooo.com';

export function GET() {
	const posts = getAllPosts();
	const locs = [
		'/',
		'/about',
		'/blog',
		...posts.map((post) => `/blog/${post.slug}`),
		...tagCounts(posts).map((item) => `/blog/tag/${encodeURIComponent(item.tag)}`)
	];
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${locs.map((loc) => `  <url><loc>${site}${loc}</loc></url>`).join('\n')}
</urlset>
`;
	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' }
	});
}
