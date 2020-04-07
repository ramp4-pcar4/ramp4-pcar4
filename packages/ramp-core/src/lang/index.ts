import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

// Figure out if you can have components inherit translations from further up the fixture?
// Figure out how we want to determine initial language (optional param on constructor?)

type csvRows = { key: string; enValue: string; frValue: string }[];
interface LocaleMessages {
    [key: string]: { [name: string]: string };
}

const rows = require('./lang.csv');

/**
 * Fold the imported CSV file in the form of `{ key: string, enValue: string, frValue: string }[]` to the form understood by VueI18n: `{ en: { [name: string]: string }, fr: { [name: string]: string } }`.
 *
 * @param {csvRows} rows
 * @returns {LocaleMessages}
 */
export function fold(rows: csvRows): LocaleMessages {
    return rows.reduce(
        (map, item) => {
            map.en[item.key] = item.enValue;
            map.fr[item.key] = item.frValue;
            return map;
        },
        { en: {}, fr: {} } as LocaleMessages
    );
}

export const i18n: VueI18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: fold(rows)
});
