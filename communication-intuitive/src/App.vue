


<template>
  <Navbar
    @openContact="showContact = true"
    @openSearch="showSearch = true"
    @openAccount="showAccount = true"
    @openCart="showCart = true"
  />
  <div id="app">
    <router-view />
  <!-- Les vues Contact, Espace membre et Panier sont maintenant gérées par le router -->
    <SearchDialog v-if="showSearch" @close="showSearch = false" />
  </div>
  <Footer />
</template>


<script setup>
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import ContactForm from './components/ContactForm.vue';
import AccountDialog from './components/AccountDialog.vue';
import CartDialog from './components/CartDialog.vue';
import SearchDialog from './components/SearchDialog.vue';

const showContact = ref(false);
const showSearch = ref(false);
const showAccount = ref(false);
const showCart = ref(false);
</script>

<style scoped>




#app {
  width: 100vw;
  min-height: 80vh;
  background: rgb(187, 178, 207);
  color: #3B2E2B;
  font-family: 'Montserrat', 'Segoe UI', 'Roboto', Arial, sans-serif;
  display: flex;
  flex-direction: column;
  letter-spacing: 0.01em;
  /* padding: 0 0.5rem; */
}

h1, h2, h3 {
  color: rgb(37, 95, 142);
  font-family: 'Montserrat', 'Segoe UI', 'Roboto', Arial, sans-serif;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
}

.card, .encadre {
  background: rgb(255, 255, 190);
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(34, 11, 76, 0.08);
  padding: 2rem;
  margin-bottom: 2rem;
}

button, .btn {
  background: rgb(37, 95, 142);
  color: #fff;
  border: none;
  border-radius: 24px;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-family: inherit;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(34, 11, 76, 0.08);
  transition: background 0.2s, box-shadow 0.2s;
}
button:hover, .btn:hover {
  background: rgb(34, 11, 76);
  box-shadow: 0 4px 16px rgba(34, 11, 76, 0.12);
}
</style>

