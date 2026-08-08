# ecDNA simulations

Interactive simulations of extrachromosomal DNA (ecDNA) birth and evolution, built to
accompany [EpiTracer](https://github.com/alhafidzhamdan/EpiTracer). Amplicons are modelled
on EGFR/chr7 (and MYCN/chr2) to mirror EpiTracer's plotting.

`index.html` is a **tabbed hub** (browser-style tabs) that embeds the five scenario pages
below via iframes: **Neutral drift**, **Under selection**, **Micronucleus · TRA**,
**Spatial · niches**, and **HSR ↔ ecDNA**. Each scenario is also a **self-contained static
HTML page** (inline CSS/JS, theme-aware) that works on its own.
Live: https://alhafidzhamdan.github.io/simulations/

## Contents

| File | What it shows | Published |
| :--- | :--- | :--- |
| `ecdna_birth_neutral_100div.html` | One acentric ecDNA born by excision in the founder; **neutral** replication + random segregation over 100 divisions. Copy-number composition, retention curve, genome profiles at checkpoints. Shows neutral loss with transient amplification. | [artifact](https://claude.ai/code/artifact/20b2bf87-d880-47c3-81a8-594682b7bedd) |
| `ecdna_selection_structural_100div.html` | Same founder episome under **positive selection** to division 100, with intramolecular rearrangements seeded at divisions 20 (DUP + DEL) and 50 (inversion → h2h/t2t) — all SV types except TRA. Amplification, structural clonal sweeps, and `plot_sv_linear`-style genome profiles with the founder circularisation SV highlighted, its read support climbing to a maximum at division 100, and the **excision scar** shown from division 2 (low, flat, chromosomal). | [artifact](https://claude.ai/code/artifact/80961021-05cb-4df8-966d-556bf7a5b174) |
| `ecdna_micronuclei_TRA_100div.html` | A **second origin mechanism**: micronucleus → chromothripsis → a hybrid ecDNA fusing two non-homologous loci, **EGFR (chr7)** and **MYCN (chr2)**, via an inter-chromosomal **TRA** (no excision scar). Two-fragment hub amplified under selection to division 100, drawn as a concatenated chr7‖chr2 profile with the founder TRA between the chromosomes and its read support rising to a maximum at division 100. | — |
| `ecdna_spatial_niches_100div.html` | **A central founder, spread, then a niche decides.** A tumour section of grey host cells; a single ecDNA+ founder is born in the **centre** (nowhere near a niche). For the first **n** divisions the clone spreads neutrally outward in all directions until it **reaches both niches**. After division n, selection switches on **inside niche A only** (fitness ∝ copy number) while **niche B stays neutral**: the ecDNA **amplifies into a hotspot in A** and merely **drifts (thinning toward loss) in B** and the background. Scrubable bird's-eye map (host cells grey, ecDNA+ cells by copy number, founder origin marked) plus per-region mean-copy trajectories with an `n` marker where selection begins. Controls: seed, `n` (neutral-spread divisions), niche-A selection strength. | — |
| `ecdna_hsr_interconversion_100div.html` | **ecDNA ↔ HSR interconversion**: the same EGFR amplicon lives as either acentric **ecDNA** (replicate + random `Binomial(2k, ½)` partition — fast but unstable) or a chromosomal **homogeneously staining region (HSR)** (a tandem array inherited intact by both daughters — stable, low-plasticity). Circles integrate into the array (rate `p(int)`) and array copies re-excise (rate `p(exc)`) under dosage selection. Shows the dosage hand-off from circles to the array, heterogeneity (CV) collapsing as the mirror image of the rising HSR share, and EpiTracer-style profiles decomposing the locus into a solid HSR block + ecDNA circles. | — |

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
