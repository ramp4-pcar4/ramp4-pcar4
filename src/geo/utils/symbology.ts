import {
    APIScope,
    BaseRenderer,
    BaseSymbolUnit,
    ClassBreaksRenderer,
    InstanceAPI,
    SimpleRenderer,
    UniqueValueRenderer
} from '@/api/internal';
import { LineStyleType } from '@/geo/api';
import type { Attributes, LegendSymbology } from '@/geo/api';
import {
    EsriRenderer,
    EsriSimpleRenderer,
    EsriUniqueValueRenderer,
    EsriClassBreaksRenderer,
    EsriRendererFromJson,
    EsriField,
    EsriRequest
} from '@/geo/esri';
import svgjs from 'svg.js';
import to from 'await-to-js';

// Functions for turning ESRI Renderers into images
// Specifically, converting ESRI "Simple" symbols into images,
// and deriving the appropriate image for a feature based on
// a renderer

export class SymbologyAPI extends APIScope {
    constructor(iApi: InstanceAPI) {
        super(iApi);
    }

    // layer renderer types
    protected SIMPLE = 'simple';
    protected UNIQUE_VALUE = 'unique-value';
    protected CLASS_BREAKS = 'class-breaks';
    protected NONE = 'none';

    protected CONTAINER_SIZE = 32; // size of the symbology item container
    protected CONTENT_SIZE = 24; // size of the symbology graphic
    protected CONTENT_IMAGE_SIZE = 28; // size of the symbology graphic if it's an image (images tend to already have a white boarder around them)
    protected CONTAINER_CENTER = this.CONTAINER_SIZE / 2;
    protected CONTENT_PADDING = (this.CONTAINER_SIZE - this.CONTENT_SIZE) / 2;

    /**
     * Given feature attributes, return the image URL for that feature/graphic object.
     *
     * @method getGraphicIcon
     * @param {Object} attributes object of feature attribute key value pairs
     * @param {Object} renderer an enhanced renderer (see function enhanceRenderer)
     * @return {String} svgcode Url to the features symbology image
     */
    getGraphicIcon(attributes: Attributes, renderer: BaseRenderer): string {
        return renderer.getGraphicIcon(attributes);
    }

    /**
     * Given feature attributes, return the symbol for that feature/graphic object.
     *
     * @method getGraphicSymbol
     * @param {Object} attributes object of feature attribute key value pairs
     * @param {Object} renderer an enhanced renderer (see function enhanceRenderer)
     * @return {Object} an ESRI Symbol object in server format
     */
    getGraphicSymbol(
        attributes: Object,
        renderer: BaseRenderer
    ): __esri.Symbol {
        return renderer.getGraphicSymbol(attributes);
    }

    makeRenderer(
        esriRenderer: EsriRenderer,
        fields: Array<EsriField>,
        falseRenderer = false
    ): BaseRenderer {
        switch (esriRenderer.type) {
            case this.SIMPLE:
                return new SimpleRenderer(
                    <EsriSimpleRenderer>esriRenderer,
                    fields
                );

            case this.CLASS_BREAKS:
                return new ClassBreaksRenderer(
                    <EsriClassBreaksRenderer>esriRenderer,
                    fields,
                    falseRenderer
                );

            case this.UNIQUE_VALUE:
                return new UniqueValueRenderer(
                    <EsriUniqueValueRenderer>esriRenderer,
                    fields,
                    falseRenderer
                );

            default:
                // TODO find a way to make a fake renderer (i.e. a simple renderer with just a white square)
                //      and return it. that way it won't crash the app.  once done, change back to console error instead of real error

                // console.error(`Unknown renderer type encountered - ${esriRenderer.type}`);
                throw new Error(
                    `Unknown renderer type encountered - ${esriRenderer.type}`
                );
        }
    }

    /**
     * Generates svg symbology for WMS layers.
     * @function generateWMSSymbology
     * @param {String} name label for the symbology item (it's not used right now, but is required to be consistent with other symbology generating functions)
     * @param {String} imageUri url or dataUrl of the legend image
     * @return {Promise} a promise resolving with symbology svg code and its label
     */
    async generateWMSSymbology(imageUri: string): Promise<Object> {
        const draw = svgjs(window.document.createElement('div'))
            .size(this.CONTAINER_SIZE, this.CONTAINER_SIZE)
            .viewbox(0, 0, 0, 0);

        const symbologyItem = {
            svgcode: '',
            imgHeight: '',
            imgWidth: ''
        };

        if (imageUri) {
            const svgcode = await this.renderSymbologyImage(imageUri);
            if (svgcode) {
                symbologyItem.svgcode = svgcode;
                // temp element to make it easier to access svgcode element attributes
                const svg = document.createElement('span');
                svg.innerHTML = svgcode;
                const img = svg.firstElementChild?.lastElementChild;
                symbologyItem.imgHeight = img?.getAttribute('height') || '';
                symbologyItem.imgWidth = img?.getAttribute('width') || '';
            } else {
                symbologyItem.svgcode = draw.svg();
            }
        } else {
            symbologyItem.svgcode = draw.svg();
        }

        return symbologyItem;
    }

