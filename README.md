# Christopher Licuanan — Portfolio

Static personal portfolio. No backend, no build step.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Deploy to Cloudflare Pages

1. Push this folder to a Git repo (GitHub/GitLab).
2. In [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages → Create project → Connect to Git.
3. Set **Build configuration**: Build command leave empty, Output directory: `/` (root).
4. Deploy. Your site will be live at `*.pages.dev`.
