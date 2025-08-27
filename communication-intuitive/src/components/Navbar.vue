<template>
  <header class="navbar">
    <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/formations">Formations</router-link>
      <router-link to="/rendez-vous">Rendez-vous</router-link>
      <router-link to="/boutique">Boutique</router-link>
    </nav>
    <div class="actions">
      <router-link to="/contact" title="Contact" class="icon-link">
        <svg width="24" height="24" fill="none" stroke="#3B2E2B" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></svg>
      </router-link>
      <div class="search-form">
        <input v-model="searchQuery" type="text" placeholder="Rechercher..." class="search-input" @input="onSearch" />
      </div>
      <router-link to="/espace-membre" title="Espace membre" class="icon-link">
        <svg width="24" height="24" fill="none" stroke="#3B2E2B" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 8-4 8-4s8 0 8 4"/></svg>
      </router-link>
      <router-link to="/panier" title="Panier" class="icon-link">
        <svg width="24" height="24" fill="none" stroke="#3B2E2B" stroke-width="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
      </router-link>
    </div>
  </header>
</template>
<script setup>
import { ref } from 'vue';
const searchQuery = ref('');
function onSearch() {
  // Ajoute ici la logique de recherche en temps réel (ex: filtrer les produits, formations, etc.)
  // Exemple : console.log(`Recherche : ${searchQuery.value}`);
}
</script>
<style>
 .navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
  background: #fff;
  box-shadow: 0 2px 12px rgba(34, 11, 76, 0.07);
  border-bottom: 2px solid rgb(37, 95, 142);
 }
 nav {
  display: flex;
  gap: 2rem;
 }
 nav a {
  color: #3B2E2B;
  font-weight: 500;
  text-decoration: none;
  font-size: 1.05rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: background 0.2s, color 0.2s;
 }
 nav a.router-link-exact-active {
  background: rgba(37, 95, 142, 0.08);
  color: rgb(37, 95, 142);
 }
 .actions {
  display: flex;
  gap: 1rem;
 }
 button {
  background: none;
  border: none;
  padding: 0.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 50%;
  transition: background 0.2s;
 }
 button:hover {
  background: rgba(37, 95, 142, 0.08);
 }
 svg {
  display: block;
 }
</style>