    /**
     * Converts a config-supplied list of symbology to the format used by layer records.
     *
     * @private
     * @function _listToSymbology
     * @param {Function} conversionFunction a conversion function to wrap the supplied image into an image or an icon style symbology container
     * @param {Array} list a list of config-supplied symbology items in the form of [ { text: <String>, image: <String> }, ... ] wher `image` can be dataURL or an actual url
     * @return {Array} an array of converted symbology symbols in the form of [ { name: <String>, image: <String>, svgcode: <String> }, ... ]; items will be populated async as conversions are done
     */
    private listToSymbology(
        conversionFunction: Function,
        list: Array<any>
    ): Array<Object> {
        const results = list.map(({ text, image }) => {
            const result = {
                name: text,
                image, // url
                svgcode: ''
            };

            conversionFunction(image).then((svgcode: string) => {
                result.svgcode = svgcode;
            });

            return result;
        });

        return results;
    }

    // these two functions called by legend ui to make symbol stacks.
    // may need to adjust stuff with new UI
    listToIconSymbology(list: Array<any>): Array<any> {
        return this.listToSymbology(this.renderSymbologyIcon, list);
    }

    listToImageSymbology(list: Array<any>): Array<any> {
        return this.listToSymbology(this.renderSymbologyImage, list);
    }

    /**
     * Renders a supplied image as an image-style symbology item (preserving the true image dimensions).
     *
     * @function renderSymbologyImage
     * @param {String} imageUri a image dataUrl or a regular url
     * @param {Object} draw [optional=null] an svg container to draw the image on; if not supplied, a new one is created
     */
    async renderSymbologyImage(
        imageUri: string,
        draw: any = null
    ): Promise<string> {
        if (draw === null) {
            draw = svgjs(window.document.createElement('div'))
                .size(this.CONTAINER_SIZE, this.CONTAINER_SIZE)
                .viewbox(0, 0, 0, 0);
        }

        const dataUri = await this.$iApi.geo.shared.convertImagetoDataURL(
            imageUri
        );
        if (dataUri === imageUri) {
            // Something went wrong
            return '';
        }

        const { loader } = await this.svgDrawImage(draw, dataUri);

        draw.viewbox(0, 0, loader.width, loader.height);
        return draw.svg();

        // TODO attempt to put this catch back into the async reformatting of this functoin.
        /*
            .catch(err => {
                console.error('Cannot draw symbology image; returning empty', err);
                return draw.svg();
            });
        */
    }

    /**
     * Renders a supplied image as an icon-style symbology item (fitting an image inside an icon container, usually 32x32 pixels).
     *
     * @function renderSymbologyIcon
     * @param {String} imageUri a image dataUrl or a regular url
     * @param {Object} draw [optional=null] an svg container to draw the image on; if not supplied, a new one is created
     */
    async renderSymbologyIcon(
        imageUri: string,
        draw: any = null
    ): Promise<string> {
        if (draw === null) {
            // create a temporary svg element and add it to the page; if not added, the element's bounding box cannot be calculated correctly
            const container = window.document.createElement('div');
            container.setAttribute(
                'style',
                'opacity:0;position:fixed;left:100%;top:100%;overflow:hidden'
            );
            window.document.body.appendChild(container);

            draw = svgjs(container)
                .size(this.CONTAINER_SIZE, this.CONTAINER_SIZE)
                .viewbox(0, 0, this.CONTAINER_SIZE, this.CONTAINER_SIZE);
        }

        // need to draw the image to get its size (technically not needed if we have a url, but this is simpler)
        const convertedUrl = await this.$iApi.geo.shared.convertImagetoDataURL(
            imageUri
        );

        const { image } = await this.svgDrawImage(draw, convertedUrl);

        image.center(this.CONTAINER_CENTER, this.CONTAINER_CENTER);

        // scale image to fit into the symbology item container
        this.fitInto(image, this.CONTENT_IMAGE_SIZE);

        return draw.svg();
    }

