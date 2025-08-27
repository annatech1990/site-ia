<template>
  <div class="cart-view">
    <CartDialog />
  </div>
</template>
<script setup>
import { useHead } from '@vueuse/head';
import CartDialog from '../components/CartDialog.vue';
useHead({
  title: 'Panier - Communication Intuitive Animale',
  meta: [
    { name: 'description', content: 'Consultez et gérez les articles de votre panier pour la boutique en ligne.' },
    { name: 'keywords', content: 'panier, boutique, achat, communication animale, intuitive' },
    { property: 'og:title', content: 'Panier - Communication Intuitive Animale' },
    { property: 'og:description', content: 'Panier d’achat pour la boutique en ligne de communication intuitive animale.' },
    { property: 'og:type', content: 'website' },
  ]
});
</script>   
<style>
.cart-view {
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
</style>
