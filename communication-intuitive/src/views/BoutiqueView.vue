<template>
  <div class="boutique-container">
    <h1 class="boutique-title">Boutique</h1>
    <div class="boutique-categories">
      <button>Livres</button>
      <button>DVD</button>
      <button>Conférences</button>
      <button>Formats courts</button>
      <button>Packs</button>
      <button>Nouveautés</button>
    </div>
    <div class="boutique-products">
      <!-- Exemple de produit, à remplacer par une boucle dynamique si besoin -->
      <div class="product-card">
        <img src="/images/anna-evans-cheval.jpg" alt="Produit 1" class="product-image" />
        <h2 class="product-name">Consultation Intuitive</h2>
        <p class="product-description">Une séance personnalisée pour explorer votre intuition et recevoir des conseils adaptés à votre situation.</p>
        <div class="product-footer">
          <span class="product-price">80€</span>
          <button class="product-btn">Ajouter au panier</button>
        </div>
      </div>
      <!-- Ajouter d'autres produits ici -->
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
<style scoped>
.boutique-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
}
.boutique-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #3a3a3a;
}
.boutique-categories {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}
.boutique-categories button {
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
.boutique-categories button:hover {
  background: rgb(34, 11, 76);
  box-shadow: 0 4px 16px rgba(34, 11, 76, 0.12);
}
.boutique-products {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
.product-card {
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 1px 8px rgba(0,0,0,0.05);
  width: 280px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s;
}
.product-card:hover {
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
}
.product-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}
.product-name {
  font-size: 1.3rem;
  margin: 0.5rem 0;
  color: #2a2a2a;
}
.product-description {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.2rem;
  text-align: center;
}
.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.product-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #4caf50;
}
.product-btn {
  background: #4caf50;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
}
.product-btn:hover {
  background: #388e3c;
}
</style>
