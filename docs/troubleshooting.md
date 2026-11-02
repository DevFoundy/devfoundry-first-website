# Troubleshooting

[Course home](../README.md) · [Workbook](../course/DevFoundry-Build-and-Deploy-Your-First-Website.pdf)

Open developer tools through your browser menu. Start with the first error. Compare the relevant checkpoint and change one thing at a time.

## HTML looks wrong or content disappears

### Problem

Sections look nested incorrectly, text is missing or literal markup appears.

### Check

Check the first broken region for missing closing tags and incorrect nesting. Confirm the file is index.html, not a text file. Inspect the browser DOM and compare the matching checkpoint.

### Why

The browser repairs malformed HTML, sometimes placing content somewhere unexpected. Markdown code fences pasted into HTML are not HTML syntax.

### Avoid

Do not replace unrelated working sections before locating the first incorrect tag.

## CSS does not load

### Problem

The page still looks unstyled after Module 2.

### Check

Save index.html and style.css. Check that the stylesheet link is in head and points to style.css beside the HTML file. Look for failed requests and missing braces in developer tools.

### Why

A wrong path prevents the file from loading; a malformed rule can affect rules below it.

### Avoid

Do not add !important everywhere or rename every selector before checking the actual request and cascade.

## Images work locally but fail online

### Problem

An image disappears on the deployed page.

### Check

Match capitalization and file extensions exactly. Confirm the asset was committed. Use assets/project-1.svg relative to index.html, with no leading slash.

### Why

A local filesystem may ignore case differences. A leading slash starts at the domain root instead of the portfolio repository subpath.

### Avoid

Do not use paths pointing into your own computer or assume hiding broken images fixes the cause.

## Theme button does not work

### Problem

The control is absent or the palette does not change.

### Check

Check the first console error, the script.js path, the defer attribute and the theme-button ID. Confirm the full script and body.dark CSS variables are present.

### Why

The button starts hidden until the script reveals it. A syntax error or selector mismatch can stop initialization.

### Avoid

Do not paste the lesson experiment and final script together; duplicate const declarations can stop the whole file.

## Mobile menu does not appear

### Problem

The menu button or navigation behaves unexpectedly on a phone.

### Check

Test below 640 CSS pixels. Confirm menu-button, nav-links, aria-controls and both matching CSS/JavaScript breakpoints. Check the first console error.

### Why

The button is intentionally hidden on desktop and before JavaScript enhancement. The no-script version shows ordinary links instead.

### Avoid

Do not manually add the js class to HTML or remove all navigation links as a workaround.

## Git push is rejected

### Problem

Git cannot send your commits to GitHub.

### Check

Read the actual error. Check git status, git remote -v, your authenticated account and repository permissions. For the first exercise, use an empty remote repository.

### Why

Authentication, permissions and diverged history are different problems. Creating a separate README on the remote can create another history.

### Avoid

Do not force-push, discard work or expose a token to fix an unfamiliar rejection. Never use an account password as a Git HTTPS password.

## GitHub Pages gives a 404

### Problem

The public page cannot be found or loads without its assets.

### Check

Check Settings → Pages, the chosen branch and source folder, lowercase index.html at that source root, and the latest deployment result. Use the URL displayed by GitHub.

### Why

The repository URL is not the published website URL. This course repository contains multiple checkpoints; student instructions expect the contents of one working portfolio at the root of its own repository.

### Avoid

Do not select the course root and assume GitHub will automatically choose 06-final-project. Do not copy a root-relative asset path.

## Saved theme behaves differently locally

### Problem

A theme choice does not persist between visits or environments.

### Check

Try a local preview server or the deployed HTTPS site. Check the same browser profile and origin. The toggle itself should still work even when storage is unavailable.

### Why

Storage access can be blocked; file URL behavior varies. Preferences are local to an origin and profile, not synchronized between preview and deployment.

### Avoid

Do not remove the try/catch storage fallback or claim the site requires tracking or an account to remember its theme.
