<template>
  <div class="admin-view">
    <h1>Administration</h1>
    <AdminPanel />
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head';
import AdminPanel from '../components/AdminPanel.vue';

useHead({
  title: 'Administration - Communication Intuitive Animale',
  meta: [
    { name: 'description', content: 'Panneau d\'administration pour la gestion du site.' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
});
</script>

<style scoped>
.admin-view {
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
  margin-bottom: 1.5rem;
  font-weight: 700;
}
</style>
