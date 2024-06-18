/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Plugin } from 'vite';
// @ts-ignore
import { dsvFormat } from 'd3-dsv';

export default function vueI18nPlugin(): Plugin {
    type CsvRow = { key: string; [name: string]: string };

    // `dsv.parse` returns an array with an additional property `columns` tucked onto it
    interface CsvRows extends Array<CsvRow> {
        columns: string[];
    }

    type I18nMessages = { [key: string]: { [name: string]: string } };

    return {
        name: 'vite-plugin-i18n',
        transform(src, id) {
            if (!/lang\.csv/.test(id)) return;

            const valueField = 'Value';
            const res: CsvRows = dsvFormat(',').parse(
                src
                    .replace('export default "', '')
                    .replace(/"$/, '')
                    .replace(/\\n/g, '\n')
                    .replace(/\\"/g, '"')
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
