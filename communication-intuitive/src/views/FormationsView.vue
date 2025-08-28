<template>
  <div class="formations">
    <h2>Formations</h2>
    <ProduitsListe 
      titre="Nos formations et événements" 
      @select-produit="goToDetail" 
    />
  </div>
</template>
<script setup>
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router';
import ProduitsListe from '../components/ProduitsListe.vue';

const router = useRouter();

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

// Rediriger vers la page de détail d'un produit
const goToDetail = (produit) => {
  router.push(`/formations/${produit.niveau}/${produit.code}`);
};
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
</style>
