# Challenge answers

Try [the challenges](challenges.md) first. These explanations follow the workbook.

## Challenge 1 Content and navigation

create `<section id="learning">` with an h2 and p inside main; add `<a href="#learning">`Now learning`</a>` inside #nav-links. Style it using the existing container and section classes. The menu's link-click handler already handles this new anchor because it listens on the wrapper.

## Challenge 2 Card spacing

change .card-body padding from 1.4rem to 1.75rem. Do not add a fixed card width. border-box keeps declared sizing predictable, while Grid controls track widths.

## Challenge 3 Responsive layout

change the project Grid min-width query to 700px. The navigation breakpoint is independent. To move it too, change both the CSS max-width: 639px menu query and the JavaScript matchMedia query to 699px. Keep related conditions synchronized and retest boundary widths.

## Challenge 4 Interaction

add a button with data-filter="other" and aria-pressed="false" inside #filters, then an article with data-category="other" inside .projects-grid. No JavaScript logic changes are required if the DOM elements exist before the deferred script runs. The function reads categories rather than hard-coding button names. If there are zero matches, the existing count reports “0 projects shown”; a richer empty-state message is an optional improvement.

## Challenge 5 Delivery

edit, save, inspect with git diff, stage the changed file, inspect git diff --cached, commit with a clear message, push and wait for a successful deployment. Record the changed sentence and live URL. A repository screenshot alone does not prove the live page changed.
