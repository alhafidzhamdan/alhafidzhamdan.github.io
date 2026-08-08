# ecDNA simulations

Interactive simulations of extrachromosomal DNA (ecDNA) birth and evolution, built to
accompany [EpiTracer](https://github.com/alhafidzhamdan/EpiTracer). Amplicons are modelled
on EGFR/chr7 (and MYCN/chr2) to mirror EpiTracer's plotting.

`index.html` is a **tabbed hub** (browser-style tabs) that embeds the four scenario pages
below via iframes: **Neutral drift**, **Under selection**, **Micronucleus · TRA**, and
**Spatial · niches**. Each scenario is also a **self-contained static HTML page** (inline
CSS/JS, theme-aware) that works on its own. Live: https://alhafidzhamdan.github.io/simulations/

## Contents

| File | What it shows | Published |
| :--- | :--- | :--- |
| `ecdna_birth_neutral_100div.html` | One acentric ecDNA born by excision in the founder; **neutral** replication + random segregation over 100 divisions. Copy-number composition, retention curve, genome profiles at checkpoints. Shows neutral loss with transient amplification. | [artifact](https://claude.ai/code/artifact/20b2bf87-d880-47c3-81a8-594682b7bedd) |
| `ecdna_selection_structural_100div.html` | Same founder episome under **positive selection** to division 100, with intramolecular rearrangements seeded at divisions 20 (DUP + DEL) and 50 (inversion → h2h/t2t) — all SV types except TRA. Amplification, structural clonal sweeps, and `plot_sv_linear`-style genome profiles with the founder circularisation SV highlighted, its read support climbing to a maximum at division 100, and the **excision scar** shown from division 2 (low, flat, chromosomal). | [artifact](https://claude.ai/code/artifact/80961021-05cb-4df8-966d-556bf7a5b174) |
| `ecdna_micronuclei_TRA_100div.html` | A **second origin mechanism**: micronucleus → chromothripsis → a hybrid ecDNA fusing two non-homologous loci, **EGFR (chr7)** and **MYCN (chr2)**, via an inter-chromosomal **TRA** (no excision scar). Two-fragment hub amplified under selection to division 100, drawn as a concatenated chr7‖chr2 profile with the founder TRA between the chromosomes and its read support rising to a maximum at division 100. | — |
| `ecdna_spatial_niches_100div.html` | **Spatial selection** across two tumour niches (A, B) that start identical. Each is its own Wright–Fisher population; niche A gets a local fitness advantage ∝ copy number while niche B stays neutral. A scrubable spatial cell-map (coloured by copy number) plus the diverging mean-copy trajectories show ecDNA spatial heterogeneity emerging — A amplifies and fixes, B drifts to loss. | — |

## Model (shared)

- ecDNA is **created once, in the founder** (excision → circularisation). No re-excision.
- Each division: every circle **replicates** (k → 2k), then the copies **segregate at random**
  (`Binomial(2k, ½)`) to the two daughters — acentric, so no equal partition.
- Neutral sim: Wright–Fisher resample to fixed N, no fitness effect.
- Selection sim: fitness-weighted resample, `w = 1 + s·k·(EGFR dosage)`; rearranged,
  higher-dosage variants sweep. Intramolecular SVs only (a lone circle cannot translocate).

## Iterating

These are self-contained (inline CSS/JS, no external dependencies) and theme-aware
(re-render on light/dark toggle). Edit the file, then re-publish via the Artifact tool to
update the same URL, or wrap and open locally to preview.
