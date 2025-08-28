
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import FormationsView from './views/FormationsView.vue';
import FormationsNiveauxView from './views/FormationsNiveauxView.vue';
import FormationsListeView from './views/FormationsListeView.vue';
import FormationDetailView from './views/FormationDetailView.vue';
import RendezVousView from './views/RendezVousView.vue';
import BoutiqueView from './views/BoutiqueView.vue';
import ContactView from './views/ContactView.vue';
import AccountView from './views/AccountView.vue';
import CartView from './views/CartView.vue';
import SearchView from './views/SearchView.vue';
import RegisterView from './views/RegisterView.vue';
import AdminView from './views/AdminView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/formations', component: FormationsNiveauxView },
  { path: '/formations/:niveau', component: FormationsListeView },
  { path: '/formations/:niveau/:code', component: FormationDetailView },
  { path: '/rendez-vous', component: RendezVousView },
  { path: '/boutique', component: BoutiqueView },
  { path: '/contact', component: ContactView },
  { path: '/espace-membre', component: AccountView },
  { path: '/panier', component: CartView },
  { path: '/recherche', component: SearchView },
  { path: '/inscription', component: RegisterView },
  { path: '/admin', component: AdminView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
