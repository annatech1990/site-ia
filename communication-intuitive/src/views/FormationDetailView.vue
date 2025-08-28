
<template>
  <div class="detail-container" v-if="formation">
    <h1 class="detail-title">{{ formation.titre }}</h1>
    <div class="detail-infos">
      <p><strong>Code :</strong> {{ formation.code }}</p>
      <p><strong>Date :</strong> {{ formation.dateDebut }} - {{ formation.dateFin }}</p>
      <p><strong>Heure :</strong> {{ formation.heureDebut }} - {{ formation.heureFin }}</p>
      <p><strong>Lieu :</strong> {{ formation.lieu }}, {{ formation.pays }}</p>
      <p><strong>Niveau :</strong> {{ formation.niveau }}</p>
      <p><strong>Catégorie :</strong> {{ formation.categorie }}</p>
      <p><strong>Animateur :</strong> {{ formation.animateur }}</p>
      <p><strong>Prix :</strong> {{ formation.prix }} €</p>
    </div>
    <div class="detail-description">
      <h2>Description</h2>
      <p>{{ formation.description }}</p>
    </div>
  </div>
  <div v-else>
    <p>Chargement...</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
// import { getFormationByCode } from '../firebase'; // à activer si tu utilises Firebase

export default {
  name: 'FormationDetailView',
  setup() {
    const route = useRoute();
    const formation = ref(null);
    const niveau = route.params.niveau;
    const code = route.params.code;
    // Exemple statique, à remplacer par un fetch Firebase
    const formations = [
      {
        code: 'F001',
        titre: 'Initiation à la communication animale',
        categorie: 'Découverte',
        dateDebut: '2025-09-10',
        dateFin: '2025-09-12',
        heureDebut: '09:00',
        heureFin: '17:00',
        lieu: 'Paris',
        pays: 'France',
        niveau: 'debutant',
        animateur: 'Anna Evans',
        prix: 350,
        description: 'Une formation pour découvrir les bases de la communication intuitive avec les animaux.'
      },
      // ...autres formations
    ];
    onMounted(() => {
      formation.value = formations.find(f => f.code === code && f.niveau === niveau);
      // Si tu utilises Firebase, remplace par un fetch dynamique
    });
    return { formation };
  }
}
</script>

<style scoped>
.detail-container {
  max-width: 700px;
  margin: 2rem auto;
  padding: 2rem 1.5rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
}
.detail-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}
.detail-infos {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem 2.5rem;
  margin-bottom: 2rem;
}
.detail-infos p {
  font-size: 1rem;
  color: #444;
  margin: 0;
  min-width: 220px;
}
.detail-description {
  margin-top: 1.5rem;
}
.detail-description h2 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}
.detail-description p {
  font-size: 1rem;
  color: #666;
}
</style>
