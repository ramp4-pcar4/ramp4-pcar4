import { createI18n, type I18n } from 'vue-i18n';
import type { IntlDateTimeFormats, IntlNumberFormats, LocaleMessages, VueMessageType } from 'vue-i18n';
import messages from './lang.csv';

export type I18nComponentOptions = {
    messages?: LocaleMessages<VueMessageType> | VueMessageType;
    dateTimeFormats?: IntlDateTimeFormats;
    numberFormats?: IntlNumberFormats;
    sharedMessages?: LocaleMessages<VueMessageType>;
};

const lang = 'en';

// This should align with the columns in the language CSV files
const supportedLangs = ['en', 'fr'];

// default number localization
// settings can be overidden when the $n is called
const numberFormats = {
    en: {
        number: {
            style: 'decimal',
            useGrouping: false,
            maximumFractionDigits: 20
        }
    },
    fr: {
        number: {
            style: 'decimal',
            useGrouping: false,
            maximumFractionDigits: 20
        }
    }
};

export function i18n(): I18n<LocaleMessages<VueMessageType>, IntlDateTimeFormats, IntlNumberFormats, string, false> {
    let validLang = document.documentElement!.getAttribute('lang') || lang;

    if (!supportedLangs.includes(validLang)) {
        // setting `locale` below to something not supported causes issues, despite the `fallbackLocale`.
        // the fallback only helps in i18n string lookups. Stuff in RAMP still gets confused.
        validLang = lang;
    }

    // @ts-expect-error TODO: explain why this is needed or remove
    return createI18n({
        legacy: false,
        // get the language of the page from the root `html` node
        locale: validLang,
        fallbackLocale: lang,
        globalInjection: true,
        messages,
        numberFormats
    });
}
