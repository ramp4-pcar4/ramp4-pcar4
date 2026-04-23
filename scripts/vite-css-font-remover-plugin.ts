/*
Strips embedded fonts from CSS file

See https://github.com/ramp4-pcar4/ramp4-pcar4/issues/2947 for the WHY

*/

import path from 'path';
import fs from 'fs';

/**
 * Strips nasty fonts from CSS
 *
 * @param {string} filePath location of css file to strip
 * @param {Array<string>} fontFamilies list of font family names to target for removal
 */
async function fontRemover(filePath: string, fontFamilies: Array<string>) {
    /**
     * File content to parse
     */
    const inputData = await fs.promises.readFile(filePath, 'utf8');

    /**
     * Current position crawling through input data
     */
    let readIdx = 0;

    /**
     * Current position of input data where we have already written out
     */
    let writeIdx = 0;

    /**
     * Data we are writing out to the good CSS file.
     */
    let outDataCss = '';

    /**
     * Marks if we are stil processing data
     */
    let notDone = true;

    /**
     * Infinite loop insurance
     */
    let emergCounter = 0;

    while (notDone) {
        // hunt for next potential font

        const currFontIdx = inputData.indexOf('@font-face{font-family:', readIdx);

        if (currFontIdx === -1) {
            // we can find no more potential fonts. Write out to the end. Exit loop.
            outDataCss = outDataCss.concat(inputData.slice(writeIdx));
            notDone = false;
        } else {
            if (writeIdx !== currFontIdx) {
                // we had stuff between where we last wrote and this font that is quality goodness.
                // write out and advance our indexes up to the start of this font test.
                outDataCss = outDataCss.concat(inputData.slice(writeIdx, currFontIdx));
                writeIdx = currFontIdx;
            }

            // see if the font fam matches one of our smited ones
            const ffNameIdx = currFontIdx + 23; // 23 = length of f-f{f-f matcher above
            const ffTestNugget = inputData.slice(ffNameIdx, ffNameIdx + 40);
            if (fontFamilies.some(ff => ffTestNugget.startsWith(ff))) {
                // matched. remove font
                const endingCurlyIdx = inputData.indexOf('}', ffNameIdx) + 1;
                //  outDataFont = outDataFont.concat(inputData.slice(currFontIdx, endingCurlyIdx + 1));
                writeIdx = endingCurlyIdx;
                readIdx = endingCurlyIdx;
            } else {
                // not matched. advance the read index to the start of the font name, then iterate again.
                readIdx = ffNameIdx;
            }
        }

        if (emergCounter > 99999) {
            console.warn('Hit the emergency counter kickout.');
            notDone = false;
        }
        emergCounter++;
    }

    const outfileBackup = filePath.slice(0, filePath.length - 4) + '-original.css';

    // backup the original
    await fs.promises.cp(filePath, outfileBackup);

    // overwrite the original
    await fs.promises.writeFile(filePath, outDataCss, 'utf8');
}

const cssFontRemoverPlugin = (fileTarget: string) => {
    return {
        name: 'css-font-remover',
        async closeBundle() {
            // the font families to strip from the css
            const fontFamsToClean = ['Avenir Next', 'CalciteWebCoreIcons'];

            await fontRemover(path.resolve(__dirname, fileTarget), fontFamsToClean);

            console.log('Fonts have been purged from the CSS. Donethanks.');
        }
    };
};

export default cssFontRemoverPlugin;
