<template>
  <div class="search-dialog">
    <h3>Recherche sur le site</h3>
    <input v-model="query" type="text" placeholder="Rechercher..." />
    <button @click="search">Rechercher</button>
    <button @click="$emit('close')">Fermer</button>
    <div v-if="results.length">
      <ul>
        <li v-for="(result, i) in results" :key="i">{{ result }}</li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const query = ref('');
const results = ref([]);
function search() {
  // Placeholder: simulate search results
  results.value = query.value ? [
    `Résultat pour "${query.value}" 1`,
    `Résultat pour "${query.value}" 2`
  ] : [];
}
</script>
<style>
.search-dialog {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  max-width: 400px;
  margin: auto;
  text-align: center;
}
input {
  width: 80%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}
button {
  background: #42b983;
  color: #fff;
  border: none;
  padding: 0.75rem;
  border-radius: 4px;
  cursor: pointer;
  margin: 0.5rem;
}
</style>
