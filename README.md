# Vercel GitHub Profile Viewer

This project displays a GitHub profile and top repositories for a fixed username (devashishkumar), with a dark/light mode toggle.

## Files

- index.html: page structure and layout.
- app.js: client-side logic to fetch GitHub API data and render profile + repos.
- README.md: documentation (this file).

## Features

- Dark/Light mode toggle via 	heme-toggle button.
- Fetches GitHub user data from https://api.github.com/users/devashishkumar.
- Fetches up to 12 most recently updated repos.
- Renders profile card, stats, and repo cards in a responsive grid.

## index.html behavior

- Adds dark class to <html> by default for dark theme.
- Uses Tailwind CSS CDN with darkMode: 'class'.
- Contains #profile and #repos containers.
- Includes the app.js script at the bottom.

## app.js behavior

1. Defines username = 'devashishkumar'.
2. Attaches click listener to #theme-toggle to toggle dark mode class.
3. fetchProfile() calls GitHub Users API and returns JSON.
4. fetchRepos() calls GitHub Repos API (sorted by updated) and returns JSON.
5. displayProfile(user) renders avatar, name, login, bio, followers, following, public repos, and profile link.
6. displayRepos(repos) renders repo cards (excludes repo named devashishkumar) with name, description, language, and stars.
7. init() loads profile + repos and renders them.

## Run locally

1. Open index.html in a browser (no build step required).
2. Or use a local static server (e.g. 
px serve, python -m http.server).

## Customize

- Change username in app.js to display another user.
- Adjust repo filter or fields in displayRepos() as needed.

## Notes

- Uses public GitHub API; may be rate-limited (60 requests/hour per IP without auth).
- Add API token support and error handling if needed for production use.

## License

MIT
