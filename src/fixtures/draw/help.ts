export const DRAW_HELP_SECTION_ID = 'draw';

const svgIcon = (paths: string) =>
    `<svg class="rv-draw-help-icon" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${paths}</svg>`;

const mapnavButton = (icon: string) => `<span class="rv-draw-help-mapnav-button">${icon}</span>`;

const actionButton = (label: string, icon: string) =>
    `<span class="rv-draw-help-action-button">${icon}<span class="rv-draw-help-action-label">${label}</span></span>`;

const DRAW_HELP_ICONS = {
    point: svgIcon(
        '<path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />'
    ),
    polyline: svgIcon(
        '<path d="M0 0h24v24H0z" fill="none" /><path d="M5 17l3-3 4 4 8-8" stroke-width="2" fill="none" stroke="currentColor" />'
    ),
    polygon: svgIcon('<path d="M0 0h24v24H0z" fill="none" /><path d="M3 6l6-3 6 3 6-3v12l-6 3-6-3-6 3z" />'),
    rectangle: svgIcon(
        '<path d="M0 0h24v24H0z" fill="none" /><rect x="4" y="6" width="16" height="12" fill="none" stroke="currentColor" stroke-width="2" />'
    ),
    circle: svgIcon(
        '<path d="M0 0h24v24H0z" fill="none" /><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2" />'
    ),
    info: svgIcon(
        '<path d="M0 0h24v24H0z" fill="none" /><path d="M11 10h2v7h-2v-7zm0-3h2v2h-2V7zm1-5a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" fill="currentColor" />'
    ),
    settings: svgIcon(
        '<path d="M0 0h24v24H0z" fill="none" /><path d="M19.43 12.98c.04-.32.07-.65.07-.98s-.02-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.37-.31-.6-.22l-2.49 1a7.28 7.28 0 0 0-1.69-.98L14.5 2.42A.49.49 0 0 0 14 2h-4c-.25 0-.46.18-.5.42L9.12 5.07c-.61.24-1.18.56-1.69.98l-2.49-1a.5.5 0 0 0-.6.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.05.32-.08.65-.08.98s.03.66.08.98l-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46c.12.22.37.31.6.22l2.49-1c.51.4 1.08.73 1.69.98l.38 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.38-2.65c.61-.25 1.18-.58 1.69-.98l2.49 1c.23.08.48 0 .6-.22l2-3.46a.5.5 0 0 0-.12-.64l-2.11-1.65zM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5z" />'
    ),
    upload: svgIcon(
        '<path d="M0 0h24v24H0z" fill="none" /><path d="M5 20h14v-2H5v2zm14-7h-4v5H9v-5H5l7-7 7 7z" fill="currentColor" />'
    ),
    download: svgIcon(
        '<path d="M0 0h24v24H0z" fill="none" /><path d="M5 20h14v-2H5v2zm14-9h-4V3H9v8H5l7 7 7-7z" fill="currentColor" />'
    ),
    identify: svgIcon(
        '<path d="M0 0h24v24H0z" fill="none" /><path d="M10.5 4a6.5 6.5 0 0 1 5.18 10.43l4.45 4.44-1.42 1.42-4.44-4.45A6.5 6.5 0 1 1 10.5 4zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z" fill="currentColor" />'
    ),
    copy: svgIcon(
        '<path d="M0 0h24v24H0z" fill="none" /><path d="M8 7h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm0 2v10h10V9H8z" fill="currentColor" /><path d="M4 15H2V5a3 3 0 0 1 3-3h10v2H5a1 1 0 0 0-1 1v10z" fill="currentColor" />'
    ),
    delete: svgIcon(
        '<path d="M0 0h24v24H0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z" fill="currentColor" />'
    )
};

