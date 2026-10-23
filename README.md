# pardasani.net

The live site for pardasani.net, designed in Claude Design and served by Cloudflare Workers. The site itself is in `public/`, and `wrangler.jsonc` tells Cloudflare to serve that folder as a static site.

`public/` is built from a Claude Design export (v4.1) with `make_live.py`, which keeps the export as it is and only:

- gives each page a clean address: `work.html` is served at pardasani.net/work, `odd-jobs.html` at /odd-jobs, and so on
- adds a tab title, a description and link preview tags to every page, with `assets/og-image.jpg` for Home, Work and About and each project's own hero image for its page
- adds `_redirects`, so old addresses like `/Work.dc.html` go to the clean ones and `/contact` goes to the footer
- adds `robots.txt` and `sitemap.xml`
- leaves out the design sheets and phone frames that no page uses

The components (`Hero`, `Weather`, `Dock`, `Video`, `Projects`, `Footer`) keep their `.dc.html` names, because the Claude Design runtime in `support.js` loads them by those names.

## Updating the site

1. Export the site from Claude Design.
2. Run `python3 make_live.py <export folder> <output folder> og-image.jpg`.
3. Replace everything in `public/` with the output folder and push. Cloudflare builds and publishes each push to `main` within a minute or two.
