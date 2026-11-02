# Repository verification

Checked locally on 2 November 2026. This is a record of performed checks, not a hosted build badge or a full security audit.

## Preserved materials

- The 55-page workbook is byte-for-byte identical to the supplied high-quality PDF.
- All checkpoint HTML, CSS, JavaScript, illustration files and existing ignore files match the supplied downloads. Checkpoint READMEs were rewritten for stage clarity.
- HTML parsing checks found properly nested tags, unique IDs, matching fragment destinations, present local assets and image alt attributes. Every non-starter page has one main landmark and one h1. This is a structural check, not W3C validation.

## Browser checks

Local Chrome 156.0.8078.80 served the final reference under `/devfoundry-portfolio/` to model a project-site subpath. All 25 checks passed, including:

- CSS, JavaScript and images loaded without failed HTTP responses or unexpected JavaScript exceptions.
- Layouts at 320, 390, 639, 640, 768, 959, 960 and 1440 CSS pixels had no horizontal page overflow. Project columns changed at the expected boundaries.
- Native keyboard activation, visible skip-link focus, menu opening, link closing, Escape focus restoration and resize synchronization worked.
- Web, JavaScript and All filters showed 2, 1 and 3 cards respectively.
- Theme choice persisted on the same HTTP origin; blocking localStorage still allowed switching.
- Navigation links and all cards remained available with JavaScript disabled.
- Reduced-motion mode removed the card transition.
- The text, muted text and accent tokens exceeded 4.5:1 against the page background in both palettes. This is a palette check, not a claim of a complete WCAG audit.
- A 200% CSS zoom proxy retained content without horizontal overflow. Native browser zoom and real-device behavior should still be checked manually before a public release.
- Earlier checkpoints had the expected connected files: no CSS before checkpoint 03 and no script before checkpoint 05.

## Documentation and repository hygiene

Relative Markdown links and embedded images were checked after rendering with a GitHub-flavored Markdown parser. The README and HTML cheat sheet were also opened in the local browser preview. Tables and HTML code examples rendered as intended. The local preview is not GitHub's own renderer.

No actual credentials were found by a targeted token/private-key pattern check. This does not guarantee the absence of every secret. No `.DS_Store`, nested Git history, dependencies or generated review files are included in the distribution. Demo contact information is labelled in the examples and documentation.

## Not verified or not finalized

- The course repository has been published at [DevFoundy/devfoundry-first-website](https://github.com/DevFoundy/devfoundry-first-website). A hosted GitHub Pages deployment and live portfolio update have **not** been performed or verified.
- Licensing is pending at the owner's request; no open-source license is granted yet.
- Native browser zoom, Firefox, Safari and physical mobile devices were not tested during this preparation.
- Private security reporting and a private conduct contact have not been configured. The policies describe available reporting choices without inventing a channel.

[Publishing checklist](publishing.md) · [Content synchronization](content-notes.md) · [License status](../LICENSE)
