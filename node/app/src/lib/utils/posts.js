import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Marked } from 'marked';
import Prism from 'prismjs';
import readingTime from 'reading-time';
import { format } from 'date-fns';

// Support JSX syntax highlighting
import 'prismjs/components/prism-jsx.min.js';

const postsDirectory = path.resolve('src/routes/blog/posts');

const marked = new Marked({
	renderer: {
		link({ href, title, text }) {
			const titleAttr = title ? ` title="${title}"` : '';
			if (href.startsWith('/')) {
				return `<a href="${href}"${titleAttr}>${text}</a>`;
			}
			if (href.startsWith('#')) {
				return `<a onclick="document.location.hash='${href.substring(1)}';"${titleAttr}>${text}</a>`;
			}
			return `<a target="_blank" rel="nofollow" href="${href}"${titleAttr}>${text}</a>`;
		},
		code({ text, lang }) {
			const language = lang || 'html';
			const parser = Prism.languages[language] || Prism.languages.html;
			const highlighted = Prism.highlight(text, parser, language);
			return `<pre class="language-${language}"><code class="language-${language}">${highlighted}</code></pre>`;
		}
	}
});

const EXCERPT_SEPARATOR = '<!-- more -->';

function processPost(fileName) {
	const fullPath = path.join(postsDirectory, fileName);
	const md = fs.readFileSync(fullPath, 'utf-8');
	const slug = fileName.replace(/\.md$/, '');
	const { data, content: rawContent } = matter(md);
	const { title, date } = data;

	let content = rawContent;
	let excerpt = '';

	if (rawContent.includes(EXCERPT_SEPARATOR)) {
		const parts = rawContent.split(EXCERPT_SEPARATOR);
		excerpt = parts[0];
		content = parts[1];
	}

	// 相対画像パスを絶対パスに変換（static/images/ → /images/）
	const fixedContent = content.replace(/!\[([^\]]*)\]\(images\//g, '![$1](/images/');
	const html = marked.parse(fixedContent);
	const readingStats = readingTime(content);
	const printReadingTime = readingStats.text;
	const printDate = format(new Date(date), 'MMMM d, yyyy');

	return {
		title: title || slug,
		slug,
		html,
		date,
		excerpt,
		printDate,
		printReadingTime
	};
}

export function getAllPosts() {
	const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.md'));
	return fileNames
		.map((fileName) => processPost(fileName))
		.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
	const fileName = `${slug}.md`;
	const fullPath = path.join(postsDirectory, fileName);
	if (!fs.existsSync(fullPath)) {
		return null;
	}
	return processPost(fileName);
}
