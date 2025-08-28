<template>
  <div class="niveaux-container">
    <h1 class="niveaux-title">Choisissez un niveau de formation</h1>
    <div class="niveaux-list">
      <router-link v-for="niveau in niveaux" :key="niveau.code" :to="`/formations/${niveau.code}`" class="niveau-card">
        <h2>{{ niveau.nom }}</h2>
        <p>{{ niveau.description }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormationsNiveauxView',
  data() {
    return {
      niveaux: [
        { code: 'debutant', nom: 'Débutant', description: 'Pour découvrir la communication intuitive.' },
        { code: 'intermediaire', nom: 'Intermédiaire', description: 'Pour approfondir vos connaissances.' },
        { code: 'avance', nom: 'Avancé', description: 'Pour devenir expert et aller plus loin.' },
      ]
    }
  }
}
</script>

<style scoped>
.niveaux-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem 1rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
}
.niveaux-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
}
.niveaux-list {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}
.niveau-card {
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 1px 8px rgba(0,0,0,0.05);
  width: 220px;
  padding: 1.5rem;
  text-decoration: none;
  color: #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s, background 0.2s;
}
.niveau-card:hover {
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
  background: #e3f2fd;
}
.niveau-card h2 {
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
}
.niveau-card p {
  font-size: 1rem;
  color: #666;
  text-align: center;
}
</style>