    /**
     * Generates a placeholder symbology graphic.
     * @function generatePlaceholderSymbology
     * @private
     * @param  {String} name label symbology label
     * @param  {String} colour colour to use in the graphic
     * @return {Object} symbology svg code and its label
     */
    generatePlaceholderSymbology(name: string, colour = '#000'): any {
        const draw = svgjs(window.document.createElement('div'))
            .size(this.CONTAINER_SIZE, this.CONTAINER_SIZE)
            .viewbox(0, 0, this.CONTAINER_SIZE, this.CONTAINER_SIZE);

        draw.rect(this.CONTENT_IMAGE_SIZE, this.CONTENT_IMAGE_SIZE)
            .center(this.CONTAINER_CENTER, this.CONTAINER_CENTER)
            .fill(colour);

        draw.text(name[0].toUpperCase()) // take the first letter
            .size(23)
            .fill('#fff')
            .attr({
                'font-weight': 'bold',
                'font-family': 'Roboto'
            })
            .center(this.CONTAINER_CENTER, this.CONTAINER_CENTER);

        return {
            name,
            svgcode: draw.svg()
        };
    }

    async generateBlankSymbology(): Promise<string> {
        return svgjs(window.document.createElement('div'))
            .size(this.CONTAINER_SIZE, this.CONTAINER_SIZE)
            .svg();
    }

