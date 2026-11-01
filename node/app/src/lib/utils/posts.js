import fs from 'fs';
import path from 'path';
import { execFileSync } from 'node:child_process';
import matter from 'gray-matter';
import { Marked } from 'marked';
import Prism from 'prismjs';
import readingTime from 'reading-time';
import { format } from 'date-fns';

// Support JSX syntax highlighting
import 'prismjs/components/prism-jsx.min.js';

const postsDirectory = path.resolve('src/routes/blog/posts');
const repoRoot = path.resolve('../..');
const site = 'https://blog.keitaroooo.com';

let toc = [];
let headingN = 0;

const marked = new Marked({
	renderer: {
		heading({ tokens, depth }) {
			const inner = this.parser.parseInline(tokens);
			const plain = inner.replace(/<[^>]+>/g, '');
			const id = `s${++headingN}`;
			if (depth === 2 || depth === 3) toc.push({ depth, id, text: plain });
			return `<h${depth} id="${id}">${inner}</h${depth}>\n`;
		},
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
	const tags = Array.isArray(data.tags) ? data.tags.filter((tag) => typeof tag === 'string' && tag) : [];
	toc = [];
	headingN = 0;

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
	const updated = updatedByFile.get(fileName) || null;
	const printUpdated = updated && format(new Date(updated), 'MMMM d, yyyy') !== printDate
		? format(new Date(updated), 'MMMM d, yyyy')
		: null;

	return {
		title: title || slug,
		slug,
		html,
		date,
		tags,
		excerpt,
		printDate,
		printUpdated,
		printReadingTime,
		toc: [...toc],
		url: `${site}/blog/${slug}`
	};
}

function loadUpdated() {
	const map = new Map();
	try {
		// shortcut: a shallow clone has no file history, so updated dates stay empty until that clone includes the commits
		const out = execFileSync(
			'git',
			['log', '--format=%cI', '--name-only', '--', 'node/app/src/routes/blog/posts'],
			{ cwd: repoRoot, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], maxBuffer: 10 * 1024 * 1024 }
		);
		let iso = null;
		for (const line of out.split('\n')) {
			const trimmed = line.trim();
			if (!trimmed) continue;
			if (/^\d{4}-\d{2}-\d{2}T/.test(trimmed)) {
				iso = trimmed;
				continue;
			}
			const base = path.basename(trimmed);
			if (base.endsWith('.md') && iso && !map.has(base)) map.set(base, iso);
		}
	} catch {
		return map;
	}
	return map;
}

const updatedByFile = loadUpdated();

export function getAllPosts() {
	const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.md'));
	return fileNames
		.map((fileName) => processPost(fileName))
		.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function tagCounts(posts) {
	const counts = new Map();
	for (const post of posts) {
		for (const tag of post.tags) counts.set(tag, (counts.get(tag) || 0) + 1);
	}
	return [...counts.entries()]
		.map(([tag, count]) => ({ tag, count }))
		.sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag, 'ja'));
}

export function getPostBySlug(slug) {
	const fileName = `${slug}.md`;
	const fullPath = path.join(postsDirectory, fileName);
	if (!fs.existsSync(fullPath)) {
		return null;
	}
	return processPost(fileName);
}
