<template>
  <div class="formations">
    <h2>Formations</h2>
    <div class="filters">
      <select><option>Niveau</option></select>
      <select><option>Pays</option></select>
    </div>
    <div class="cards">
      <!-- Cards produits ici -->
    </div>
  </div>
</template>
<script setup>
import { useHead } from '@vueuse/head';
useHead({
  title: 'Formations - Communication Intuitive Animale',
  meta: [
    { name: 'description', content: 'Découvrez nos formations en communication intuitive animale pour tous niveaux et pays.' },
    { name: 'keywords', content: 'formation, communication animale, intuitive, niveau, pays, apprentissage' },
    { property: 'og:title', content: 'Formations - Communication Intuitive Animale' },
    { property: 'og:description', content: 'Formations en communication intuitive animale, tous niveaux et pays.' },
    { property: 'og:type', content: 'website' },
  ]
});
</script>
<style>

.formations {
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
h2 {
  color: rgb(37, 95, 142);
  font-size: 1.7rem;
  margin-bottom: 0.75rem;
  font-weight: 700;
}
.filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}
select {
  background: #fff;
  border: 1px solid rgb(34, 11, 76);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  color: #3B2E2B;
  font-size: 1rem;
}
.cards {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
</style>