    /**
     * Generate an SVG string for an ESRI symbol.
     * @private
     * @param  {Object} symbol an ESRI symbol object in server format
     * @return {Promise} resolves to an SVG string representing the symbol
     */
    private async symbolToSvg(symbol: any): Promise<string> {
        // TODO now that we are enlightened and using typescript and classes and such, consider taking this monster
        //      function with all it's nested functions and moving them to some type of SVG service / class.
        //      For now, we are using the typescript ignore flag to stop whining about our object-key mappings.

        const _this = this;

        // NOTE about symbol.size
        // SVG Legend symbology uses pixels instead of points (which is waht ESRI uses), thus we need
        // to multply it by a factor to correct the values.  96 DPI is assumed.
        // Wanted to make a copy the symbol to avoid messing up other things when changing it's size for this
        // function.  However the API classes have some type of getter magic going on, so cloning actually
        // returns the inside guts, breaking things.
        // since only the SimpleMarker parser appears to care about the size, we will just
        // apply the conversion in there for now.
        const pts2Pxl = 1.33333; // points to pixels factor

        // create a temporary svg element and add it to the page; if not added, the element's bounding box cannot be calculated correctly
        const container = window.document.createElement('div');
        container.setAttribute(
            'style',
            'opacity:0;position:fixed;left:100%;top:100%;overflow:hidden'
        );
        window.document.body.appendChild(container);

        const draw = svgjs(container)
            .size(this.CONTAINER_SIZE, this.CONTAINER_SIZE)
            .viewbox(0, 0, this.CONTAINER_SIZE, this.CONTAINER_SIZE);

        // use enums here if we can (functions, tricky)
        // functions to draw esri simple marker symbols
        // jscs doesn't like enhanced object notation
        // jscs:disable requireSpacesInAnonymousFunctionExpression
        const esriSimpleMarkerSimbol = {
            // @ts-ignore
            path({ size, path }) {
                // esriSMSPath
                return draw.path(path).size(size * pts2Pxl);
            },
            // @ts-ignore
            circle({ size }) {
                // esriSMSCircle
                return draw.circle(size * pts2Pxl);
            },
            // @ts-ignore
            cross({ size }) {
                // esriSMSCross
                return draw
                    .path('M 0,10 L 20,10 M 10,0 L 10,20')
                    .size(size * pts2Pxl);
            },
            // @ts-ignore
            x({ size }) {
                // esriSMSX
                return draw
                    .path('M 0,0 L 20,20 M 20,0 L 0,20')
                    .size(size * pts2Pxl);
            },
            // @ts-ignore
            triangle({ size }) {
                // esriSMSTriangle
                return draw.path('M 20,20 L 10,0 0,20 Z').size(size * pts2Pxl);
            },
            // @ts-ignore
            diamond({ size }) {
                // esriSMSDiamond
                return draw
                    .path('M 20,10 L 10,0 0,10 10,20 Z')
                    .size(size * pts2Pxl);
            },
            // @ts-ignore
            square({ size }) {
                // esriSMSSquare
                return draw
                    .path('M 0,0 20,0 20,20 0,20 Z')
                    .size(size * pts2Pxl);
            }
        };

        // jscs:enable requireSpacesInAnonymousFunctionExpression

        // line dash styles
        // if we need to revist the svg numbers, can see esri 4 styles at https://developers.arcgis.com/javascript/latest/sample-code/playground/live/index.html#/config=symbols/2d/SimpleLineSymbol.json
        const ESRI_DASH_MAPS = {
            [LineStyleType.SOLID]: 'none', // esriSLSSolid
            [LineStyleType.NONE]: 'none', // esriSLSNull
            [LineStyleType.DASH]: '5.333,4', // esriSLSDash
            [LineStyleType.DOT]: '1.333,4', // esriSLSDot
            [LineStyleType.DASHDOT]: '5.333,4,1.333,4', // esriSLSDashDot
            [LineStyleType.LONGDASH]: '10.666,4', // esriSLSLongDash
            [LineStyleType.LONGDASHDOT]: '10.666,4,1.333,4', // esriSLSLongDashDot
            [LineStyleType.LONGDASHDOTDOT]: '10.666,4,1.333,4,1.333,4', // esriSLSLongDashDotDot
            [LineStyleType.SHORTDOT]: '1.333,1.333', // esriSLSShortDot
            [LineStyleType.SHORTDASH]: '5.333,1.333', // esriSLSShortDash
            [LineStyleType.SHORTDASHDOT]: '5.333,1.333,1.333,1.333', // esriSLSShortDashDot
            [LineStyleType.SHORTDASHDOTDOT]:
                '5.333,1.333,1.333,1.333,1.333,1.333' // esriSLSShortDashDotDot
        };

        // default stroke style
        const DEFAULT_STROKE = {
            color: '#000',
            opacity: 1,
            width: 1,
            linecap: 'square',
            linejoin: 'miter',
            miterlimit: 4
        };

        // this is a null outline in case a supplied symbol doesn't have one
        const DEFAULT_OUTLINE = {
            color: [0, 0, 0, 0],
            width: 0,
            style: ESRI_DASH_MAPS.none
        };

        // 5x5 px patter with coloured diagonal lines
        const esriSFSFills = {
            solid: (symbolColour: any) => {
                // esriSFSSolid
                return {
                    color: symbolColour.colour,
                    opacity: symbolColour.opacity
                };
            },
            none: () => 'transparent', // esriSFSNull
            horizontal: (
                _symbolColour: Object,
                symbolStroke: svgjs.StrokeData
            ) => {
                // esriSFSHorizontal
                const cellSize = 5;

                // patter fill: horizonal line in a 5x5 px square
                return draw
                    .pattern(cellSize, cellSize, add =>
                        add.line(0, cellSize / 2, cellSize, cellSize / 2)
                    )
                    .stroke(symbolStroke);
            },
            vertical: (
                _symbolColour: Object,
                symbolStroke: svgjs.StrokeData
            ) => {
                // esriSFSVertical
                const cellSize = 5;

                // patter fill: vertical line in a 5x5 px square
                return draw
                    .pattern(cellSize, cellSize, add =>
                        add.line(cellSize / 2, 0, cellSize / 2, cellSize)
                    )
                    .stroke(symbolStroke);
            },
            'forward-diagonal': (
                _symbolColour: Object,
                symbolStroke: svgjs.StrokeData
            ) => {
                // esriSFSForwardDiagonal
                const cellSize = 5;

                // patter fill: forward diagonal line in a 5x5 px square; two more diagonal lines offset to cover the corners when the main line is cut off
                return draw.pattern(cellSize, cellSize, add => {
                    add.line(0, 0, cellSize, cellSize).stroke(symbolStroke);
                    add.line(0, 0, cellSize, cellSize)
                        .move(0, cellSize)
                        .stroke(symbolStroke);
                    add.line(0, 0, cellSize, cellSize)
                        .move(cellSize, 0)
                        .stroke(symbolStroke);
                });
            },
            'backward-diagonal': (
                _symbolColour: Object,
                symbolStroke: svgjs.StrokeData
            ) => {
                // esriSFSBackwardDiagonal
                const cellSize = 5;

                // patter fill: backward diagonal line in a 5x5 px square; two more diagonal lines offset to cover the corners when the main line is cut off
                return draw.pattern(cellSize, cellSize, add => {
                    add.line(cellSize, 0, 0, cellSize).stroke(symbolStroke);
                    add.line(cellSize, 0, 0, cellSize)
                        .move(cellSize / 2, cellSize / 2)
                        .stroke(symbolStroke);
                    add.line(cellSize, 0, 0, cellSize)
                        .move(-cellSize / 2, -cellSize / 2)
                        .stroke(symbolStroke);
                });
            },
            cross: (_symbolColour: Object, symbolStroke: svgjs.StrokeData) => {
                // esriSFSCross
                const cellSize = 5;

                // patter fill: horizonal and vertical lines in a 5x5 px square
                return draw.pattern(cellSize, cellSize, add => {
                    add.line(cellSize / 2, 0, cellSize / 2, cellSize).stroke(
                        symbolStroke
                    );
                    add.line(0, cellSize / 2, cellSize, cellSize / 2).stroke(
                        symbolStroke
                    );
                });
            },
            'diagonal-cross': (
                _symbolColour: Object,
                symbolStroke: svgjs.StrokeData
            ) => {
                // esriSFSDiagonalCross
                const cellSize = 7;

                // patter fill: crossing diagonal lines in a 7x7 px square
                return draw.pattern(cellSize, cellSize, add => {
                    add.line(0, 0, cellSize, cellSize).stroke(symbolStroke);
                    add.line(cellSize, 0, 0, cellSize).stroke(symbolStroke);
                });
            }
        };

        // jscs doesn't like enhanced object notation
        // jscs:disable requireSpacesInAnonymousFunctionExpression
        const symbolTypes = {
            'simple-marker'() {
                // ESRI Simple Marker Symbol esriSMS
                const symbolColour: any = parseEsriColour(symbol.color);

                symbol.outline = symbol.outline || DEFAULT_OUTLINE;
                const outlineColour: any = parseEsriColour(
                    symbol.outline.color
                );
                const outlineStroke = makeStroke({
                    color: outlineColour.colour,
                    opacity: outlineColour.opacity,
                    width: symbol.outline.width,
                    // @ts-ignore
                    dasharray: ESRI_DASH_MAPS[symbol.outline.style]
                });

                // make an ESRI simple symbol and apply fill and outline to it
                // @ts-ignore
                const marker = esriSimpleMarkerSimbol[symbol.style](symbol)
                    .fill({
                        color: symbolColour.colour,
                        opacity: symbolColour.opacity
                    })
                    .stroke(outlineStroke)
                    .center(_this.CONTAINER_CENTER, _this.CONTAINER_CENTER)
                    .rotate(symbol.angle || 0);

                _this.fitInto(marker, _this.CONTENT_SIZE);
            },
            'simple-line'() {
                // ESRI Simple Line Symbol esriSLS
                const lineColour: any = parseEsriColour(symbol.color);
                const lineStroke = makeStroke({
                    color: lineColour.colour,
                    opacity: lineColour.opacity,
                    width: symbol.width,
                    linecap: 'butt',
                    // @ts-ignore
                    dasharray: ESRI_DASH_MAPS[symbol.style]
                });

                const min = _this.CONTENT_PADDING;
                const max = _this.CONTAINER_SIZE - _this.CONTENT_PADDING;
                draw.line(min, min, max, max).stroke(lineStroke);
            },
            // cartographic line style. internet is hinting that it is not supported on JS API
            esriCLS() {
                // ESRI Fancy Line Symbol
                this['simple-line']();
            },
            'simple-fill'() {
                // ESRI Simple Fill Symbol esriSFS
                const symbolColour: any = parseEsriColour(symbol.color);
                const symbolStroke = makeStroke({
                    color: symbolColour.colour,
                    opacity: symbolColour.opacity
                });
                // @ts-ignore
                const symbolFill = esriSFSFills[symbol.style](
                    symbolColour,
                    symbolStroke
                );

                symbol.outline = symbol.outline || DEFAULT_OUTLINE;
                const outlineColour: any = parseEsriColour(
                    symbol.outline.color
                );
                const outlineStroke = makeStroke({
                    color: outlineColour.colour,
                    opacity: outlineColour.opacity,
                    width: symbol.outline.width,
                    linecap: 'butt',
                    // @ts-ignore
                    dasharray: ESRI_DASH_MAPS[symbol.outline.style]
                });

                draw.rect(_this.CONTENT_SIZE, _this.CONTENT_SIZE)
                    .center(_this.CONTAINER_CENTER, _this.CONTAINER_CENTER)
                    .fill(symbolFill)
                    .stroke(outlineStroke);
            },

            text() {
                // esriTS
                console.error(
                    'no support for feature service legend of text symbols'
                );
            },

            'picture-fill'() {
                // ESRI Picture Fill Symbol esriPFS
                // imageUri can be just an image url is specified or a dataUri string
                const imageUri = symbol.imageData
                    ? `data:${symbol.contentType};base64,${symbol.imageData}`
                    : symbol.url;

                const imageWidth = symbol.width * symbol.xscale;
                const imageHeight = symbol.height * symbol.yscale;

                symbol.outline = symbol.outline || DEFAULT_OUTLINE;
                const outlineColour: any = parseEsriColour(
                    symbol.outline.color
                );
                const outlineStroke = makeStroke({
                    color: outlineColour.colour,
                    opacity: outlineColour.opacity,
                    width: symbol.outline.width,
                    // @ts-ignore
                    dasharray: ESRI_DASH_MAPS[symbol.outline.style]
                });

                const picturePromise = _this.$iApi.geo.shared
                    .convertImagetoDataURL(imageUri)
                    .then((imageUri: string) => {
                        // make a fill from a tiled image
                        const symbolFill = draw.pattern(
                            imageWidth,
                            imageHeight,
                            add =>
                                // there was a 4th argument 'true' here before, but maximum 3 are accepted. may need to look into this
                                add.image(imageUri, imageWidth, imageHeight)
                        );

                        draw.rect(_this.CONTENT_SIZE, _this.CONTENT_SIZE)
                            .center(
                                _this.CONTAINER_CENTER,
                                _this.CONTAINER_CENTER
                            )
                            .fill(symbolFill)
                            .stroke(outlineStroke);
                    });

                return picturePromise;
            },

            'picture-marker'() {
                // ESRI PMS? Picture Marker Symbol esriPMS
                // imageUri can be just an image url is specified or a dataUri string
                const sSrc = symbol.source;
                const imageUri =
                    sSrc && sSrc.imageData
                        ? `data:${sSrc.contentType};base64,${sSrc.imageData}`
                        : symbol.url;

                // need to draw the image to get its size (technically not needed if we have a url, but this is simpler)
                const picturePromise = _this.$iApi.geo.shared
                    .convertImagetoDataURL(imageUri)
                    .then((imageUri: string) =>
                        _this.svgDrawImage(draw, imageUri)
                    )
                    .then(({ image }) => {
                        image
                            .center(
                                _this.CONTAINER_CENTER,
                                _this.CONTAINER_CENTER
                            )
                            .rotate(symbol.angle || 0);

                        // scale image to fit into the symbology item container
                        _this.fitInto(image, _this.CONTENT_IMAGE_SIZE);
                    });

                return picturePromise;
            }
        };

        // jscs:enable requireSpacesInAnonymousFunctionExpression

        try {
            // @ts-ignore
            await Promise.resolve(symbolTypes[symbol.type]());

            // remove element from the page
            window.document.body.removeChild(container);
            return draw.svg();
        } catch (error) {
            console.error(error);
            return this.generateBlankSymbology(); // TODO create a warning icon instead?
        }

        /**
         * Creates a stroke style by applying custom rules to the default stroke.
         * @param {Object} overrides any custom rules to apply on top of the defaults
         * @return {Object} a stroke object
         * @private
         */
        function makeStroke(overrides: Object): Object {
            return Object.assign({}, DEFAULT_STROKE, overrides);
        }

        /**
         * Convert an ESRI colour object to SVG rgb format.
         * @private
         * @param  {Object} c ESRI Colour object
         * @return {Object} colour and opacity in SVG format
         */
        function parseEsriColour(c: __esri.Color): Object {
            if (c) {
                return {
                    colour: `rgb(${c.r},${c.g},${c.b})`,
                    opacity: c.a
                };
            } else {
                return {
                    colour: 'rgb(0, 0, 0)',
                    opacity: 0
                };
            }
        }
    }

