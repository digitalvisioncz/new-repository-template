import {createRoot} from 'react-dom/client';
import {Router} from '@reach/router';
import {getPreferredLanguage} from '@dvdevcz/web-apis-toolkit';
import App from './components/app/app';
import './index.css';

const startApp = () => {
    const scriptElement = document.getElementById('app');
    const appElement = document.createElement('div');
    const rootElement = document.createElement('div');

    if (scriptElement instanceof HTMLScriptElement) {
        scriptElement.insertAdjacentElement('afterend', appElement);
    }

    if (!(scriptElement instanceof HTMLScriptElement)) {
        scriptElement.appendChild(appElement);
    }

    const lang = getPreferredLanguage({subtag: 'language'});

    const langCode = lang || 'en';

    const root = createRoot(rootElement);

    root.render(
        <Router>
            <App
                path="/"
                lang={langCode}
            />
            <App path="/:lang"/>
        </Router>
    );
};

startApp();
