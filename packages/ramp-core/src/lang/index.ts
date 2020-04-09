import Vue from 'vue';
import VueI18n from 'vue-i18n';
import rows from './lang.csv';

Vue.use(VueI18n);

type csvRows = { key: string; enValue: string; frValue: string }[];
interface LocaleMessages {
    [key: string]: { [name: string]: string };
}

const fallbackLocale: string = 'en';

// get the language of the page from the root `html` node
const locale: string = document.documentElement!.getAttribute('lang') || fallbackLocale;

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
    locale,
    fallbackLocale,
    messages: fold(rows)
});
