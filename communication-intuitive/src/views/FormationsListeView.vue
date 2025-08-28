<template>
  <div class="liste-container">
    <h1 class="liste-title">Formations {{ niveauNom }}</h1>
    <div class="liste-cards">
      <div v-for="formation in formations" :key="formation.code" class="formation-card" @click="goToDetail(formation.code)">
        <h2>{{ formation.titre }}</h2>
        <p>{{ formation.categorie }}</p>
        <p><strong>Date :</strong> {{ formation.dateDebut }} - {{ formation.dateFin }}</p>
        <p><strong>Lieu :</strong> {{ formation.lieu }}, {{ formation.pays }}</p>
        <p><strong>Prix :</strong> {{ formation.prix }} €</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
// import { getFormationsByNiveau } from '../firebase'; // à activer si tu utilises Firebase

export default {
  name: 'FormationsListeView',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const niveau = route.params.niveau;
    const niveauNom = niveau.charAt(0).toUpperCase() + niveau.slice(1);
    // Exemple statique, à remplacer par un fetch Firebase
    const formations = ref([
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
        prix: 350
      },
      // ...autres formations
    ].filter(f => f.niveau === niveau));

    function goToDetail(code) {
      router.push(`/formations/${niveau}/${code}`);
    }

    // Si tu utilises Firebase, remplace la partie ci-dessus par un fetch dynamique
    return { niveauNom, formations, goToDetail };
  }
}
</script>

<style scoped>
.liste-container {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 2rem 1rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
}
.liste-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
}
.liste-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
.formation-card {
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 1px 8px rgba(0,0,0,0.05);
  width: 300px;
  padding: 1.5rem;
  cursor: pointer;
  transition: box-shadow 0.2s, background 0.2s;
}
.formation-card:hover {
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
  background: #e3f2fd;
}
.formation-card h2 {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
}
.formation-card p {
  font-size: 1rem;
  color: #666;
  margin: 0.2rem 0;
}
</style>
