import { createI18n, type I18n } from 'vue-i18n';
import type {
    IntlDateTimeFormats,
    IntlNumberFormats,
    LocaleMessages,
    VueMessageType
} from 'vue-i18n';
import messages from './lang.csv';

export type I18nComponentOptions = {
    messages?: LocaleMessages<VueMessageType> | VueMessageType;
    dateTimeFormats?: IntlDateTimeFormats;
    numberFormats?: IntlNumberFormats;
    sharedMessages?: LocaleMessages<VueMessageType>;
};

const lang = 'en';

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

export function i18n(): I18n<{}, {}, {}, string, false> {
    return createI18n({
        legacy: false,
        // get the language of the page from the root `html` node
        locale: document.documentElement!.getAttribute('lang') || lang,
        fallbackLocale: lang,
        globalInjection: true,
        //@ts-ignore
        messages,
        numberFormats
    });
}
