# Gramps Web Neutral Symbols Fork

A focused fork of the Gramps Web frontend with religion-neutral genealogical symbols.

## Overview

This project is a small but thoughtful modification of the Gramps Web frontend interface.

Its purpose is to provide a more religion-neutral visual style for genealogical data display, especially for birth and death markers used in family trees.

Genealogy often connects people from many different backgrounds and beliefs within the same family line:

* Muslims
* Christians
* Jews
* Buddhists
* secular relatives
* mixed-faith families
* and many others

This fork replaces some traditional religious-style symbols with neutral alternatives while fully preserving the original genealogical data and structure.

The goal is not to remove history or identity, but to create an interface that feels respectful and comfortable for everyone.

This fork is intentionally minimal. It focuses on a small, maintainable interface change rather than broad product divergence.

---

## Philosophy

Software interfaces shape emotional perception.

Small visual details, especially symbols associated with life, death, and family history, may feel deeply personal to users from different cultures and traditions.

This fork aims to offer:

* a calmer and more universal visual language
* neutral genealogy symbols
* compatibility with diverse cultural backgrounds
* a welcoming interface for all families

---

## Project goals

* Maintain compatibility with upstream Gramps Web
* Preserve the original data model
* Avoid altering user-entered historical information
* Keep changes minimal and maintainable
* Provide a clean and neutral visual experience

---

## Non-goals

This project does **not**:

* remove religious data from records
* alter family history
* censor cultural identity
* modify genealogy structures

Only certain interface symbols are visually adjusted.

---

## Screenshot

![Screenshot of the Gramps Web Neutral Symbols Fork](screenshot_farit.png)

---

## Installation

For local testing from this fork:

```powershell
docker compose down
docker compose up --build -d
```

This builds the frontend from the local repository and runs it with the Gramps Web API image.

---

## Upstream project

This project is based on the excellent work of the Gramps community:

* [Gramps Web](https://github.com/gramps-project/gramps-web/blob/main/README.md)
* [Gramps Project](https://gramps-project.org)

Please support the original developers and contributors who make these projects possible.

---

## About the author

I am a Bashkir genealogist and long-time Gramps user.

This project grew naturally from years of working with multilingual family history, genealogy software, and Bashkir localization efforts. Bashkir language support was recently added to Gramps releases. [GitHub][1]

I believe genealogy software should help people feel connected, not separated, by history.

---

## Contributions

Suggestions, discussions, translations, and respectful feedback are welcome.

---

## License

This repository follows the same license as the upstream Gramps Web project.

[1]: https://github.com/gramps-project/gramps/releases "Releases · gramps-project/gramps"
