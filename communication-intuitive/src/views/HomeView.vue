<template>
  <div class="home">
    <h1>Communication Intuitive Animale</h1>
    <p>Vraie description modifiée</p>
    <video controls width="100%">
      <!-- <source src="/public/presentation.mp4" type="video/mp4" /> -->
      Votre navigateur ne supporte pas la vidéo.
    </video>
  </div>
</template>
<script setup>
import { useHead } from '@vueuse/head';
useHead({
  title: 'Communication Intuitive Animale - Accueil',
  meta: [
    { name: 'description', content: 'Découvrez la communication intuitive animale, formations, consultations et boutique en ligne.' },
    { name: 'keywords', content: 'communication animale, intuitive, formation, consultation, boutique, animaux, bien-être' },
    { property: 'og:title', content: 'Communication Intuitive Animale' },
    { property: 'og:description', content: 'Site dédié à la communication intuitive animale, formations, consultations et boutique.' },
    { property: 'og:type', content: 'website' },
  ]
});
</script>
<style>

.home {
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
h1 {
  color: rgb(37, 95, 142);
  font-size: 2.2rem;
  margin-bottom: 0.75rem;
  font-weight: 700;
}
p {
  color: #3B2E2B;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}
video {
  margin-top: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(34, 11, 76, 0.08);
  width: 33vw;
  min-width: 300px;
  max-width: 500px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
