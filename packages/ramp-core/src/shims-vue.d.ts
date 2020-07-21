declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}

declare module '*lang.csv' {
    import { LocaleMessages } from 'vue-i18n';
    const content: LocaleMessages;
    export default content;
}

declare module '*.csv' {
    const content: any;
    export default content;
}

declare module '*.xsl' {
    const content: any;
    export default content;
}
