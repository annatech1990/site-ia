<template>
  <div class="boutique">
    <h2>Boutique en ligne</h2>
    <div class="categories">
      <button>Livres</button>
      <button>DVD</button>
      <button>Conférences</button>
      <button>Formats courts</button>
      <button>Packs</button>
      <button>Nouveautés</button>
    </div>
    <div class="products">
      <!-- Produits ici -->
    </div>
  </div>
</template>
<script setup>
import { useHead } from '@vueuse/head';
useHead({
  title: 'Boutique en ligne - Communication Intuitive Animale',
  meta: [
    { name: 'description', content: 'Découvrez notre boutique en ligne : Livres, DVD, Conférences, Packs, Nouveautés.' },
    { name: 'keywords', content: 'boutique, livres, dvd, conférences, packs, nouveautés, communication animale' },
    { property: 'og:title', content: 'Boutique en ligne - Communication Intuitive Animale' },
    { property: 'og:description', content: 'Boutique en ligne dédiée à la communication intuitive animale.' },
    { property: 'og:type', content: 'website' },
  ]
});
</script>
<style>

.boutique {
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
.categories {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}
.categories button {
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
.categories button:hover {
  background: rgb(34, 11, 76);
  box-shadow: 0 4px 16px rgba(34, 11, 76, 0.12);
}
.products {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
</style>
