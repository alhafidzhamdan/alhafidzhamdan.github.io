# alhafidzhamdan.github.io

Source for [alhafidzhamdan.github.io](https://alhafidzhamdan.github.io) — the
personal academic website of **Alhafidz Hamdan**, ECAT SCREDS Clinical Lecturer
& Honorary Pathology Resident, Edinburgh. A single-page
[Jekyll](https://jekyllrb.com/) site on GitHub Pages.

## What to edit

| Change | File |
| :--- | :--- |
| Name, role, email, social links, CV, photo | `_config.yml` |
| Bio / research prose | `index.html` |
| Publications · collaborative papers | `_data/publications.yml` · `_data/collaborative.yml` |
| Software · datasets | `_data/software.yml` · `_data/datasets.yml` |
| Scholar metrics | `_data/scholar.yml` (auto-updated weekly by `.github/workflows/update-scholar.yml`) |
| Colours / fonts / layout | `assets/css/style.css` |

Each `_data/*.yml` has a header comment describing its fields.

## Develop

```bash
bundle exec jekyll serve   # preview at http://localhost:4000
```

Live at **https://alhafidzhamdan.github.io**; rebuilds on every push to `main`
(GitHub Pages).
