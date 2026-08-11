# Rahul Sharma — Deccan AI Portfolio

An impact-first, responsive portfolio built from Rahul's completed-work TSV.

## Preview it on your computer

Opening `index.html` directly will show the main site, but browsers block the TSV archive when a page uses a `file://` URL. Start a tiny local server instead:

```powershell
cd "C:\Users\pvrns\Downloads\Rahul deccanAI Portfolio"
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Stop the server with `Ctrl+C`.

## Does the site update by itself?

Partly. Here is exactly what happens.

**Updates automatically — no code changes needed**

The archive section and the four live counters (contributions, projects, types of work, items with recorded impact) are read from `RPDA - Overview.tsv` every time the page loads. Add a row to the TSV, refresh the browser, and they update on their own. The project filter dropdown also rebuilds itself from the data.

**Needs a manual edit — by design**

The big headline numbers, the Full Scorecard section, and the seven project write-ups live in `portfolio.js` inside the `portfolio` object. These are written as sentences a reader understands, so they cannot be guessed from a raw TSV cell. Update them only when a result is strong enough to belong on the front page.

**Needs a redeploy**

The hosted public site serves whatever files you last uploaded. After editing the TSV, upload the folder again (or push to GitHub) so visitors see the change. Locally, a browser refresh is enough.

## How only Rahul edits the portfolio

This is a public, read-only website. There is no public editor or admin password to leak.

1. Edit `RPDA - Overview.tsv` in Excel, Google Sheets, or a text editor.
2. Keep the existing column names.
3. Add one completed contribution per row.
4. Save or export as a tab-separated `.tsv` file with the same filename.
5. Redeploy the folder.

Visitors can view and search the work, but they cannot change the source files. Only someone with access to your computer or hosting account can publish edits.

The site intentionally ignores the `Stage` and `Skills Used` columns. You can leave them blank. The public archive uses:

- `Work Done`
- `Category`
- `Project`
- `Impact`

Write the `Impact` cell as a result, not a description. "Cut review time from 3 days to 4 hours" carries far more weight than "worked on review process".

## Deploy with Netlify Drop — easiest

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Sign in or create a free Netlify account.
3. Drag this entire `Rahul deccanAI Portfolio` folder onto the page.
4. Wait for the upload. Netlify will give you a public URL.
5. In **Site configuration → Change site name**, choose a clean name such as `rahul-sharma-ai-operations`.

To publish future edits, open your Netlify site's **Deploys** page and drag the updated folder there again.

## Deploy with GitHub Pages — best for version history

1. Create a new GitHub repository.
2. Upload these four files and the TSV:
   - `index.html`
   - `styles.css`
   - `portfolio.js`
   - `README.md`
   - `RPDA - Overview.tsv`
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. GitHub will show the public portfolio URL after deployment.

If the repository is public, people can see the source TSV even though they cannot edit it. Use Netlify Drop if you do not want the repository itself to be public.

## Before sharing publicly

The current portfolio intentionally keeps Deccan AI, project/client names, and colleague names exactly as requested. Confirm that sharing these details complies with your employment agreement and company confidentiality policy.

For a custom domain later, purchase a domain and connect it from Netlify's **Domain management** page.
