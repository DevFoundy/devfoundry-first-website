# Contributing to DevFoundry

Thanks for helping make the course easier to follow. Useful contributions include typo corrections, broken-link reports, accessibility improvements, documentation improvements, example-code bugs, clearer beginner explanations and cross-browser issues.

**Licensing is pending.** You can review the files and suggest changes, but maintainers should settle the license before accepting contributions under an agreed reuse license. Do not assume a pending proposal licenses your contribution.

## A focused contribution

1. **Fork** the repository: create a copy on your GitHub account.
2. Download or clone your fork, then create a **branch**, a separate line of work for your change.
3. Make one focused improvement. Preserve the beginner-readable HTML, CSS and JavaScript; do not add frameworks or build tools.
4. Test the affected material. For prose, check Markdown and links. For code, open the affected checkpoint and check the relevant behavior. Responsive and interaction checks are in [the test log](challenges/test-log.md).
5. Commit with a message describing the change. A commit records your selected changes in history.
6. Push your branch and open a **pull request**, asking the maintainers to review it for inclusion.

In the pull request, explain **what changed, why, and how you tested it**. A screenshot helps with visible changes; include the browser and viewport when reporting a layout issue.

## Keep the workbook and examples aligned

The [PDF](course/DevFoundry-Build-and-Deploy-Your-First-Website.pdf) is the authoritative course. If an instruction or example is wrong, identify the lesson, describe the problem and propose the smallest correction. Explain changes to technical instructions; do not silently replace the teaching approach. Update each affected checkpoint and document the workbook change in [content notes](docs/content-notes.md).

Code snippets in Markdown belong in backticks or fenced code blocks so GitHub does not interpret HTML examples as live tags. Keep links relative when referring to files in this repository.

## Report a problem

For ordinary bugs or documentation issues, use the repository's Issues tab when hosted on GitHub. Include the lesson or file, expected result, actual result and steps to reproduce. Remove private information from screenshots. Follow [SECURITY.md](SECURITY.md) for sensitive reports and the [Code of Conduct](CODE_OF_CONDUCT.md) when participating.
