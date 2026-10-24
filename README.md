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

Before step 3, check the list of direct edits below. A new export undoes them.

## Direct edits

These changes were made straight in the code in `public/` on 23 October 2026, not in Claude Design. A new export through `make_live.py` replaces `public/` wholesale and would undo them. Either make the same changes in Claude Design before exporting again, or re-apply them to the new `public/` before pushing. The commit "Direct edits, 23 Oct" has every changed line: run `git log --grep "Direct edits, 23 Oct" -p` to see them.

In a Claude Design export, `about.html` is `AboutPage.dc.html` and `delighto.html` is `Delighto.dc.html`. `Dock.dc.html` and `Projects.dc.html` keep their names.

1. **Dock tooltip** (`Dock.dc.html`): the Adobe Creative Cloud line reads "I use Illustrator, Photoshop and InDesign to design all kinds of assets." Home and About both load this one component, so there is no second copy to change.
2. **About, / Currently** (`about.html`): the small mono label under each card's sentence is gone (the `card-m` span, its CSS rule and the `mono` values in `NOW`), and the sentence (`.now-card .card-t`) is weight 400.
3. **About, / This site** (`about.html`): the drawn browser after `.site-copy` has `transform: rotate(-6deg)` added to its style.
4. **About, / Range** (`about.html`): the four tiles are now Product, Visual strategy, Front end and AI workflow, each with a new list.
5. **Work filters** (`Projects.dc.html`): the chip row and the "/ All work" label are gone. A `.work-gap` spacer in their place keeps the space between the Work heading and the first card the same. `FILTERS`, `chips`, the `f` state, `viewLabel`, the code that read a filter from the address and each project's `filters` array are removed. Home is unchanged.
6. **Thingalicious card** (`Projects.dc.html`): its `fit` is `'fit fit-cover fit-th'`, and the new rule `.fit.fit-th{object-position:50% 60%}` sets the focus point.
7. **Delighto.ai** (`delighto.html`): a new second line in Problem, five decisions instead of three (Research, Scope, Design to code, Design fidelity and Go-to-market, with images on 03 and 04 only), a new Outcomes line and a new Role in the credits.
8. **About, / Experience** (`about.html`): `JOBS` has nine rows, with Printfresh first. A row with an empty description is drawn as a plain row (a `div` with the classes `acc-btn acc-static`, not a button), with no + sign, and it never opens.
