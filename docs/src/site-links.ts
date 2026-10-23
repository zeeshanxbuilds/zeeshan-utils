// Shared external links, so astro.config.mjs and Header.astro can't drift out of sync.
export const siteLinks = {
	store: { label: 'Website', href: 'https://zeeshan.cv/' },
	forums: { label: 'Discussions', href: 'https://github.com/zeeshanxbuilds/zeeshan-utils/discussions' },
} as const;