    /**
     * Renders a specified image on an svg element. This is a helper function that wraps around async `draw.image` call in the svg library.
     *
     * @function svgDrawImage
     * @private
     * @param {Object} draw svg element to render the image onto
     * @param {String} imageUri image url or dataURL of the image to render
     * @param {Number} width [optional = 0] width of the image
     * @param {Number} height [optional = 0] height of the image
     * @param {Boolean} crossOrigin [optional = true] specifies if the image should be loaded as crossOrigin
     * @return {Promise} promise resolving with the loaded image and its loader object (see svg.js http://documentup.com/wout/svg.js#image for details)
     */
    async svgDrawImage(
        draw: any,
        imageUri: string,
        width = 0,
        height = 0,
        crossOrigin = true
    ): Promise<any> {
        return new Promise((resolve, reject) => {
            const image = draw
                .image(imageUri, width, height, crossOrigin)
                .loaded((loader: any) => resolve({ image, loader }))
                .error((err: any) => {
                    reject(err);
                    console.error(err);
                });
        });
    }

    /**
     * Fits svg element in the size specified
     * @param {Object} element svg element to fit
     * @param {Number} CONTAINER_SIZE width/height of a container to fit the element into
     */
    fitInto(element: any, CONTAINER_SIZE: number): void {
        // const elementRbox = element.rbox();
        // const elementRbox = element.screenBBox();

        const elementRbox = element.node.getBoundingClientRect(); // marker.rbox(); //rbox doesn't work properly in Chrome for some reason
        const scale =
            CONTAINER_SIZE / Math.max(elementRbox.width, elementRbox.height);
        if (scale < 1) {
            element.scale(scale);
        }
    }

