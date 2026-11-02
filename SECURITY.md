# Security policy

## Scope

This repository contains a course workbook, documentation, original visuals and static HTML, CSS and JavaScript examples. The final portfolio has no backend, accounts, database, package dependencies or private API credentials. No dedicated security team or response-time commitment is advertised.

The maintained reference examples are `05-javascript-complete/` and `06-final-project/`. Earlier checkpoints are intentionally incomplete learning stages; reports affecting their security are still welcome. A layout exercise being incomplete is not itself evidence of a security vulnerability.

## Report a security concern

When the repository is hosted on GitHub, check **Security → Report a vulnerability**. If private reporting is enabled, use that channel and include the affected file, steps to reproduce, realistic impact, and a suggested correction if you have one.

If that option is unavailable, do not post sensitive details publicly. Open a non-sensitive request asking the maintainers for a private reporting channel, or use GitHub's own support/reporting tools for a platform or account issue. No private email address or advisory service is currently configured by this repository.

Ordinary broken links and visual bugs can use a normal issue. Never include a real credential, someone's private information or exploit details in a public report just to demonstrate the problem.

## Protect your own information

- Never commit API keys, passwords or access tokens.
- Do not expose private personal information in examples, screenshots or test logs.
- Frontend JavaScript is visible to visitors and cannot safely store private credentials.
- A public GitHub Pages website exposes its published files. Review them before deploying.
- If a real secret was committed, revoke or rotate it immediately; deleting the visible line does not remove it from existing Git history or copies.

## Boundaries and limitations

The supplied interactions read local theme preferences, react to native controls and filter existing cards. They do not authenticate visitors or process form submissions. User-entered text or remotely supplied HTML is not a feature of the reference. Future code must not introduce credential exposure or unsafe insertion of untrusted HTML. A new form service, backend or external dependency changes the project's security boundary and needs its own review.

Example identity and contact values are clearly labelled demonstrations. There is no guarantee that a learner's modified portfolio remains equivalent to the reference.
