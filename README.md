# alhafidzhamdan.github.io

Source for [**alhafidzhamdan.github.io**](https://alhafidzhamdan.github.io) — the
personal academic website of **Alhafidz Hamdan**, ECAT SCREDS Clinical Lecturer
& Honorary Pathology Resident (Cancer Research UK Scotland Centre, Edinburgh). A
single-page [Jekyll](https://jekyllrb.com/) site on GitHub Pages, plus an
interactive [ecDNA simulations](https://alhafidzhamdan.github.io/simulations/)
subsite.

## What lives where

| To change… | Edit |
| :--- | :--- |
| Name, role, email, social links, CV, photo | `_config.yml` — the `author:` and `social:` blocks |
| Bio / research prose | `index.html` — the section banners (`<!-- ABOUT -->`, `<!-- RESEARCH -->`, …) |
| Publications | `_data/publications.yml` |
| Collaborative / consortium papers | `_data/collaborative.yml` |
| Software & tools | `_data/software.yml` |
| Datasets | `_data/datasets.yml` |
| Google Scholar metrics | `_data/scholar.yml` (auto-updated — see below) |
| Colours / fonts / layout | `assets/css/style.css` |

Each `_data/*.yml` file has a header comment describing its fields. For a
publication only `title` is required; add `doi`, `url`, or `pdf` to show link
buttons. The `index.html` sections are, in order: **About**, **Bio**,
**Research**, **Software**, **Datasets**, and **Publications** (with the Scholar
metrics and collaborative papers).

## Google Scholar metrics

`_data/scholar.yml` (citations, h-index, i10-index) is refreshed **weekly** by
[`.github/workflows/update-scholar.yml`](.github/workflows/update-scholar.yml)
via SerpApi. Edit it by hand only to override between runs.

## Preview locally (optional)

```bash
bundle install            # first time only
bundle exec jekyll serve  # then open http://localhost:4000
```

No Ruby/Bundler? Skip it and just push — GitHub Pages builds the site.

## Deployment

The site is live at **https://alhafidzhamdan.github.io** and rebuilds
automatically on every push to `main` (GitHub Pages, *Deploy from a branch →
`main` / root*). There is no manual build step.