    /**
     * Generate a legend object based on an ESRI renderer.
     *
     * @param  {Object} renderer an ESRI renderer object in server JSON form
     * @return {Array} list of legend symbologies
     */
    rendererToLegend(renderer: BaseRenderer): Array<LegendSymbology> {
        let finalSymbols: Array<Array<BaseSymbolUnit>>;
        // put all symbol units from the renderer in one nice array
        const allRendererSUs: Array<BaseSymbolUnit> =
            renderer.symbolUnits.slice(0); // make a copy
        if (renderer.defaultUnit) {
            allRendererSUs.push(renderer.defaultUnit);
        }

        if (renderer.falseRenderer) {
            // we don't need to do any key collation.
            // this renderer was created from a server legend, so just do a 1-to-1
            // recreation.
            finalSymbols = allRendererSUs.map(rsu => [rsu]);
        } else {
            // collate the symbol units by the label. this collapses complex definitions into a nice looking legend.
            // e.g. a renderer has SU for 'type=X' and 'type=Y', both with label 'Fun Stuff'. This merges the logic into
            // one line on the legend for Fun Stuff!
            // See https://github.com/fgpv-vpgf/fgpv-vpgf/issues/1972 for background on why this merging needs to happen

            // using Map will preserve the order things were encountered
            const legendCollater = new Map<string, Array<BaseSymbolUnit>>();

            allRendererSUs.forEach(su => {
                const lblArray = legendCollater.get(su.label);
                if (lblArray) {
                    // not the first time we hit this label. add to the list
                    lblArray.push(su);
                } else {
                    legendCollater.set(su.label, [su]);
                }
            });

            // iterate through the unique keys in the collater. process each legend item
            finalSymbols = [];
            legendCollater.forEach(lblArray => finalSymbols.push(lblArray));
        }

        // iterate through the final symbol array. process each legend item
        return finalSymbols.map(suSet => {
            const firstSu: BaseSymbolUnit = suSet[0];
            const legendSym: LegendSymbology = {
                uid: this.$iApi.geo.shared.generateUUID(),
                label: firstSu.label || '',
                definitionClause:
                    suSet.length === 1
                        ? firstSu.definitionClause
                        : `(${suSet
                              .map(su => su.definitionClause)
                              .join(' OR ')})`,
                svgcode: '', // TODO is '' ok? maybe we need white square svg? or some loading icon?
                esriStandard: true, // is ESRI standard symbology
                visibility: true,
                lastVisbility: true,
                drawPromise: this.symbolToSvg(firstSu.symbol).then(svg => {
                    // update the legend symbol object
                    legendSym.svgcode = svg;

                    // update the renderer symbol units
                    suSet.forEach(su => {
                        su.svgCode = svg;
                    });
                })
            };
            return legendSym;
        });
    }

