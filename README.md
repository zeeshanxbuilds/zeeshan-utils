# Zeeshan Tool

[![Version](https://img.shields.io/github/v/release/zeeshanxbuilds/zeeshan-utils?color=%230567ff&label=Latest%20Release&style=for-the-badge)](https://github.com/zeeshanxbuilds/zeeshan-utils/releases/latest)
![Downloads](https://img.shields.io/github/downloads/zeeshanxbuilds/zeeshan-utils/winutil.ps1?label=Total%20Downloads&style=for-the-badge)

A curated compilation of Windows system tasks streamline **installs**, debloat with **tweaks**, troubleshoot with **config**, and configure **Windows updates**. Run it fresh on every new Windows install.

![Title Screen](docs/src/assets/branding/title-screen.png)


---

## Quick Start

> **Zeeshan Tool must be run as Administrator** because it performs system-wide changes.

Open PowerShell or Terminal as admin, then run:

**Stable Branch (recommended)**
```ps1
irm https://zeeshan.cv/win | iex
```

**Development Branch**
```ps1
irm https://zeeshan.cv/windev | iex
```

### How to open an admin terminal

- **Start menu:** Right-click Start → *Windows PowerShell (Admin)* or *Terminal (Admin)*
- **Search:** Press the `Windows key`, and type `PowerShell` or `Terminal`, then `Ctrl + Shift + Enter`

---

## Automation / Presets

Apply a predefined configuration without manual selection:

```powershell
& ([ScriptBlock]::Create((irm https://zeeshan.cv/win))) -Preset Standard
```

| Preset | Description |
|--------|-------------|
| `Standard` | Balanced defaults for most users |
| `Minimal` | Minimal changes to suit every user |
| `Advanced` | Deep tweaks for power users |

To view exactly what each preset does, see:
https://github.com/zeeshanxbuilds/zeeshan-utils/blob/main/config/preset.json

---

## Build & Develop

See https://github.com/zeeshanxbuilds/zeeshan-utils/blob/main/.github/CONTRIBUTING.md

---

## Resources

- [Official Documentation](https://zeeshan.cv/)
- [Zeeshan Tool Website](https://zeeshan.cv/)
- [Known Issues](https://zeeshan.cv/knownissues/)
- [Report an Issue](https://github.com/zeeshanxbuilds/zeeshan-utils/issues)

---

## Support

- Leave a ⭐ to show support!

## Sponsors

These are the sponsors that help keep this project alive with monthly contributions.

<!-- sponsors --><!-- sponsors -->


---

## Contributors

[![Contributors](https://contrib.rocks/image?repo=zeeshanxbuilds/zeeshan-utils)](https://github.com/zeeshanxbuilds/zeeshan-utils/graphs/contributors)

Thanks to everyone who has contributed time and effort to this project. Keep rocking 🍻

Credit: forked from Chris Titus Tech.
