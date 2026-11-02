# Publish your portfolio

These steps explain the workbook's existing GitHub Pages workflow. They do not deploy this whole course repository. There is no package installation, build step, environment file or server process to configure for the final website.

## Put the right files at the source root

Complete the course in your separate `devfoundry-portfolio` working copy. Create your own GitHub portfolio repository in Module 5. Its top level must contain:

```text
index.html
style.css
script.js
assets/
README.md
.gitignore
```

Write your own project README in Module 5. The checkpoint README contains links to the surrounding course folder and should be replaced before publishing your standalone portfolio.

A **branch** is a line of repository history. A **publishing source** is the branch and folder the host reads. The workbook uses `main` and `/ (root)`, meaning the top level of that branch. The folder `06-final-project` inside this course repository is a reference implementation, not that publishing root.

If you are reviewing the reference, copy its contents into your own standalone portfolio folder before using the workbook's branch-deployment steps. Preserve relative asset paths. Replace the demo identity, metadata and contact address before making a real personal site public.

## Enable Pages

1. Push your portfolio source to your own GitHub repository. For the course's free Pages workflow, use a public repository.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select **main** and **/ (root)**, then save.
5. Wait for the Pages deployment to succeed. Inspect the latest run in Actions if it fails.
6. Open the exact website URL displayed in Pages. A project site includes the repository name in its path.

Use GitHub's official [publishing-source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) if the interface has changed. A push finishing successfully does not prove the live deployment succeeded.

## Verify the public site

- Confirm CSS, JavaScript and every image load from the project subpath.
- Test navigation, theme, mobile menu, Escape, resizing and filters.
- Check narrow screens and visible keyboard focus.
- Change one local sentence, inspect the change, commit and push it.
- Wait for deployment, then verify the sentence at the public URL.
- Record that URL and the verified commit in your README and test log.

`assets/project-1.svg` is a relative path. `/assets/project-1.svg` starts at the domain root and can fail on a project site. Do not change the existing relative paths to the latter form.

## Maintainer publication status

The course repository is published at [DevFoundy/devfoundry-first-website](https://github.com/DevFoundy/devfoundry-first-website). The workbook is linked from its README. No course Pages website or learner portfolio has been deployed as part of this publication. Licensing remains pending owner approval. A local subpath preview verifies path handling, but is not proof of a completed GitHub Pages deployment. See [verification](verification.md) for the checks actually performed.
