declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}

declare module '*.csv' {
    const content: any;
    export default content;
}
