# Synchronizing with Upstream

This fork follows `gramps-project/gramps-web` and keeps a deliberately small
set of fork-specific changes: neutral birth and death symbols.

## Before You Start

Review [CHANGES_SYMBOLS.md](./CHANGES_SYMBOLS.md). The fork-specific code must
continue to use these shared exports from `src/icons.js`:

- `birthSymbol` and `deathSymbol` for text;
- `birthIcon` and `deathIcon` for inline SVGs.

## Sync Procedure

1. Fetch the latest upstream `main` branch and merge or rebase it into the
   fork branch.
2. Resolve conflicts by preserving the semantic symbol exports in
   `src/icons.js` and their imports in the affected views.
3. Search for hard-coded birth and death markers before finishing. New views
   should reuse the shared exports rather than introducing `*`, `∗`, or `†`.
4. Run the validation commands:

   ```sh
   npm ci
   npm run lint
   npm run typecheck
   npm test
   npm run build
   ```

5. Build the container with `docker compose up --build` and visually check
   person cards, family views, person lists, tree charts, and relationship
   charts.

## Container Image Updates

The API image in `Dockerfile` is pinned to make builds reproducible. Update
that version only as a separate, tested change after confirming that the API
is compatible with the checked-out frontend source.
