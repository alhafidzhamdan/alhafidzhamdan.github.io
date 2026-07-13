# Personal academic website

Source for **Alhafidz Hamdan's** personal website — a single-page Jekyll site
hosted free on GitHub Pages. Design inspired by
[michaeldnicholson.github.io](https://michaeldnicholson.github.io/).

## Editing the site

Almost everything lives in a few files:

| What you want to change            | File to edit                       |
|------------------------------------|------------------------------------|
| Name, title, email, social links   | `_config.yml`                      |
| Bio, research text, contact         | `index.html` (look for `EDIT ME`)  |
| Publications                        | `_data/publications.yml`           |
| Your photo                          | replace `assets/img/profile.svg` with `assets/img/profile.jpg` and update `photo:` in `_config.yml` |
| Colours / fonts / layout            | `assets/css/style.css`             |

Add a publication by copying an entry in `_data/publications.yml`. Only `title`
is required; add `doi`, `url`, or `pdf` to show link buttons.

## Preview locally (optional)

```bash
bundle install          # first time only
bundle exec jekyll serve # then open http://localhost:4000
```

If you don't have Ruby/Bundler, you can skip this and just push — GitHub builds
the site for you.

## Publishing to GitHub Pages (main personal site)

1. Create a **new public repository named exactly `<your-username>.github.io`**
   (for example `alhafidzhamdan.github.io`).
2. Set `url:` in `_config.yml` to `https://<your-username>.github.io`.
3. Push this folder to that repo's `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
4. In the repo on GitHub: **Settings → Pages → Build and deployment → Source:
   Deploy from a branch → `main` / `root`**.
5. Wait ~1 minute, then visit `https://<your-username>.github.io`.

## Using a custom domain later

Add a file named `CNAME` containing your domain (e.g. `www.example.com`), set it
under **Settings → Pages → Custom domain**, and point a `CNAME`/`ALIAS` DNS record
at `<your-username>.github.io`.
