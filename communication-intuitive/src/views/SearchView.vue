<template>
  <div class="search-view">
    <h2>Recherche sur le site</h2>
    <select v-model="selected" class="search-select">
      <option disabled value="">Choisissez une catégorie</option>
      <option value="formations">Formations</option>
      <option value="boutique">Boutique</option>
      <option value="accueil">Accueil</option>
      <option value="rendezvous">Rendez-vous</option>
    </select>
    <input v-model="query" type="text" placeholder="Rechercher un texte..." class="search-input" />
    <button @click="search" class="btn">Rechercher</button>
    <div v-if="results.length">
      <ul>
        <li v-for="(result, i) in results" :key="i">{{ result }}</li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const selected = ref('');
const query = ref('');
const results = ref([]);
function search() {
  // Placeholder: simulate search results
  results.value = query.value ? [
    `Résultat pour "${query.value}" dans ${selected.value}`
  ] : [];
}
</script>
<style>
.search-view {
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0 1.5rem 0;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(34, 11, 76, 0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.search-select {
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid rgb(37, 95, 142);
  font-size: 1rem;
}
.search-input {
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid rgb(37, 95, 142);
  font-size: 1rem;
}
.btn {
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
.btn:hover {
  background: rgb(34, 11, 76);
  box-shadow: 0 4px 16px rgba(34, 11, 76, 0.12);
}
</style>
