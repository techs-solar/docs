# techs-solar/docs

Public documentation for **docs.techs.solar**. Built with [Starlight](https://starlight.astro.build) (Astro) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Most of this repo is generated — do not hand-edit it

Content here is **output**, not source. It is written by `kb:sync-external` in the
`techs-solar` application repo, from `INT-WIKI/`. **Anything you hand-edit in a
generated path is silently reverted by the next sync.** To change a doc, change it
in `INT-WIKI/` and publish it through `/admin/kb-sync`.

### Generated — overwritten every sync

| Path | Written by |
|---|---|
| `src/content/docs/**` | doc bodies + root and per-folder `index.md` |
| `astro.config.mjs` | site config, incl. the URL shape the published links depend on |
| `public/llms.txt` | AI-engine reach; absolute URLs, regenerated from the published set |
| `public/robots.txt` | crawler allowlist |
| `public/CNAME` | the custom domain — Pages serves `dist/`, so this must ride in the build |

### Scaffold — safe to hand-edit, the sync never touches it

| Path | Why it is not generated |
|---|---|
| `package.json` | dependency declaration; a human decision |
| `package-lock.json` | a build input with security meaning — a generator writing one would be manufacturing a dependency tree nobody reviewed |
| `.github/workflows/**` | deploy mechanics, reviewed like any other CI |
| `README.md` | this file |

## Two things that fail silently — worth knowing before changing anything

**The URL shape is load-bearing.** Every doc serves at `/{folder}/{slug}/`. `public/llms.txt`
emits those as absolute URLs and the pages are already crawled and indexed. Setting Astro's
`build.format` to `'file'` flattens them: the site still builds and still deploys, and every
existing link 404s. The deploy workflow asserts the shape and fails the build instead.

**`CNAME` must exist in `dist/`, not just in the repo.** Pages publishes the build artifact,
so a `CNAME` sitting at the repo root would not reach the served site — it lives in `public/`,
which Astro copies verbatim. If `docs.techs.solar` ever stops resolving after a deploy, check
`dist/CNAME` before suspecting DNS. The workflow asserts its presence *and* its contents.

## Local development

```bash
npm ci
npm run dev     # http://localhost:4321
npm run build   # writes dist/
```
