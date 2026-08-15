# techs-solar/docs

Public documentation for **docs.techs.solar**. Built with [Starlight](https://starlight.astro.build) (Astro)
and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Most of this repo is generated — do not hand-edit it

Content here is **output**, not source. It is written by `kb:sync-external` in the
`techs-solar` application repo, from `INT-WIKI/`. **Anything you hand-edit in a
generated path is silently reverted by the next sync** — no error, no warning, your
change simply gone. To change a doc, change it in `INT-WIKI/` and publish it through
`/admin/kb-sync`.

### Generated — overwritten every sync

This list is produced by the sync itself from the paths it wrote on its last run, so
it cannot fall out of date with the code the way a hand-written list does.

| Path |
| --- |
| `README.md` |
| `astro.config.mjs` |
| `public/CNAME` |
| `public/favicon.ico` |
| `public/llms.txt` |
| `public/robots.txt` |
| `src/assets/logo-dark-text.svg` |
| `src/assets/logo-light-text.svg` |
| `src/content/docs/**` |
| `src/styles/brand.css` |

### Scaffold — safe to hand-edit, the sync never touches it

| Path | Why it is not generated |
| --- | --- |
| `package.json` | dependency declaration; a human decision |
| `package-lock.json` | a build input with security meaning — a generator writing one would be manufacturing a dependency tree nobody reviewed |
| `.github/workflows/**` | deploy mechanics, reviewed like any other CI |

## Two things that fail silently

**The URL shape is load-bearing.** Every doc serves at `/{{folder}}/{{slug}}/`. `public/llms.txt`
emits those as absolute URLs and the pages are already crawled and indexed. Setting Astro's
`build.format` to `'file'` flattens them: the site still builds and still deploys, and every
existing link 404s. The deploy workflow asserts the shape and fails the build instead.

**`CNAME` must exist in `dist/`, not just in the repo.** Pages publishes the build artifact,
so a `CNAME` at the repo root would never reach the served site — it lives in `public/`,
which Astro copies verbatim. If **docs.techs.solar** ever stops resolving after a deploy, check
`dist/CNAME` before suspecting DNS.

## Local development

```bash
npm ci
npm run dev     # http://localhost:4321
npm run build   # writes dist/
```
