# Contributing to This Fork

Thank you for your interest in improving this fork of the Gramps Web frontend.

## Project Focus

This fork is intentionally focused on a small set of goals:

- religion-neutral genealogical symbols;
- lightweight frontend customization;
- minimal divergence from upstream;
- respectful presentation for multi-faith family histories.

Please keep that scope in mind when proposing changes.

## What Fits This Fork Well

Good contribution areas include:

- improvements to neutral symbol display;
- consistency fixes across views and charts;
- small UX improvements that support the fork's purpose;
- documentation updates;
- English-first documentation, with future support for Russian and Bashkir.

## Before Opening a Large Change

If the change is more than a small fix, please open an issue first so the proposal can be discussed before implementation.

## Upstream vs Fork-Specific Changes

This repository is a fork, not the main Gramps Web frontend project.

- If your change is specifically about this fork's neutral presentation goals, open it here.
- If your change is a general Gramps Web frontend feature or bug unrelated to this fork's focus, the upstream project may be the better place for it:
  [gramps-project/gramps-web](https://github.com/gramps-project/gramps-web)

## Development

For local testing in this fork, use the repository's Docker-based setup:

```powershell
docker compose up --build -d
```

This repository also includes a local multi-stage `Dockerfile` for building the frontend from source.

## Code of Conduct

Please read and follow [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

## Credits

This fork builds on the work of the upstream Gramps Web maintainers and contributors, whose work is gratefully acknowledged.