    /**
     * Returns the legend information of an ESRI map service.
     *
     * @function getMapServerLegend
     * @private
     * @param  {String} layerUrl service url (root service, not indexed endpoint)
     * @returns {Promise} resolves in an array of legend data in arcgis server json format
     *
     */
    private async getMapServerLegend(layerUrl: string): Promise<any> {
        if (!layerUrl) {
            throw new Error(
                'Legend server request is missing the required url.'
            );
        }

        // standard json request with error checking
        const reqParams: __esri.RequestOptions = {
            query: { f: 'json' }
        };

        const fakeData = { layers: [] };
        const [err, serviceResult] = await to<__esri.RequestResponse>(
            EsriRequest(`${layerUrl}/legend`, reqParams)
        );

        // Not a catastrophic error, return empty data on error
        if (!serviceResult) {
            console.error(`Error loading legend for ${layerUrl}`, err);
            return fakeData;
        }
        if (!serviceResult.data) {
            console.error(`Error loading legend data for ${layerUrl}`);
            return fakeData;
        }

        return serviceResult.data;
    }

    /**
     * Our symbology engine works off of renderers. When dealing with layers with no renderers,
     * we need to take server-side legend and convert it to a fake renderer, which lets us
     * leverage all the existing symbology code.
     *
     * @function mapServerLegendToRenderer
     * @private
     * @param {Object} serverLegend legend json from an esri map server
     * @param {Integer} layerIndex  the index of the layer in the legend we are interested in
     * @returns {Object} a fake unique value renderer based off the legend
     *
     */
    private mapServerLegendToRenderer(
        serverLegend: any,
        layerIndex: number
    ): BaseRenderer {
        const layerLegend = serverLegend.layers.find((l: any) => {
            return l.layerId === layerIndex;
        });

        // when no layer has been found it can be a layer whitout a legend like annotation layer
        // in this case, do not apply a renderer
        let renderer: Object;
        if (typeof layerLegend !== 'undefined') {
            // make the mock renderer

            // this is in arcgis server format. the fromJSON() call below converts it to JS API format.
            renderer = {
                type: 'uniqueValue',
                field: 'fakefield',
                uniqueValueInfos: layerLegend.legend.map((ll: any) => {
                    return {
                        label: ll.label,
                        value: ll.label,
                        symbol: {
                            type: 'esriPMS',
                            imageData: ll.imageData,
                            contentType: ll.contentType
                        }
                    };
                })
            };

            // ok to pass empty array. this renderer will only be used to generate a legend; no symbol lookups
            return this.makeRenderer(EsriRendererFromJson(renderer), [], true);
        } else {
            // TODO does this case ever exist? need to figure out a way to encode this in our official renderer objects
            // renderer = { type: this.NONE };
            throw new Error(
                'attempted to make renderer from non-existing legend data'
            ); // so basically if this error hits, we need to write some new code
        }
    }

