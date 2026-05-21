import type { Plugin } from 'vite';
import { dsvFormat } from 'd3-dsv';

export default function vueI18nPlugin(): Plugin {
    type CsvRow = Record<string, string> & { key: string };

    type I18nMessages = { [key: string]: { [name: string]: string } };

    return {
        name: 'vite-plugin-i18n',
        transform(src, id) {
            if (!/lang\.csv/.test(id)) return;

            const valueField = 'Value';
            const res = dsvFormat(',').parse<CsvRow, string>(
                src.replace('export default "', '').replace(/"$/, '').replace(/\\n/g, '\n').replace(/\\"/g, '"'),
                row => ({ ...row, key: row.key })
            );
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
                    map[lang][item.key] = item[column];
                });

                return map;
            }, messages);
            return {
                code: `export default ${JSON.stringify(messages)}`,
                map: null
            };
        }
    };
}
