
<template>
  <div class="detail-container" v-if="formation">
    <h1 class="detail-title">{{ formation.titre }}</h1>
    <div class="detail-header">
      <span class="code-badge">{{ formation.code }}</span>
      <span class="niveau-badge" :class="formation.niveau">{{ getNiveauLabel(formation.niveau) }}</span>
      <span class="categorie-badge">{{ formation.categorie }}</span>
    </div>
    
    <div class="detail-infos">
      <div class="info-group">
        <h3>Dates et horaires</h3>
        <p><strong>Début :</strong> {{ formatDate(formation.dateDebut) }}</p>
        <p><strong>Fin :</strong> {{ formatDate(formation.dateFin) }}</p>
      </div>
      
      <div class="info-group">
        <h3>Localisation</h3>
        <p><strong>Lieu :</strong> {{ formation.lieu }}</p>
        <p><strong>Pays :</strong> {{ formation.pays }}</p>
      </div>
      
      <div class="info-group">
        <h3>Informations</h3>
        <p><strong>Animateur :</strong> {{ formation.animateur }}</p>
        <p><strong>Prix :</strong> <span class="prix">{{ formation.prix }} €</span></p>
      </div>
    </div>
    
    <div class="detail-actions">
      <button class="btn-inscription">S'inscrire</button>
      <button class="btn-contact">Poser une question</button>
    </div>
    
    <div class="detail-description" v-if="formation.description">
      <h2>Description</h2>
      <p>{{ formation.description }}</p>
    </div>
    
    <div v-else class="detail-description">
      <h2>Description</h2>
      <p>Cette formation vous permettra d'acquérir les compétences nécessaires en communication intuitive animale. Animée par {{ formation.animateur }}, elle se déroulera dans un cadre agréable à {{ formation.lieu }}, {{ formation.pays }}.</p>
    </div>
  </div>
  
  <div class="loading-container" v-else>
    <p>Chargement du produit...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getProduitByCode } from '../services/produits';

const route = useRoute();
const router = useRouter();
const formation = ref(null);
const niveau = route.params.niveau;
const code = route.params.code;

// Fonction pour obtenir le libellé du niveau
const getNiveauLabel = (niveau) => {
  const labels = {
    'debutant': 'Débutant',
    'intermediaire': 'Intermédiaire',
    'avance': 'Avancé',
    'tous': 'Tous niveaux'
  };
  
  return labels[niveau] || niveau;
};

// Formatage des dates
const formatDate = (timestamp) => {
  if (!timestamp) return '';
  
  const date = timestamp.toDate();
  const jour = date.getDate().toString().padStart(2, '0');
  const mois = (date.getMonth() + 1).toString().padStart(2, '0');
  const annee = date.getFullYear();
  const heures = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  
  return `${jour}/${mois}/${annee} à ${heures}h${minutes}`;
};

// Fonction pour récupérer les détails d'un produit
const getProduitDetails = async () => {
  try {
    console.log(`Recherche du produit avec le code: ${code}`);
    const produit = await getProduitByCode(code);
    
    if (produit) {
      console.log('Produit trouvé:', produit);
      formation.value = produit;
    } else {
      console.error(`Produit avec le code ${code} non trouvé`);
      // Rediriger vers la page des formations si le produit n'est pas trouvé
      router.push('/formations');
    }
  } catch (error) {
    console.error('Erreur lors de la récupération du produit :', error);
  }
};

// Ajouter le niveau à la console pour débogage
console.log(`Page de détail - Niveau: ${niveau}, Code: ${code}`);

onMounted(() => {
  console.log('Composant FormationDetailView monté, appel de getProduitDetails()');
  getProduitDetails();
});
</script>

<style scoped>
.detail-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem 1.5rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
}

.detail-title {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: rgb(37, 95, 142);
}

.detail-header {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.code-badge, .niveau-badge, .categorie-badge {
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.code-badge {
  background: #f1f1f1;
  color: #555;
}

.niveau-badge {
  background: #e1f5fe;
  color: #0288d1;
}

.niveau-badge.debutant {
  background: #e1f5fe;
  color: #0288d1;
}

.niveau-badge.intermediaire {
  background: #e8f5e9;
  color: #388e3c;
}

.niveau-badge.avance {
  background: #f3e5f5;
  color: #8e24aa;
}

.niveau-badge.tous {
  background: #fff3e0;
  color: #f57c00;
}

.categorie-badge {
  background: #f5f5f5;
  color: #333;
}

.detail-infos {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
}

.info-group {
  flex: 1;
  min-width: 200px;
  background: #f9f9f9;
  padding: 1.2rem;
  border-radius: 10px;
}

.info-group h3 {
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: 0.8rem;
  color: #333;
}

.info-group p {
  margin: 0.5rem 0;
  color: #555;
}

.prix {
  font-weight: 700;
  color: rgb(37, 95, 142);
  font-size: 1.1rem;
}

.detail-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
}

.btn-inscription, .btn-contact {
  padding: 0.8rem 2rem;
  border-radius: 30px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-inscription {
  background: rgb(37, 95, 142);
  color: white;
}

.btn-contact {
  background: #f5f5f5;
  color: #333;
}

.btn-inscription:hover, .btn-contact:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.detail-description {
  margin-top: 2rem;
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 10px;
}

.detail-description h2 {
  font-size: 1.4rem;
  margin-top: 0;
  margin-bottom: 1rem;
  color: #333;
}

.detail-description p {
  line-height: 1.6;
  color: #555;
}

.loading-container {
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: #666;
}

@media (max-width: 600px) {
  .detail-infos {
    flex-direction: column;
    gap: 1rem;
  }
  
  .detail-actions {
    flex-direction: column;
  }
  
  .btn-inscription, .btn-contact {
    width: 100%;
  }
}
</style>
