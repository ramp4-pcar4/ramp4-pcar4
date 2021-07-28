import {
    IntlDateTimeFormats,
    IntlNumberFormats,
    LocaleMessages,
    VueMessageType,
    createI18n
} from 'vue-i18n';
import messages from './lang.csv';

export type I18nComponentOptions = {
    messages?: LocaleMessages<VueMessageType>;
    dateTimeFormats?: IntlDateTimeFormats;
    numberFormats?: IntlNumberFormats;
    sharedMessages?: LocaleMessages<VueMessageType>;
};

const lang = 'en';

export const i18n = createI18n({
    // get the language of the page from the root `html` node
    locale: document.documentElement!.getAttribute('lang') || lang,
    fallbackLocale: lang,
    messages: messages
});
