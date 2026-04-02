# portfolio
Portfolio page of Dr. Jingjing Lin

## Customize your own content

All page content is now loaded from `content.js`.

1. Edit `content.js` to update your profile, about text, skills, projects, and contact email.
2. Run a local server from the repo root:
	- `python3 -m http.server 8000`
3. Open `http://localhost:8000/index.html`.

Your content is stored in this repository, so it remains stable across refreshes and sessions.

## Admin login and front-end editing

You can now edit the whole page from the browser:

1. Open the site and click `Admin` in the navigation.
2. Login with the credentials in `content.js` (`window.ADMIN_CONFIG`).
3. Edit the JSON in the admin editor and click `Save & Refresh`.

Notes:
- Browser edits are saved in `localStorage` for this browser.
- Click `Reset to Repo Defaults` in Admin to return to content from `content.js`.
- To permanently change defaults in the repository, edit `content.js` and commit.
- Admin is now visible only on local development hosts by default (`localhost`, `127.0.0.1`, `::1`, `.local`).
- On production domains (for example `researchic.com`), Admin is hidden.
- If you intentionally want Admin visible in production, set `window.ADMIN_CONFIG.exposeInProduction = true` in `content.js`.

### Temporary production admin switch (recommended)

Instead of always exposing Admin in production, use a temporary URL switch:

1. In `content.js`, set:
	- `window.ADMIN_CONFIG.productionAccessParam = "adminKey"`
	- `window.ADMIN_CONFIG.productionAccessToken = "your-long-random-token"`
2. Open your production site with the query parameter:
	- `https://researchic.com/?adminKey=your-long-random-token`
3. If token matches, Admin becomes visible for the current browser session.

Security behavior:
- The token parameter is removed from the URL after validation.
- Access is kept only in `sessionStorage` (tab session).
- Clicking `Logout` clears both admin login and production switch session.
