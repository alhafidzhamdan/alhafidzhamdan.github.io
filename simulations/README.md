# ecDNA simulations

Interactive simulations of episomal extrachromosomal DNA (ecDNA) birth and evolution,
built to accompany [EpiTracer](https://github.com/alhafidzhamdan/EpiTracer). The amplicon
is modelled on EGFR/chr7 to mirror EpiTracer's plotting.

Each file is **artifact-source HTML** — the page body only (styles + markup + script, no
`<html>`/`<head>`/`<body>` wrapper), designed to be published via the Claude Artifact
runtime. To view one standalone, wrap it in a minimal HTML document.

## Contents

| File | What it shows | Published |
| :--- | :--- | :--- |
| `ecdna_birth_neutral_100div.html` | One acentric ecDNA born by excision in the founder; **neutral** replication + random segregation over 100 divisions. Copy-number composition, retention curve, genome profiles at checkpoints. Shows neutral loss with transient amplification. | [artifact](https://claude.ai/code/artifact/20b2bf87-d880-47c3-81a8-594682b7bedd) |
| `ecdna_selection_structural_100div.html` | Same founder episome under **positive selection** to division 100, with intramolecular rearrangements seeded at divisions 20 (DUP + DEL) and 50 (inversion → h2h/t2t) — all SV types except TRA. Amplification, structural clonal sweeps, and `plot_sv_linear`-style genome profiles with the founder circularisation SV highlighted. | [artifact](https://claude.ai/code/artifact/80961021-05cb-4df8-966d-556bf7a5b174) |

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
