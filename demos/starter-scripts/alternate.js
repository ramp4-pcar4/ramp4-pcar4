function isIE() {
    let ua = navigator.userAgent;
    const IE = RegExp('MSIE');
    const IE11 = RegExp('Trident');
    return IE.test(ua) || IE11.test(ua);
}

if (isIE()) {
    document.getElementById('IE').className = 'notification';
    document.getElementById('IE').innerHTML =
        'Internet Explorer is not a supported browser, please use a different browser.';
}
