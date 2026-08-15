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
// There is deliberately no `sidebar` key: Starlight auto-generates the nav
// from the file tree and takes each group's label from that folder's
// index.md `title:`. That is why no page carries nav frontmatter, and so
// why no INT-WIKI doc can declare its own nav placement.
export default defineConfig({
	site: 'https://docs.techs.solar',
	integrations: [
		starlight({
			title: 'Techs.Solar Docs',
		}),
	],
});