export const DRAW_HELP_MARKDOWN = {
    en: `# Draw Tools

Draw tools add temporary shapes to the map. The available shape buttons depend on the viewer configuration.

### Drawing Shapes

Open the Draw tool group in the map navigation controls and choose one of the available shape buttons.

| Icon | Shape | How to draw |
|--|--|--|
| ${mapnavButton(DRAW_HELP_ICONS.point)} | Point | Select the point tool, then select the map once. |
| ${mapnavButton(DRAW_HELP_ICONS.polyline)} | Polyline | Select each vertex on the map, then double-click the final vertex to finish. |
| ${mapnavButton(DRAW_HELP_ICONS.polygon)} | Polygon | Select each boundary vertex on the map, then double-click the final vertex to close and finish the polygon. |
| ${mapnavButton(DRAW_HELP_ICONS.rectangle)} | Rectangle | Select-hold on the map, drag to size the rectangle, then release. |
| ${mapnavButton(DRAW_HELP_ICONS.circle)} | Circle | Select-hold on the map, drag to size the circle, then release. |

Press <kbd>Escape</kbd> to cancel the active drawing tool.

### Shape Inspector

After at least one shape exists, select the Shape Inspector information button ${mapnavButton(DRAW_HELP_ICONS.info)} in the Draw tool group. Select a shape on the map to open or update the Shape Inspector.

The Shape Inspector has three tabs:

- Details: view the shape type, measurements, feature counts, coordinate system, centroid, extent, segments, and vertices. Use ${actionButton('Run Identify', DRAW_HELP_ICONS.identify)} to refresh feature counts, ${actionButton('Copy', DRAW_HELP_ICONS.copy)} coordinate or segment values, or ${actionButton('Export', DRAW_HELP_ICONS.download)} the selected shape.
- Style: apply a preset or set the selected shape's fill colour, border colour, buffer colour, and opacity.
- Edit: move, resize, rotate, or reshape the selected shape using the map handles. Turn on editing aids for area labels, segment lengths, or vertex numbers. This tab also contains the selected shape's buffer and identify options.

### Deleting Shapes

Open the Shape Inspector, select the Edit tab, then choose ${actionButton('Delete', DRAW_HELP_ICONS.delete)} and confirm the deletion. When a shape is selected and the map has focus, <kbd>Delete</kbd> or <kbd>Backspace</kbd> also removes the selected shape.

### Import and Export

Open Draw Defaults with the settings button ${mapnavButton(DRAW_HELP_ICONS.settings)} in the Draw tool group.

- ${actionButton('Import', DRAW_HELP_ICONS.upload)} opens a file picker for one or more draw shape JSON files.
- ${actionButton('Export', DRAW_HELP_ICONS.download)} in Draw Defaults downloads all current draw shapes.
- ${actionButton('Export', DRAW_HELP_ICONS.download)} in the Shape Inspector Details tab downloads only the selected shape.

Exported files include geometry and draw settings so they can be imported later into the Draw fixture.

### Draw Defaults

The Draw Defaults panel controls settings for new shapes. It does not change shapes that already exist on the map.

- Appearance: default fill colour, border colour, buffer colour, and shape opacity.
- Buffer: default buffer distance and unit.
- Identify buffer uses: whether identify and feature counts use the original shape plus its buffer, the original shape only, or the buffer only.

### Shape Options

Each selected shape can have options that differ from the defaults. Use the Shape Inspector Style tab for colours and opacity. Use the Shape Inspector Edit tab for buffer distance, buffer unit, identify buffer use, editing aids, and deletion.`,
    fr: `# Outils de dessin

Les outils de dessin ajoutent des formes temporaires à la carte. Les boutons de forme disponibles dépendent de la configuration du visualiseur.

### Dessiner des formes

Ouvrez le groupe d'outils de dessin dans les contrôles de navigation de la carte et choisissez l'un des boutons de forme disponibles.

| Icône | Forme | Comment dessiner |
|--|--|--|
| ${mapnavButton(DRAW_HELP_ICONS.point)} | Point | Sélectionnez l'outil de point, puis sélectionnez la carte une fois. |
| ${mapnavButton(DRAW_HELP_ICONS.polyline)} | Polyligne | Sélectionnez chaque sommet sur la carte, puis double-cliquez le dernier sommet pour terminer. |
| ${mapnavButton(DRAW_HELP_ICONS.polygon)} | Polygone | Sélectionnez chaque sommet de la limite sur la carte, puis double-cliquez le dernier sommet pour fermer et terminer le polygone. |
| ${mapnavButton(DRAW_HELP_ICONS.rectangle)} | Rectangle | Sélectionnez et maintenez sur la carte, faites glisser pour dimensionner le rectangle, puis relâchez. |
| ${mapnavButton(DRAW_HELP_ICONS.circle)} | Cercle | Sélectionnez et maintenez sur la carte, faites glisser pour dimensionner le cercle, puis relâchez. |

Appuyez sur <kbd>Échap</kbd> pour annuler l'outil de dessin actif.

### Inspecteur de forme

Lorsqu'au moins une forme existe, sélectionnez le bouton d'information de l'inspecteur de forme ${mapnavButton(DRAW_HELP_ICONS.info)} dans le groupe d'outils de dessin. Sélectionnez une forme sur la carte pour ouvrir ou mettre à jour l'inspecteur de forme.

L'inspecteur de forme contient trois onglets :

- Détails : affichez le type de forme, les mesures, les dénombrements d'entités, le système de coordonnées, le centroïde, l'étendue, les segments et les sommets. Utilisez ${actionButton("Exécuter l'identification", DRAW_HELP_ICONS.identify)} pour actualiser les dénombrements d'entités, ${actionButton('Copier', DRAW_HELP_ICONS.copy)} des coordonnées ou des valeurs de segment, ou ${actionButton('Exporter', DRAW_HELP_ICONS.download)} la forme sélectionnée.
- Style : appliquez un préréglage ou définissez la couleur de remplissage, la couleur de bordure, la couleur du tampon et l'opacité de la forme sélectionnée.
- Modifier : déplacez, redimensionnez, faites pivoter ou remodelez la forme sélectionnée à l'aide des poignées sur la carte. Activez les aides de modification pour les étiquettes de superficie, les longueurs de segment ou les numéros de sommet. Cet onglet contient aussi les options de tampon et d'identification de la forme sélectionnée.

### Supprimer des formes

Ouvrez l'inspecteur de forme, sélectionnez l'onglet Modifier, puis choisissez ${actionButton('Supprimer', DRAW_HELP_ICONS.delete)} et confirmez la suppression. Lorsqu'une forme est sélectionnée et que la carte a le focus, <kbd>Supprimer</kbd> ou <kbd>Retour arrière</kbd> supprime aussi la forme sélectionnée.

### Importer et exporter

Ouvrez Valeurs par défaut du dessin avec le bouton des paramètres ${mapnavButton(DRAW_HELP_ICONS.settings)} dans le groupe d'outils de dessin.

- ${actionButton('Importer', DRAW_HELP_ICONS.upload)} ouvre un sélecteur de fichiers pour un ou plusieurs fichiers JSON de formes dessinées.
- ${actionButton('Exporter', DRAW_HELP_ICONS.download)} dans Valeurs par défaut du dessin télécharge toutes les formes dessinées actuelles.
- ${actionButton('Exporter', DRAW_HELP_ICONS.download)} dans l'onglet Détails de l'inspecteur de forme télécharge seulement la forme sélectionnée.

Les fichiers exportés comprennent la géométrie et les paramètres de dessin afin de pouvoir être importés plus tard dans le module de dessin.

### Valeurs par défaut du dessin

Le panneau Valeurs par défaut du dessin contrôle les paramètres des nouvelles formes. Il ne modifie pas les formes qui existent déjà sur la carte.

- Apparence : couleur de remplissage, couleur de bordure, couleur du tampon et opacité par défaut de la forme.
- Tampon : distance et unité du tampon par défaut.
- Utilisation du tampon d'identification : détermine si l'identification et les dénombrements d'entités utilisent la forme originale avec son tampon, la forme originale seulement ou le tampon seulement.

### Options de forme

Chaque forme sélectionnée peut avoir des options différentes des valeurs par défaut. Utilisez l'onglet Style de l'inspecteur de forme pour les couleurs et l'opacité. Utilisez l'onglet Modifier de l'inspecteur de forme pour la distance du tampon, l'unité du tampon, l'utilisation du tampon d'identification, les aides de modification et la suppression.`
};
