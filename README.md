# pardasani.net v4

A static export of the pardasani.net v4 design from Claude Design. There's no build step: upload this folder as it is.

## Host it on GitHub Pages

1. Create a repository and upload everything in this folder to its root, including the hidden `.nojekyll` file.
2. In the repository, go to Settings, then Pages. Under Build and deployment, set Source to "Deploy from a branch", pick `main` and `/ (root)`, and save.
3. After a minute or two the site is live at `https://<your-username>.github.io/<repository>/`.
4. To use pardasani.net, enter it under Settings, Pages, Custom domain, then point the domain's DNS at GitHub Pages as GitHub describes there. GitHub adds the `CNAME` file for you.

## Preview it on your computer

Pages load each other, so opening the files straight from disk won't work. Run a small local server from this folder instead:

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## What's in here

| File | What it is |
|---|---|
| `index.html` | Home. A copy of `Home.dc.html`, so the site opens at its root address. |
| `404.html` | The "This page doesn't exist" page. GitHub Pages shows it for any missing address. |
| `Work`, `OddJobs`, `Thingalicious`, `Delighto`, `ChaiAndCo`, `Doberman`, `AboutPage`, `Contact`, `NotFound` (`.dc.html`) | The site's pages. |
| `Hero`, `Weather`, `Projects`, `Footer` (`.dc.html`) | Components the pages load. Keep them next to the pages. |
| `support.js` | The Claude Design runtime that renders the `.dc.html` pages in the browser. |
| `assets/` | Images, icons and the stylesheet, `v4.css`. |
| `Main`, `Site`, `CaseStudy`, `About`, `HeroStates`, `Player`, `CraftPiece` and every `*-Phone` file | Design sheets and phone frames from the canvas. Nothing on the site links to them, so you can delete them if you'd rather they weren't public. |

## Before it goes live

These are still placeholders:

- LinkedIn and Instagram link to `#linkedin` and `#instagram`.
- The Currently cards on About show photo labels, and the first card is titled "Lorem ipsum", until they're filled in the `NOW` list in `AboutPage.dc.html`.
- Hovering a tool in the Toolkit dock on About shows "[What you use it for]" under its name.
- The confirmation line after sending a message on Contact is in brackets.
- The music widget links to the playlist with a small "Apple Music" text pill. To use Apple's official "Listen on Apple Music" badge instead, add the badge image to `assets/` and put its address in `BADGE_SRC` in `Hero.dc.html`.

The contact form doesn't send anything yet. On a static host it only shows the "Message sent." state. Before launch, connect it to a form service such as Formspree, or swap it for an email link.

## Good to know

- The weather widget fetches New York's weather from Open-Meteo once on page load. It needs no key, and the footer carries the credit Open-Meteo asks for.
- The music widget plays 30-second previews from the "la di da" playlist. It looks up one song at a time with Apple's iTunes Search API: the first when the page loads, then the next while the current one plays. Audio only loads when someone presses play. To change the songs, edit the `SONGS` list in `Hero.dc.html`.
- Every Resume link opens `assets/Mannat-Pardasani-Resume-UX-UI.pdf`, and Download resume on About saves it under that name. To update your resume, replace that file and keep the name.
- Fonts load from Google Fonts.
- Each page is plain HTML. Its layout sits inside `<x-dc>`, and its behaviour is in the script at the bottom of the file.
