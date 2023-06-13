import {c} from 'atomico';

const app = () => (
    <host>
        Hello world
    </host>
);

const App = c(app);

export default App;

customElements.define('custom-app', App);
