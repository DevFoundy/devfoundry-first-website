# Git cheat sheet

| `Command` | What it does |
| --- | --- |
| `git --version` | Check that Git is installed |
| `git init` | Create a repository in the current folder |
| `git status` | Show staged, unstaged and untracked changes |
| `git diff` | Inspect unstaged text changes |
| `git add index.html` | Stage one file's current changes |
| `git add .` | Stage changes under the current directory |
| `git diff --cached` | Inspect the staged changes |
| `git commit -m "Message"` | Save the staged snapshot locally |
| `git log --oneline -5` | Review the five latest commits |
| `git remote -v` | Inspect remote repository addresses |
| `git push -u origin main` | First push and upstream setup |
| `git push` | Send new commits to the configured upstream |
| `git pull --ff-only` | Get remote changes only if a fast-forward is possible |

If pull refuses because histories diverged, stop and inspect rather than using force or discarding work. Pull is useful when the remote changed on another computer or in the web editor. It is not a substitute for committing your own local work. git status and reading the error are your first recovery tools.
