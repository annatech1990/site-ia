<template>
  <div class="account-view">
    <AccountDialog />
  </div>
</template>
import { useHead } from '@vueuse/head';
import AccountDialog from '../components/AccountDialog.vue';
useHead({
  title: 'Espace membre - Communication Intuitive Animale',
  meta: [
    { name: 'description', content: 'Accédez à votre espace membre et gérez vos informations personnelles.' },
    { name: 'keywords', content: 'espace membre, compte, utilisateur, communication animale, intuitive' },
    { property: 'og:title', content: 'Espace membre - Communication Intuitive Animale' },
    { property: 'og:description', content: 'Espace membre pour gérer vos informations et formations.' },
    { property: 'og:type', content: 'website' },
  ]
});
<style>
.account-view {
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
