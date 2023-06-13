function initApp() {
    const scriptElement = document.getElementById('app');

    if (!scriptElement) {
        console.log('There\'s no app script element');

        return;
    }

    const {assetsUrl} = scriptElement.dataset;
    // eslint-disable-next-line no-undef
    const baseUrl = typeof assetsUrl === 'string' ? assetsUrl : BASE_URL;

    const appScript = document.createElement('script');
    const appCssLink = document.createElement('link');

    appScript.src = `${baseUrl}app.js`;
    appCssLink.rel = 'stylesheet';
    appCssLink.href = '';

    document.body.appendChild(appScript);
    document.body.appendChild(appCssLink);
}

initApp();
