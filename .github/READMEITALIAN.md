# Zeeshan Tool

[![Version](https://img.shields.io/github/v/release/zeeshanxbuilds/zeeshan-utils?color=%230567ff&label=Latest%20Release&style=for-the-badge)](https://github.com/zeeshanxbuilds/zeeshan-utils/releases/latest)
![GitHub Downloads (specific asset, all releases)](https://img.shields.io/github/downloads/zeeshanxbuilds/zeeshan-utils/winutil.ps1?label=Total%20Downloads&style=for-the-badge)
[![Static Badge](https://img.shields.io/badge/Documentation-_?style=for-the-badge&logo=bookstack&color=grey)](https://zeeshan.cv/)

Questa utility è una raccolta di attività Windows che eseguo personalmente su ogni sistema che utilizzo. È progettata per snellire le *installazioni*, rimuovere i componenti superflui tramite *ottimizzazioni*, risolvere problemi tramite la *configurazione*, e riparare *aggiornamenti* di Windows. Sono estremamente selettivo riguardo ai contributi per mantenere questo progetto pulito ed efficiente.

![screen-install](/docs/src/assets/branding/title-screen.png)

## 💡 Come usarlo

Winutil deve essere eseguito con privilegi di amministratore, poiché apporta modifiche all'intero sistema. Per farlo, avvia PowerShell come amministratore. Ecco alcuni modi per procedere:

1. **Metodo del menu di Start:**
   - Fai clic con il tasto destro sul menu Start.
   - Scegli "Windows PowerShell (esegui come Amministratore)" (per Windows 10) o "Terminale (esegui come Amministratore)" (per Windows 11).

2. **Metodo tramite ricerca:**
   - Premi il tasto Windows.
   - Digita "PowerShell" o "Terminal" (per Windows 11).
   - Premi `Ctrl + Shift + Invio` oppure fai clic con il tasto destro e seleziona "Esegui come amministratore" per avviarlo con privilegi elevati.

### Comando di avvio

#### Branch stabile (Consigliato)

```ps1
irm "https://zeeshan.cv/win" | iex
```
#### Branch Sviluppatore

```ps1
irm "https://zeeshan.cv/windev" | iex
```

### Automazione

Winutil supporta anche preset predefiniti che applicano automaticamente configurazioni comuni:

- `Standard`
- `Minimal`
- `Advanced`

Esempio:

```powershell
& ([ScriptBlock]::Create((irm "https://zeeshan.cv/win"))) -Preset Standard
```

Per vedere esattamente cosa fa ogni preset, consulta:
https://github.com/zeeshanxbuilds/zeeshan-utils/blob/main/config/preset.json

In caso di problemi, consulta i [Problemi noti](https://zeeshan.cv/knownissues/) o [Apri una segnalazione](https://github.com/zeeshanxbuilds/zeeshan-utils/issues)

## 🎓 Documentazione

### [Documentazione ufficiale di WinUtil](https://zeeshan.cv/)


### [Sito di Zeeshan Tool](https://zeeshan.cv/)

## 🛠️ Build & Sviluppo

> [!NOTE]
> Winutil è uno script piuttosto esteso, per questo è suddiviso in più file che vengono combinati in un unico file `.ps1` tramite un compilatore personalizzato. Questo rende la manutenzione del progetto molto più semplice.

Ottieni una copia del codice sorgente. Puoi farlo tramite l'interfaccia di GitHub (**Code** > **Download ZIP**), oppure clonando (scaricando) la repo tramite git.

Se git è installato, esegui i seguenti comandi in una finestra PowerShell per clonare e accedere alla directory del progetto:
```ps1
git clone --depth 1 "https://github.com/zeeshanxbuilds/zeeshan-utils.git"
cd winutil
```

Per compilare il progetto, esegui lo script di compilazione in una finestra PowerShell (i permessi di amministratore NON sono richiesti):
```ps1
.\Compile.ps1
```

Troverai un nuovo file chiamato `winutil.ps1`, creato dallo script `Compile.ps1`. Ora puoi eseguirlo come amministratore e apparirà una nuova finestra. Goditi la tua versione compilata di WinUtil :)

> [!TIP]
> Per ulteriori informazioni sull'utilizzo di WinUtil e su come contribuire allo sviluppo, ti invitiamo a leggere le [Linee guida per i contributi](https://zeeshan.cv/contributing/). Se non sai da dove iniziare o hai domande, puoi chiedere sul nostro [forum GitHub Discussions](https://github.com/zeeshanxbuilds/zeeshan-utils/discussions); i membri attivi del progetto risponderanno appena possibile.

## 💖 Supporto
- Per sostenere il progetto moralmente e mentalmente, non dimenticare di lasciare una ⭐️!

## 💖 Sponsor

Questi sono gli sponsor che aiutano a mantenere vivo il progetto con contributi mensili.

<!-- sponsors --><!-- sponsors -->

## 🏅 Grazie a tutti i collaboratori
Un ringraziamento speciale per aver dedicato il vostro tempo ad aiutare Winutil a crescere. Grazie mille! Continuate così 🍻.

[![Contributori](https://contrib.rocks/image?repo=zeeshanxbuilds/zeeshan-utils)](https://github.com/zeeshanxbuilds/zeeshan-utils/graphs/contributors)

## 📊 Statistiche GitHub
