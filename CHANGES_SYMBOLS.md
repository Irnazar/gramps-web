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

## Implementation Rule

The fork should consistently use:

- `birthSymbol = '/'`
- `deathSymbol = '\\'`

If future UI components display birth or death dates, they should reuse the shared symbol definitions rather than hardcoding other signs directly in templates.
