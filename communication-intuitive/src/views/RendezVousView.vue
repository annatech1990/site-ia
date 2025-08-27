<template>
  <div class="rendezvous">
    <h2>Prise de rendez-vous</h2>
    <div class="calendar">
      <!-- Calendrier ici -->
    </div>
  </div>
</template>
<script setup>
import { useHead } from '@vueuse/head';
useHead({
  title: 'Prise de rendez-vous - Communication Intuitive Animale',
  meta: [
    { name: 'description', content: 'Prenez rendez-vous pour une consultation en communication intuitive animale.' },
    { name: 'keywords', content: 'rendez-vous, consultation, communication animale, intuitive, calendrier' },
    { property: 'og:title', content: 'Prise de rendez-vous - Communication Intuitive Animale' },
    { property: 'og:description', content: 'Réservez une consultation en communication intuitive animale.' },
    { property: 'og:type', content: 'website' },
  ]
});
</script>
<style>

.rendezvous {
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
.calendar {
  margin-top: 2rem;
  width: 100%;
}
</style>
