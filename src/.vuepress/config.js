const currentDateUTC = new Date().toUTCString()

module.exports = {
	title: 'Khmer Coders',
	dest: './public',
	themeConfig: {
		repo: 'https://wwww.github.com',
		repoLabel: 'Repo',
		editLinks: true,
		editLinkText: 'Found a bug? Help me improve this page!',
		nav: [
			{ text: 'Home', link: '/' }, 
			{ text: 'Blog', link: '/blog/' },
			{ text: 'Archive', link: '/archive/' },
			{ text: 'RSS Feed', link: '/rss.xml' }
		],
		logo: '/vuepress-blog-logo.png',
		docsDir: 'src',
		pageSize: 5,
		startPage: 0
	},
	plugins: [
		[
			'@vuepress/google-analytics',
			{
				ga: '' // UA-00000000-0
			}
		],
		[
			'vuepress-plugin-rss',
			{
				base_url: '/',
				site_url: 'https://vuepressblog.org',
				filter: frontmatter => frontmatter.date <= new Date(currentDateUTC),
				count: 20
			}
		],
		'vuepress-plugin-reading-time',
		'vuepress-plugin-janitor'
	],
	head: [
		['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon.png' }],
		['link', { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' }],
		['link', { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' }],
		['link', { rel: 'manifest', href: '/site.webmanifest' }],
		['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
		['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
		['meta', { name: 'theme-color', content: '#ffffff' }],
		['link', { rel: 'stylesheet', type: "text/css", href: "https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800" }],
		['link', { href: 'https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic', rel: 'stylesheet', type: 'text/css' }]
	]
}
