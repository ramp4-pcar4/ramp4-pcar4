import { type I18n } from 'vue-i18n';
import type { IntlDateTimeFormats, IntlNumberFormats, LocaleMessages, VueMessageType } from 'vue-i18n';
export declare type I18nComponentOptions = {
    messages?: LocaleMessages<VueMessageType> | VueMessageType;
    dateTimeFormats?: IntlDateTimeFormats;
    numberFormats?: IntlNumberFormats;
    sharedMessages?: LocaleMessages<VueMessageType>;
};
export declare function i18n(): I18n<{}, {}, {}, string, false>;
