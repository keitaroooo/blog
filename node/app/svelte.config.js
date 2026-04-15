import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		}),
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// terms/privacy/contact ページは未作成のため無視
				if (['/terms', '/privacy', '/contact'].includes(path)) {
					return;
				}
				// 存在しない画像ファイルは警告のみ（一部記事で画像が欠損）
				if (path.startsWith('/images/')) {
					console.warn(`Warning: Missing image ${path} (linked from ${referrer})`);
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;
