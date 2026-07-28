# Symbol Changes in This Fork

This document explains the birth and death symbol changes used in `Irnazar/gramps-web`.

## Summary

This fork replaces traditional genealogical birth and death symbols with more neutral alternatives:

- birth: `/`
- death: `\`

## Why This Fork Uses Neutral Symbols

Family trees often include people from different religious and cultural backgrounds, sometimes within the same immediate family.

This fork uses neutral symbols because they are:

- less tied to a specific religious tradition;
- easier to present in mixed-faith family histories;
- simple and lightweight to maintain;
- consistent across cards, lists, and charts.

## Fork Status

This is a fork-specific change.

- It is maintained for `Irnazar/gramps-web`.
- It is not currently intended for merge into upstream `gramps-web`.
- The idea was discussed publicly, but there was not enough broad interest to pursue it as an upstream change.

## Where the Change Applies

The updated symbols are used in:

- person cards;
- family views;
- person lists;
- tree charts;
- relationship charts;
- helper text renderers.

## Main Files

- `src/icons.js`
- `src/util.js`
- `src/components/GrampsjsFamily.js`
- `src/components/personListUtils.js`
- `src/charts/TreeChart.js`
- `src/charts/RelationshipChart.js`

## Detailed File Changes

Line numbers below refer to the fork after syncing with upstream `main` on 2026-06-06. They may shift later if upstream changes the surrounding code.

| File | Current lines | Upstream behavior | Fork behavior |
| --- | --- | --- | --- |
| `src/icons.js` | 7-8 | No shared text constants for birth/death symbols. Individual views hardcoded `*`, `∗`, or `†`. | Adds shared constants: `birthSymbol = '/'` and `deathSymbol = '\\'`. |
| `src/icons.js` | 7-25 | The upstream frontend uses an asterisk-shaped SVG path for birth and a Christian cross-shaped SVG path for death. | Exports `birthSymbol`, `deathSymbol`, `birthIcon`, and `deathIcon`; the visible icons are a forward slash and a backslash. |
| `src/util.js` | 54-58 | Imports upstream icon definitions. | Imports the explicit `birthIcon` and `deathIcon` names plus the shared text symbols. |
| `src/util.js` | 165-172 | Person snippets render the upstream birth and death icons. | Person snippets render the neutral icon definitions through their semantic names. |
| `src/util.js` | 528 | Person detail text hardcoded `∗` before the birth date. | Person detail text uses `${birthSymbol}` before the birth date. |
| `src/components/GrampsjsFamily.js` | 1-2 | Did not import shared birth/death symbols. | Imports `birthSymbol` and `deathSymbol` from `src/icons.js`. |
| `src/components/GrampsjsFamily.js` | 160-168 | Family parent rows hardcoded `∗` for birth and `†` for death. | Family parent rows render `${birthSymbol}` and `${deathSymbol}`. |
| `src/components/personListUtils.js` | 1-4 | Did not import shared birth/death symbols. | Imports `birthSymbol` and `deathSymbol` from `src/icons.js`. |
| `src/components/personListUtils.js` | 51-54 | Person list supporting text hardcoded `∗` for birth and `†` for death. | Person list supporting text renders `${birthSymbol}` and `${deathSymbol}`. |
| `src/charts/TreeChart.js` | 1-6 | Tree chart did not import shared birth/death symbols. | Imports `birthSymbol` and `deathSymbol` from `src/icons.js`. |
| `src/charts/TreeChart.js` | 279-304 | Tree chart labels hardcoded `*` before birth dates and `†` before death dates. | Tree chart labels render `${birthSymbol}` and `${deathSymbol}`. |
| `src/charts/RelationshipChart.js` | 1-5 | Relationship chart did not import shared birth/death symbols. | Imports `birthSymbol` and `deathSymbol` from `src/icons.js`. |
| `src/charts/RelationshipChart.js` | 468-488 | Relationship chart labels hardcoded `*` before birth dates and `†` before death dates. | Relationship chart labels render `${birthSymbol}` and `${deathSymbol}`. |

## Practical Effect

The visible UI change is intentionally small:

| Context | Before | After |
| --- | --- | --- |
| Birth in lists and charts | `* 1900` or `∗ 1900` | `/ 1900` |
| Death in lists and charts | `† 1980` | `\ 1980` |
| Birth icon in person snippets | asterisk-style SVG | slash-style SVG |
| Death icon in person snippets | cross-style SVG | backslash-style SVG |

## Implementation Rule

The fork should consistently use:

- `birthSymbol = '/'`
- `deathSymbol = '\\'`

If future UI components display birth or death dates, they should reuse the shared symbol definitions rather than hardcoding other signs directly in templates.
