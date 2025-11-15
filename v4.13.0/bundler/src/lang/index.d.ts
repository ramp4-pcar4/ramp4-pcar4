import { I18n, IntlDateTimeFormats, IntlNumberFormats, LocaleMessages, VueMessageType } from 'vue-i18n';
export type I18nComponentOptions = {
    messages?: LocaleMessages<VueMessageType> | VueMessageType;
    dateTimeFormats?: IntlDateTimeFormats;
    numberFormats?: IntlNumberFormats;
    sharedMessages?: LocaleMessages<VueMessageType>;
};
export declare function i18n(): I18n<LocaleMessages<VueMessageType>, IntlDateTimeFormats, IntlNumberFormats, string, false>;
