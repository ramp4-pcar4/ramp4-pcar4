import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from './lang.csv';

Vue.use(VueI18n);

export type I18nComponentOptions = {
    messages?: VueI18n.LocaleMessages;
    dateTimeFormats?: VueI18n.DateTimeFormats;
    numberFormats?: VueI18n.NumberFormats;
    sharedMessages?: VueI18n.LocaleMessages;
};

const fallbackLocale: string = 'en';

// get the language of the page from the root `html` node
const locale: string =
    document.documentElement!.getAttribute('lang') || fallbackLocale;

export const i18n: VueI18n = new VueI18n({
    locale,
    fallbackLocale,
    messages
});
