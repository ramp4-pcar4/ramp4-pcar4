import Vue from 'vue';
import VueI18n from 'vue-i18n';
import rows from './lang.csv';

Vue.use(VueI18n);

export type CsvRows = { key: string; enValue: string; frValue: string }[];

export type I18nComponentOptions = {
    messages?: VueI18n.LocaleMessages;
    dateTimeFormats?: VueI18n.DateTimeFormats;
    numberFormats?: VueI18n.NumberFormats;
    sharedMessages?: VueI18n.LocaleMessages;
};

const fallbackLocale: string = 'en';

// get the language of the page from the root `html` node
const locale: string = document.documentElement!.getAttribute('lang') || fallbackLocale;

/**
 * Fold the imported CSV file in the form of `{ key: string, enValue: string, frValue: string }[]` to the form understood by VueI18n: `{ en: { [name: string]: string }, fr: { [name: string]: string } }`.
 *
 * @param {CsvRows} rows
 * @returns {VueI18n.LocaleMessages}
 */
// TODO: enhance to accept any number of languages
export function fold(rows: CsvRows): VueI18n.LocaleMessages {
    return rows.reduce(
        (map, item) => {
            map.en[item.key] = item.enValue;
            map.fr[item.key] = item.frValue;
            return map;
        },
        { en: {}, fr: {} } as VueI18n.LocaleMessages
    );
}

export const i18n: VueI18n = new VueI18n({
    locale,
    fallbackLocale,
    messages: fold(rows)
});
