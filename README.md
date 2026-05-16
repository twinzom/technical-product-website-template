# Technical Product Website Template

A ready-to-use product website template built with [Docusaurus](https://docusaurus.io/). Includes a landing page, documentation section, and blog — all deployable to GitHub Pages with a single command.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

### Install dependencies

```bash
npm install
```

### Start local development server

```bash
npm start
```

Opens `http://localhost:3000` in your browser. Most changes are reflected live without restarting the server.

### Build for production

```bash
npm run build
```

Generates optimized static files into the `build/` directory.

---

## Project Structure

```
.
├── blog/                   # Blog posts
│   ├── authors.yml         # Blog author profiles
│   ├── tags.yml            # Blog tags
│   └── YYYY-MM-DD-title/   # One folder (or .mdx file) per post
│       └── index.mdx
├── docs/                   # Documentation pages
│   ├── intro.mdx           # First page shown in the docs sidebar
│   └── my-category/        # A category (folder = section in sidebar)
│       ├── _category_.json # Category label and display settings
│       └── my-page.mdx
├── src/
│   ├── components/         # Reusable React components
│   ├── css/custom.css      # Global CSS overrides and theme variables
│   └── pages/              # Standalone pages (not in docs or blog)
│       └── index.tsx       # Home / landing page
├── static/                 # Static assets (images, fonts, etc.)
│   └── img/
├── docusaurus.config.ts    # Main site configuration (title, URL, navbar, footer)
└── sidebars.ts             # Sidebar structure for the docs section
```

---

## How to Add Content

### Add a new standalone page

Create a file in `src/pages/`. Docusaurus automatically turns it into a route.

```
src/pages/about.mdx        →  /about
src/pages/pricing.tsx      →  /pricing
```

Example `src/pages/about.mdx`:

```mdx
# About Us

Welcome to our product.
```

---

### Add a new docs page

Create a `.mdx` file anywhere inside `docs/`. It will appear in the sidebar automatically.

```
docs/getting-started.mdx            →  /docs/getting-started
docs/advanced/configuration.mdx     →  /docs/advanced/configuration
```

Control the sidebar order with a `position` field in the frontmatter:

```mdx
---
sidebar_position: 2
---

# Configuration

...
```

---

### Add a new docs category (section)

Create a subfolder inside `docs/` and add a `_category_.json` file:

```
docs/
└── advanced/
    ├── _category_.json
    └── configuration.mdx
```

`_category_.json` example:

```json
{
  "label": "Advanced",
  "position": 3,
  "collapsed": false
}
```

---

### Add a new blog post

Create a `.mdx` file (or a folder with `index.mdx`) inside `blog/`, named with the date prefix:

```
blog/2024-06-01-my-post.mdx
blog/2024-06-01-my-post/
    index.mdx
    banner.png
```

Include frontmatter at the top:

```mdx
---
title: My Post Title
authors: [yourname]
tags: [release, tutorial]
---

Your content here...

<!-- truncate -->

More content below the fold.
```

Author profiles are defined in `blog/authors.yml`. Tags are defined in `blog/tags.yml`.

---

## Deployment to GitHub Pages

This project is configured to deploy to GitHub Pages using Docusaurus's built-in deploy command.

**Deployed site:** `https://twinzom.github.io/technical-product-website-template/`

### One-time setup

1. Go to your repo **Settings → Pages**.
2. Under **"Build and deployment"**, set **Source** to **"Deploy from a branch"**.
3. Set **Branch** to `gh-pages` / `/ (root)` and click **Save**.

### Deploy

Run this command whenever you want to publish changes:

```bash
GIT_USER=<your-github-username> npm run deploy
```

Or, if you have SSH configured for GitHub:

```bash
USE_SSH=true npm run deploy
```

This command:
1. Builds the site into the `build/` directory.
2. Force-pushes the built output to the `gh-pages` branch.
3. GitHub Pages serves the site from that branch automatically.

> The `organizationName`, `projectName`, and `url` fields in `docusaurus.config.ts` must match your GitHub username and repository name for the deploy command to work correctly.

---

## Customisation

| What to change | Where |
|---|---|
| Site title, URL, navbar, footer | `docusaurus.config.ts` |
| Landing page content | `src/pages/index.tsx` |
| Feature cards on home page | `src/components/HomepageFeatures/index.tsx` |
| Theme colours | `src/css/custom.css` |
| Docs sidebar structure | `sidebars.ts` (or use `_category_.json` files) |
| Logo and favicon | `static/img/` |
