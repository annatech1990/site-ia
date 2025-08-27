<template>
  <div class="contact-view">
    <ContactForm />
  </div>
</template>
import { useHead } from '@vueuse/head';
import ContactForm from '../components/ContactForm.vue';
useHead({
  title: 'Contact - Communication Intuitive Animale',
  meta: [
    { name: 'description', content: 'Contactez-nous pour toute question sur la communication intuitive animale.' },
    { name: 'keywords', content: 'contact, communication animale, intuitive, question, formulaire' },
    { property: 'og:title', content: 'Contact - Communication Intuitive Animale' },
    { property: 'og:description', content: 'Formulaire de contact pour la communication intuitive animale.' },
    { property: 'og:type', content: 'website' },
  ]
});
<style>
.contact-view {
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