    /**
     * Our symbology engine works off of renderers. When dealing with layers with no renderers,
     * we need to take server-side legend and convert it to a fake renderer, which lets us
     * leverage all the existing symbology code.
     *
     * Same as mapServerLegendToRenderer function but combines all layer renderers.
     *
     * @function mapServerLegendToRendererAll
     * @private
     * @param {Object} serverLegend legend json from an esri map server
     * @returns {Object} a fake unique value renderer based off the legend
     */
    private mapServerLegendToRendererAll(serverLegend: any): BaseRenderer {
        // TODO potential problem. if we have multiple layers with same label but different
        //      symbols, they will get combined in the legend making process.
        //      the esri Renderer.fromJSON might also get snarky at having two identical values
        //      in the renderer. for the snark, we can append the layer id or something
        //      (the value is never used as we set the falseRenderer flag)

        // this is in arcgis server format. the fromJSON() call below converts it to JS API format.
        const layerRenders = serverLegend.layers.map((layer: any) =>
            layer.legend.map((layerLegend: any) => ({
                label: layerLegend.label,
                value: layerLegend.label,
                symbol: {
                    type: 'esriPMS',
                    imageData: layerLegend.imageData,
                    contentType: layerLegend.contentType
                }
            }))
        );

        const fullRenderer = {
            type: 'uniqueValue',
            field: 'fakefield',
            uniqueValueInfos: [].concat(...layerRenders)
        };

        return this.makeRenderer(EsriRendererFromJson(fullRenderer), [], true);
    }

    /**
     * Orchestrator function that will:
     * - Fetch a legend from an esri map server
     * - Extract legend for a specific sub layer
     * - Convert server legend to a temporary renderer
     * - Convert temporary renderer to a viewer-formatted legend (return value)
     *
     * @function mapServerToLocalLegend
     * @param {String}    mapServerUrl  service url (root service, not indexed endpoint)
     * @param {Integer}   [layerIndex]  the index of the layer in the legend we are interested in. If not provided, all layers will be collapsed into a single legend
     * @returns {Promise} resolves in a viewer-compatible legend for the given server and layer index
     *
     */
    async mapServerToLocalLegend(
        mapServerUrl: string,
        layerIndex: number | string | undefined = undefined
    ): Promise<Array<LegendSymbology>> {
        // get esri legend from server

        const serverLegendData = await this.getMapServerLegend(mapServerUrl);
        // derive renderer for specified layer
        let fakeRenderer: BaseRenderer;
        let intIndex: number;
        if (typeof layerIndex === 'undefined') {
            intIndex = 0;
            fakeRenderer = this.mapServerLegendToRendererAll(serverLegendData);
        } else {
            intIndex = parseInt(<string>layerIndex); // sometimes a stringified value comes in. careful now.
            fakeRenderer = this.mapServerLegendToRenderer(
                serverLegendData,
                intIndex
            );
        }
        // convert renderer to viewer specific legend
        return this.rendererToLegend(fakeRenderer);
    }
}
