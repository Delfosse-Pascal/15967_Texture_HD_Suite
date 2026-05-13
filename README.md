# 15967 — Texture HD Suite

Suite locale construite autour du DVD **3DTotal.com — Total Textures v1 (Release 2.0, 2006)** :
plus de **2 700 textures HD tileables** sur deux volumes, **64 galeries d'artistes**, des cartes
de référence pour démarrer, un atelier de variantes, et **7 pistes musicales** d'accompagnement.
Le tout navigable hors-ligne via un site HTML auto-suffisant inspiré d'un théâtre d'opéra
(rideaux lourds, partitions, lustres, balcons).

> Référence interne : **15967**
> Auteur de l'archive : **Pascal Delfosse**
> Plateforme : navigateur moderne (Chrome / Firefox / Edge), exécution depuis le disque local.

---

## Sommaire

- [Démarrage rapide](#démarrage-rapide)
- [Structure du dépôt](#structure-du-dépôt)
- [Pages du site](#pages-du-site)
- [Fonctionnalités](#fonctionnalités)
- [Lecteur musical persistant](#lecteur-musical-persistant)
- [Identité visuelle](#identité-visuelle)
- [Politique de versionnage](#politique-de-versionnage)
- [Licence et droits](#licence-et-droits)
- [Contact](#contact)

---

## Démarrage rapide

1. Ouvrir [`index.html`](index.html) à la racine dans un navigateur (double-clic).
2. Cliquer sur la **pastille colorée ♪** en haut pour ouvrir le lecteur musical dans une
   fenêtre flottante — la musique continue pendant la navigation.
3. Explorer les volumes A et B via les cartes, les galeries d'artistes ou les catégories.
4. Sur chaque page, le bouton **« Retour à l'accueil »** ramène à la page principale, et
   **« Mode sombre / Mode clair »** bascule le thème.

Aucun serveur ni dépendance externe n'est nécessaire — toutes les pages fonctionnent
en `file://` même sans connexion Internet.

---

## Structure du dépôt

```
15967_Texture_HD_Suite/
├── index.html               # Page d'accueil principale (hub)
├── lecteur.html             # Lecteur audio flottant (popup)
├── README.md
├── .gitignore
│
├── css/
│   └── site.css             # Thème opéra : bordeaux / ivoire / or / noir
├── js/
│   └── site.js              # Thème clair-sombre, lightbox, popup musique
│
├── Musique/
│   └── index.html           # Tiroir musique avec 7 lecteurs séparés
│   (00.mp3 … 06.mp3 — non versionnés)
│
├── Texture_HD_A/            # Volume A — Collection générale (1 369 textures)
│   ├── index.html           # Hub catégories Volume A
│   ├── cat-brick.html       # 15 pages catégories : brique, tissu, sol, métal,
│   ├── cat-cloth.html         divers, superposition, panoramique, pavé, photos,
│   ├── …                      ombres, ciels, pierre, carrelage, bois
│   ├── cat-wood.html
│   ├── gallery/
│   │   ├── index.html       # Hub des 32 artistes
│   │   └── <Artiste>/index.html (32 pages)
│   ├── gettingstarted/
│   │   └── index.html       # Cartes de référence (diffuse, bump, normale, …)
│   └── replace/
│       ├── index.html       # Atelier remplacements (395 fichiers, 5 pages)
│       └── page-2.html … page-5.html
│
└── Texture_HD_B/            # Volume B — Compléments
    ├── index.html
    ├── cat-*.html           # 13 pages catégories
    └── gallery/
        ├── index.html       # Hub 32 artistes Volume B
        └── <Artiste>/index.html (32 pages)
```

> **70 fichiers `index.html`** et **103 pages HTML au total** sont générés par la suite.

---

## Pages du site

| Page                                    | Rôle                                              |
|-----------------------------------------|---------------------------------------------------|
| [`index.html`](index.html)              | Hub principal — entrée du site                    |
| [`lecteur.html`](lecteur.html)          | Lecteur audio flottant (ouvert en popup)          |
| `Texture_HD_A/index.html`               | Sommaire des 15 catégories du Volume A            |
| `Texture_HD_A/cat-*.html`               | Galeries par matière (brique, bois, pierre, …)    |
| `Texture_HD_A/gallery/index.html`       | Liste des 32 artistes du Volume A                 |
| `Texture_HD_A/gallery/<Artiste>/`       | Œuvres individuelles de chaque artiste            |
| `Texture_HD_A/gettingstarted/`          | Cartes de référence (7 variantes de la même base) |
| `Texture_HD_A/replace/`                 | Atelier remplacements paginé (395 fichiers)       |
| `Texture_HD_B/index.html`               | Sommaire des 13 catégories du Volume B            |
| `Texture_HD_B/cat-*.html`               | Galeries B (peinture, plâtre, murs, …)            |
| `Texture_HD_B/gallery/`                 | 32 artistes du Volume B                           |
| `Musique/index.html`                    | Tiroir musique — 7 lecteurs `<audio>` séparés     |

Chaque page est reliée à au moins une autre via le bouton **« Retour à l'accueil »**, les
liens de navigation (volume, galerie, page précédente/suivante) et la pagination.

---

## Fonctionnalités

- **Mode clair / sombre** persistant (préférence stockée dans `localStorage`).
- **Police calligraphique** (Pinyon Script, Edwardian Script ITC, fallback Brush Script MT).
- **Lightbox** : clic sur une vignette → image en grand. Touche **Échap** ferme.
- **Dimensions + taille de fichier** automatiquement affichées sous chaque vignette.
- **Animations** : lustre pulsant, notes flottantes, transitions au survol, apparitions.
- **Pagination** automatique lorsqu'un dossier dépasse 80 fichiers.
- **Cases variées** sur l'accueil : rondes, rectangulaires, carrées, larges.
- **Bouton musique multicolore** (gradient conique animé) pour ouvrir le lecteur.
- **Liens sociaux** centrés en haut de chaque page (Pinterest, Flickr, Tumblr, X, YouTube).
- **Ressources externes** (favicon, scripts CDN) chargées en mode tolérant : si Internet
  n'est pas disponible, le site continue de fonctionner normalement.

### Comportement lightbox sur les pages images

| Action                       | Résultat                                       |
|------------------------------|------------------------------------------------|
| Clic sur une vignette        | Image affichée plein écran avec dimensions     |
| Touche **Échap**             | Ferme la vue agrandie                          |
| Clic en dehors de l'image    | Ferme également                                |
| Croix `×` en haut à droite   | Ferme avec animation de rotation               |

---

## Lecteur musical persistant

Le bouton **♪ multicolore** ouvre [`lecteur.html`](lecteur.html) dans une **fenêtre popup**
de 420×560 pixels. Cette fenêtre :

- charge les **7 pistes** de `Musique/` ;
- **survit aux changements de page** dans la fenêtre principale ;
- propose lecture, pause, stop, piste précédente/suivante, volume, barre de progression ;
- affiche la durée de chaque piste ;
- s'enchaîne automatiquement à la fin d'une piste.

Aucune lecture automatique : la musique ne démarre qu'après un clic explicite de
l'utilisateur (conforme aux politiques navigateur récentes).

---

## Identité visuelle

| Élément  | Valeurs                                                                              |
|----------|--------------------------------------------------------------------------------------|
| Couleurs | **Bordeaux** `#6b1a2e` · **Ivoire** `#f5ecd9` · **Or** `#d4af37` · **Noir** `#0d0608` |
| Motifs   | Rideaux lourds (gradient vertical), partitions (♪ ♫ 𝄞), lustres (halo doré), balcons (sections) |
| Police   | Pinyon Script / Edwardian Script ITC / Brush Script MT (calligraphique)              |
| Animations | Lustre pulsant 7s · notes flottantes 14s · cartes en lévitation au survol         |

Le mode sombre inverse le fond (noir velours) et déplace l'or en accent principal.

---

## Politique de versionnage

Le dépôt versionne uniquement les **fichiers texte** du site (HTML, CSS, JS, README).

Sont **exclus** via [`.gitignore`](.gitignore) :

| Catégorie  | Patterns                                                                |
|------------|-------------------------------------------------------------------------|
| Images     | `*.jpg`, `*.jpeg`, `*.png`, `*.gif`, `*.bmp`, `*.tif`, `*.webp`, `*.svg`, `*.psd`, `*.tga`, `*.raw`, `*.heic` |
| PDF        | `*.pdf`                                                                 |
| Vidéos     | `*.mp4`, `*.avi`, `*.mov`, `*.mkv`, `*.wmv`, `*.flv`, `*.webm`, `*.mpg`, `*.m4v` |
| Archives   | `*.zip`, `*.rar`, `*.7z`, `*.tar`, `*.gz`, `*.bz2`, `*.xz`, `*.iso`, `*.cab` |
| Audio      | `*.mp3`, `*.wav`, `*.flac`, `*.ogg`, `*.aac`, `*.m4a`, `*.wma`, `*.opus` |
| Originaux  | `*.htm` (frames DVD 3DTotal), `autorun.inf`, `*.exe`                     |
| Système    | `Thumbs.db`, `.DS_Store`, `desktop.ini`, `_notes/`                       |

Les ressources binaires (4 700+ fichiers HTM originaux, milliers de jpgs et mp3) restent
disponibles localement mais hors Git pour garder le dépôt léger.

---

## Licence et droits

Les textures, vignettes et galeries d'inspiration restent la propriété de
**3DTotal.com (© 2006)** sous les termes du `read_me.txt` d'origine :

> *Any contents of this 'Total Textures' CD may not be re-sold, packaged, loaned or
> otherwise redistributed. The contents are offered royalty free when used within a work
> of art (personal and commercial), but modifications remain derivatives and cannot be
> redistributed as standalone textures.*

Ce dépôt **ne redistribue pas** les ressources binaires : il versionne uniquement la
mise en page HTML/CSS/JS construite par-dessus, à des fins d'archivage personnel.

---

## Contact

- Mainteneur : **Pascal Delfosse** — [GitHub](https://github.com/Delfosse-Pascal)
- Réseaux sociaux : [Pinterest](https://fr.pinterest.com/pascal509/) · [Flickr](https://www.flickr.com/photos/delfossepascal) · [Tumblr](https://www.tumblr.com/lestoilesdepascal) · [X](https://x.com/PascalDelfossee) · [YouTube](https://www.youtube.com/c/DelfossePascal)
- Support 3DTotal d'origine : `cdsupport@3dtotal.com`

---

_Dernière mise à jour : 2026-05-13_
