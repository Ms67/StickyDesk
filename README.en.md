# StickyDesk — sticky notes on your desktop

> Pin to-dos and ideas straight onto the desktop, always in sight. No installer, no sign-up, all data stays on your PC.

![Platform](https://img.shields.io/badge/platform-Windows%2010%20%2F%2011-0078D6?style=flat-square)
![Version](https://img.shields.io/badge/version-v1.0.1-E8B33A?style=flat-square)
![Portable](https://img.shields.io/badge/portable-unzip%20and%20run-4C9A6A?style=flat-square)
![Licence](https://img.shields.io/badge/licence-personal%20use%20only-B4432F?style=flat-square)
![Data](https://img.shields.io/badge/data-local%20only-6E675C?style=flat-square)

**[⬇ Download v1.0.1](https://github.com/Ms67/StickyDesk/releases/download/v1.0.1/StickyDesk-v1.0.1-win64.zip)** ・ [Website](https://ms67.github.io/StickyDesk/en.html) ・ [FAQ](#faq) ・ [中文说明](README.md)

---

## Download

Every version lives on the [Releases](https://github.com/Ms67/StickyDesk/releases) page; open the newest one and use its `Assets`.

| | |
| --- | --- |
| Latest version | **v1.0.1** (2026-11-17) |
| Package | `StickyDesk-v1.0.1-win64.zip` (about 43.9 MB) |
| System | Windows 10 / 11, 64-bit |
| Install | Portable — unzip and run, no installer, no admin rights |

### Three steps

1. Download `StickyDesk-v1.0.1-win64.zip` and **unzip it into an empty folder** (for example `D:\StickyDesk`);
2. Double-click `StickyDesk-V2.exe` — the sample notes appear on your desktop;
3. From then on everything lives in the **note icon in the notification area**: right-click for the menu, double-click to show all notes.

> `StickyDesk-V2.exe` and `stickydesk.db` must stay in the same folder — the app only reads the database next to it.
> Do not put them in `C:\Program Files` or any folder that needs administrator rights to write.

> The first run may show “Windows protected your PC”. The app has no code-signing certificate;
> click **More info → Run anyway**.

---

## Features

- **Notes live on the desktop itself** — they are attached to the desktop layer, so they survive `Win + D` and “Show desktop”, take no taskbar space, and never cover other windows.
- **Click and type** — click the note body to edit in place; there is no “Edit” button and changes save themselves. The title stays pinned while the body scrolls.
- **To-dos with due reminders** — items start with a hollow square: **click the square while editing to tick it** (click again to untick; `Ctrl + D` still works). Give any to-do a due time (`Ctrl + Shift + T`) and a countdown badge appears at the end of the line, with popups at 9:30 on the due day, 1 hour before, and 5 minutes before.
- **Images, links and folders** — paste a screenshot straight into a note; click a URL to open it in the browser, or a local path to open the folder in Explorer.
- **Global search** — tray menu → *Search notes* searches every note and jumps to the matching line.
- **Seven palettes** — yellow / green / pink / purple / blue / gray / charcoal, per note.
- **Move to a new PC without losing anything** — tray → *Migrate notes* packs the app and your data together. *Share with friends* builds a zip you can send directly (sample notes only, never your own data).
- **Always in the tray** — start with Windows, show/hide all notes, new note, Excel export and import.

---

## Data & privacy

- Notes are stored in `stickydesk.db` (SQLite) next to the app — **no network, no upload, no account**.
- Uninstalling means deleting the folder. To keep your notes, delete only the exe and keep `stickydesk.db`.
- On startup the app fetches one round of title-bar ad copy from a public list (with offline caching). That has nothing to do with your notes. **Non-Chinese systems load no ads at all.**
- Anonymous usage statistics: ad impressions / views / clicks, plus one “new user” record on first launch (random device id and version — no personal data, no note content). Batched every 30 minutes with automatic retry; leave `endpoint` empty in `ad_report.json` to turn it off completely.

---

## FAQ

**“Unknown publisher” or antivirus warning?**
Expected — the app is not code-signed. Click *More info → Run anyway*, or whitelist the folder.

**My notes disappeared.**
Double-click the note icon in the notification area (it may be folded into the `^` overflow). If the icon is gone too, the app is not running — start the exe again.

**Can I move my notes to another computer?**
Tray → *Migrate notes*, then unzip the pack on the new PC and double-click the exe. Everything comes across.

**How do I uninstall it?**
Quit from the tray menu, then delete the folder. Turn off *Launch at startup* in the tray menu first if you enabled it.

**Can I change the interface language?**
The UI follows the Windows display language: Chinese on Chinese systems, English everywhere else. To force one, start the app with `STICKYDESK_LANG=zh` or `STICKYDESK_LANG=en`.

---

## Licence

**Personal use only.** Commercial use, modification, reverse engineering and any form of redistribution are prohibited.

| | |
| --- | --- |
| ✅ Allowed | Install and run on devices you own or personally use; keep a backup copy; pass the **complete, unmodified** package on to other individuals free of charge |
| ❌ Not allowed | Use by or inside a company, agency, team or any organisation; selling, renting, bundling with hardware or services, charging in any form, third-party advertising; modifying, localising, repackaging, splitting or embedding into other products; decompiling, disassembling, unpacking, debugging or cracking; removing the ad slot, copyright marks or statistics; uploading modified / ad-free / renamed builds to download sites, app stores, cloud links or code hosting; sublicensing or transferring rights |

Full terms (Chinese and English) are in **[LICENSE](LICENSE)**. Any breach terminates the licence immediately and automatically, and you must delete every copy within 24 hours; the author reserves the right to pursue legal remedies.

---

## Changelog

### v1.0.1 — 2026-11-17

- **Hollow-square bullets**: main items and sub-items now start with a hollow square instead of a dot, with a tick drawn inside once done. While editing, click the square to tick an item, click again to untick (`Ctrl + D` and the format-bar ✓ still work).
- **No ads in the English UI**: non-Chinese systems get no ad slot and no ad fetching — the whole title row belongs to your title.
- **New-user statistic**: the first launch records one anonymous “new user” event, batched and retried like every other statistic.
- Older versions stay available in Releases, so you can always roll back.

### v1.0.0 — 2026-11-17

- First public release.
- Notes on the desktop, in-place editing, to-dos with due reminders, image/URL/folder detection, global search, seven palettes.
- Tray management: new note, show/hide, start with Windows, migration, share with friends, Excel import/export.
- Ad slot rotates hourly and is staggered between notes; copy is lighter and smaller so it never competes with your text.
- User interface follows the Windows display language: Chinese for Chinese systems, English everywhere else.

---

<sub>This repository ships the compiled app and documentation only; the source code is not published here.</sub>
