# 15967 — Texture HD Suite

Suite de ressources HD issue du DVD **3DTotal.com — Total Textures v1 (Release 2.0, 2006)**, organisée pour archivage et consultation rapide. Le dépôt regroupe la structure de lancement des deux disques (`Texture_HD_A`, `Texture_HD_B`) ainsi qu'un dossier `Musique` d'ambiance utilisé pendant la session de travail.

> Référence interne : **15967**
> Auteur de l'archive : **Delfosse Pascal**
> Plateforme cible originale : Windows (lancement via `autorun.inf` + `winopen.exe`).

---

## Sommaire

- [Présentation](#présentation)
- [Structure du dépôt](#structure-du-dépôt)
- [Description des tiroirs](#description-des-tiroirs)
- [Lancement de l'interface HTML](#lancement-de-linterface-html)
- [Politique de versionnage](#politique-de-versionnage)
- [Fichiers exclus du dépôt](#fichiers-exclus-du-dépôt)
- [Licence et droits](#licence-et-droits)
- [Contact](#contact)

---

## Présentation

Le projet **15967 Texture HD Suite** sert de point de montage pour la collection de textures haute définition originalement distribuée sur DVD par 3DTotal.com. L'arborescence d'origine du média a été conservée afin de garantir le bon fonctionnement de l'interface HTML (`index.htm`) et du lanceur natif (`winopen.exe`).

Seuls les **tiroirs de base** (dossiers racine) et leurs **fichiers de lancement** sont versionnés. Les contenus binaires lourds (images, PDF, vidéos, archives, audio) ainsi que les **sous-dossiers** ne sont pas suivis par Git — voir [Fichiers exclus du dépôt](#fichiers-exclus-du-dépôt).

---

## Structure du dépôt

```
15967_Texture_HD_Suite/
├── README.md              # Ce document
├── .gitignore             # Règles d'exclusion (médias + sous-dossiers)
│
├── Musique/               # Pistes audio d'ambiance (non versionnées)
│   └── .gitkeep
│
├── Texture_HD_A/          # Disque A — interface principale
│   ├── autorun.inf        # Lance index.htm via winopen.exe au montage
│   ├── index.htm          # Page HTML d'entrée (frameset)
│   ├── read_me.txt        # Notice originale 3DTotal
│   └── winopen.exe        # Lanceur Windows (ouvre index.htm plein écran)
│
└── Texture_HD_B/          # Disque B — second volume
    ├── autorun.inf
    ├── index.htm
    ├── read_me.txt
    └── winopen.exe
```

> Les sous-dossiers `gallery/`, `interface/`, `maps/`, `thumbs/`, `gettingstarted/`, `replace/` existent en local mais **ne sont pas suivis** par Git (voir `.gitignore`).

---

## Description des tiroirs

### `Texture_HD_A/`
Premier volume du DVD. Contient l'interface HTML principale (frameset trois zones : barre supérieure, panneau de gauche, zone centrale) ainsi que les ressources de navigation. Les sous-dossiers présents en local hors versionnage :

| Sous-dossier      | Rôle                                                |
|-------------------|-----------------------------------------------------|
| `gallery/`        | Aperçus haute définition des textures               |
| `gettingstarted/` | Tutoriels et pages d'introduction                   |
| `interface/`      | Frames HTML, CSS, JavaScript de l'UI                |
| `maps/`           | Cartes (bump, normal, spec…) associées aux textures |
| `replace/`        | Variantes de remplacement                           |
| `thumbs/`         | Vignettes utilisées par l'interface                 |

### `Texture_HD_B/`
Second volume, même schéma de lancement que `Texture_HD_A`. Contient un sous-ensemble réduit (`gallery/`, `interface/`, `maps/`, `thumbs/`).

### `Musique/`
Bibliothèque audio d'accompagnement (fichiers `.mp3`). **Non versionnée** — un `.gitkeep` maintient le tiroir vide dans Git.

---

## Lancement de l'interface HTML

Sur Windows, l'insertion du DVD déclenchait automatiquement :

```ini
[autorun]
open=winopen /max \index.htm
```

Pour ouvrir manuellement la suite depuis une copie locale :

1. Double-cliquer sur `Texture_HD_A/winopen.exe` (ou `Texture_HD_B/winopen.exe`).
2. Ou ouvrir `index.htm` dans un navigateur compatible frameset (Firefox, Chrome récents fonctionnent en mode permissif).

> Les exécutables `winopen.exe` sont des lanceurs natifs Windows d'époque (2002). Sur d'autres OS, ouvrir directement `index.htm`.

---

## Politique de versionnage

Le dépôt suit la règle **« tiroirs de base uniquement, sans sous-dossiers »** :

- Les **dossiers racine** (`Musique/`, `Texture_HD_A/`, `Texture_HD_B/`) sont présents.
- Leurs **sous-dossiers** sont ignorés via le motif `*/*/` dans `.gitignore`.
- Les **fichiers de premier niveau** non médias (`*.inf`, `*.htm`, `*.txt`, `*.exe`) sont suivis.

Cette stratégie maintient un dépôt léger : l'arborescence et les fichiers de lancement restent traçables, mais les ressources lourdes (plusieurs Go de textures) sont laissées hors Git.

---

## Fichiers exclus du dépôt

Voir [`.gitignore`](.gitignore) pour la liste complète. Catégories exclues :

| Catégorie  | Extensions principales                                                  |
|------------|-------------------------------------------------------------------------|
| Images     | `.jpg`, `.jpeg`, `.png`, `.gif`, `.bmp`, `.tif`, `.tiff`, `.webp`, `.svg`, `.psd`, `.tga`, `.raw`, `.heic` |
| PDF        | `.pdf`                                                                  |
| Vidéos     | `.mp4`, `.avi`, `.mov`, `.mkv`, `.wmv`, `.flv`, `.webm`, `.mpg`, `.m4v` |
| Archives   | `.zip`, `.rar`, `.7z`, `.tar`, `.gz`, `.bz2`, `.xz`, `.iso`, `.cab`     |
| Audio      | `.mp3`, `.wav`, `.flac`, `.ogg`, `.aac`, `.m4a`, `.wma`, `.opus`        |
| Système    | `Thumbs.db`, `.DS_Store`, `desktop.ini`                                 |

Ainsi que **tous les sous-dossiers** des trois tiroirs racine.

---

## Licence et droits

Les textures, vignettes et interfaces graphiques d'origine restent la propriété de **3DTotal.com (© 2006)** sous les termes du contrat fourni dans `read_me.txt` :

> *Any contents of this 'Total Textures' CD may not be re-sold, packaged, loaned or otherwise redistributed. The contents are offered royalty free when used within a work of art (personal and commercial), but modifications remain derivatives and cannot be redistributed as standalone textures.*

Ce dépôt **ne redistribue pas** les ressources binaires : il versionne uniquement la structure et les fichiers de lancement à des fins d'archivage personnel.

---

## Contact

- Mainteneur du dépôt : **Pascal Delfosse** — [GitHub](https://github.com/Delfosse-Pascal)
- Support produit d'origine : `cdsupport@3dtotal.com`

---

_Dernière mise à jour : 2026-05-13_
