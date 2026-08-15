// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// GENERATED FILE — owned by KbSyncExternal, rewritten on every sync.
// Hand-edits here are lost. Change it in the techs-solar app repo.
//
// `build.format` is left at its default ('directory'), which is what keeps
// '03-group-buying/how-to-join-a-group-order.md' serving at
// '/03-group-buying/how-to-join-a-group-order/' — the same shape Jekyll's
// `permalink: pretty` produced, and the shape llms.txt bakes absolute URLs
// against. Do not set it to 'file'.
//
// Sidebar groups MUST carry an explicit `label`. Without one Starlight
// renders the raw directory name as the heading — '03-group-buying',
// numeric prefix and all. It does NOT fall back to the folder's
// index.md title; that page appears as a child link instead.
//
// The nesting below is required, not stylistic: `{ label, autogenerate }`
// as siblings was removed in Starlight 0.39 and is now a hard build
// error. `autogenerate` must sit inside `items`. Do not flatten it.
export default defineConfig({
	site: 'https://docs.techs.solar',
	integrations: [
		starlight({
			title: 'Techs.Solar Docs',
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
				el: { label: 'Ελληνικά', lang: 'el' },
			},
			// `light`/`dark` are the THEME, so each takes the wordmark whose
			// ink contrasts with that theme's background: dark text on light,
			// light text on dark. Swapping them renders the logo invisible.
			logo: {
				light: './src/assets/logo-dark-text.svg',
				dark: './src/assets/logo-light-text.svg',
				replacesTitle: true,
			},
			favicon: '/favicon.ico',
			customCss: ['./src/styles/brand.css'],
			sidebar: [
				{ label: 'Getting Started', items: [{ autogenerate: { directory: '01-getting-started' } }] },
				{ label: 'Creating Quotes', items: [{ autogenerate: { directory: '02-creating-quotes' } }] },
				{ label: 'Group Buying', translations: { el: 'Ομαδικές αγορές' }, items: [{ autogenerate: { directory: '03-group-buying' } }] },
				{ label: 'Pricing and Plans', translations: { el: 'Τιμές και πακέτα' }, items: [{ autogenerate: { directory: '04-pricing-and-plans' } }] },
				{ label: 'Monitoring', items: [{ autogenerate: { directory: '05-monitoring' } }] },
				{ label: 'Customers and Leads', items: [{ autogenerate: { directory: '06-customers-and-leads' } }] },
				{ label: 'Contracts and Legal', items: [{ autogenerate: { directory: '07-contracts-and-legal' } }] },
				{ label: 'Troubleshooting', items: [{ autogenerate: { directory: '08-troubleshooting' } }] },
				{ label: 'Pre-Sales Tools', items: [{ autogenerate: { directory: '10-pre-sales-tools' } }] },
			],
		}),
	],
});
