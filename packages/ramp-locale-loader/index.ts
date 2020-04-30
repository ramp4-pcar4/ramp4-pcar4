const { getOptions } = require('loader-utils');
const { dsvFormat } = require('d3-dsv');

type CsvRow = { key: string; [name: string]: string };

// `dsv.parse` returns an array with an additional property `columns` tucked onto it
interface CsvRows extends Array<CsvRow> {
    columns: string[];
}

type I18nMessages = { [key: string]: { [name: string]: string } };

module.exports = function(text: string) {
    // set `"noImplicitThis": false` so ts doesn't complain
    this.cacheable();

    const options = getOptions(this) || {},
        delimiter = options.delimiter || ',',
        valueField: string = options.valueField || 'Value',
        validField: string = options.validField || 'Valid',
        dsv = dsvFormat(delimiter),
        res: CsvRows = dsv.parse(text);

    // pick columns that have the value suffixes (they contain actual text);
    const locales = res.columns
        .slice(1)
        .filter(c => c.match(valueField))
        .map(c => ({ lang: c.replace(valueField, ''), column: c }));

    // create a messages object to be consumed by vue-i18n
    const messages = locales.reduce<I18nMessages>((map, { lang }) => {
        map[lang] = {};
        return map;
    }, {});

    // fold parsed CSV into the messages object
    res.reduce((map, item) => {
        locales.forEach(({ lang, column }) => {
            // prepend language code to the strings that are not yet confirmed
            map[lang][item.key] = (parseInt(item[`${lang}${validField}`]) ? '' : `[${lang}] `) + item[column];
        });

        return map;
    }, messages);

    return `const res = ${JSON.stringify(messages)}; module.exports = res;`;
};
