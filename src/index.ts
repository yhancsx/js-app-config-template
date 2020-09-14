import '../index.scss';

const HELLO_WORLD: string = 'hello world';

const app = document.createElement('div');
app.innerText = HELLO_WORLD;
app.className = 'hello-world';
const root = document.getElementById('root');
root.appendChild(app);
