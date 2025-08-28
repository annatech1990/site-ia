
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import { initialiserDonnees } from './initialiserDB';

const app = createApp(App);
app.use(router);
app.mount('#app');

// Pour initialiser les données, décommentez la ligne suivante
// initialiserDonnees();
