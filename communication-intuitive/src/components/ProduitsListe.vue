<template>
  <div class="produits-liste">
    <h2>{{ titre }}</h2>
    
    <div class="filtres" v-if="showFilters">
      <div class="filtre">
        <label for="niveau">Niveau :</label>
        <select id="niveau" v-model="filtres.niveau" @change="chargerProduits">
          <option value="">Tous</option>
          <option value="debutant">Débutant</option>
          <option value="intermediaire">Intermédiaire</option>
          <option value="avance">Avancé</option>
          <option value="tous">Tous niveaux</option>
        </select>
      </div>
      
      <div class="filtre">
        <label for="pays">Pays :</label>
        <select id="pays" v-model="filtres.pays">
          <option value="">Tous</option>
          <option v-for="pays in paysList" :key="pays" :value="pays">{{ pays }}</option>
        </select>
      </div>
      
      <div class="filtre">
        <label for="categorie">Catégorie :</label>
        <select id="categorie" v-model="filtres.categorie">
          <option value="">Toutes</option>
          <option v-for="cat in categoriesList" :key="cat" :value="cat">{{ cat }}</option>
        </select>
      </div>
    </div>
    
    <div v-if="loading" class="loading">
      Chargement des produits...
    </div>
    
    <div v-else-if="produitsFiltres.length === 0" class="no-results">
      Aucun produit ne correspond à vos critères.
    </div>
    
    <div v-else class="produits-grid">
      <div v-for="produit in produitsFiltres" :key="produit.code" class="produit-card" @click="selectProduit(produit)">
        <div class="produit-header">
          <span class="produit-code">{{ produit.code }}</span>
          <span class="produit-niveau" :class="produit.niveau">{{ getNiveauLabel(produit.niveau) }}</span>
        </div>
        <h3>{{ produit.titre }}</h3>
        <p class="produit-categorie">{{ produit.categorie }}</p>
        <p class="produit-dates">
          {{ formatDate(produit.dateDebut) }} - {{ formatDate(produit.dateFin) }}
        </p>
        <p class="produit-lieu">{{ produit.lieu }}, {{ produit.pays }}</p>
        <p class="produit-animateur">Animé par : {{ produit.animateur }}</p>
        <p class="produit-prix">{{ produit.prix }} €</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { getProduitsByNiveau } from '../services/produits';

export default {
  name: 'ProduitsListe',
  props: {
    titre: {
      type: String,
      default: 'Nos produits'
    },
    showFilters: {
      type: Boolean,
      default: true
    },
    initialFilters: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { emit }) {
    const produits = ref([]);
    const loading = ref(false);
    const filtres = ref({
      niveau: props.initialFilters.niveau || '',
      pays: props.initialFilters.pays || '',
      categorie: props.initialFilters.categorie || ''
    });
    
    // Computed properties pour les listes de filtres
    const paysList = computed(() => {
      const pays = new Set(produits.value.map(p => p.pays));
      return [...pays].sort();
    });
    
    const categoriesList = computed(() => {
      const categories = new Set(produits.value.map(p => p.categorie));
      return [...categories].sort();
    });
    
    // Computed property pour les produits filtrés
    const produitsFiltres = computed(() => {
      return produits.value.filter(produit => {
        const niveauMatch = !filtres.value.niveau || produit.niveau === filtres.value.niveau;
        const paysMatch = !filtres.value.pays || produit.pays === filtres.value.pays;
        const categorieMatch = !filtres.value.categorie || produit.categorie === filtres.value.categorie;
        
        return niveauMatch && paysMatch && categorieMatch;
      });
    });
    
    // Fonction pour charger les produits
    const chargerProduits = async () => {
      try {
        loading.value = true;
        console.log('Chargement des produits...');
        const produitsData = await getProduitsByNiveau(filtres.value.niveau);
        console.log(`${produitsData.length} produits chargés`);
        produits.value = produitsData;
      } catch (error) {
        console.error('Erreur lors du chargement des produits :', error);
      } finally {
        loading.value = false;
      }
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
      
      return `${jour}/${mois}/${annee} ${heures}:${minutes}`;
    };
    
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
    
    // Fonction pour sélectionner un produit
    const selectProduit = (produit) => {
      emit('select-produit', produit);
    };
    
    // Charger les produits au montage du composant
    onMounted(() => {
      chargerProduits();
    });
    
    return {
      produits,
      filtres,
      paysList,
      categoriesList,
      produitsFiltres,
      formatDate,
      getNiveauLabel,
      selectProduit,
      loading,
      chargerProduits
    };
  }
};
</script>

<style scoped>
.produits-liste {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.filtres {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.filtre {
  display: flex;
  flex-direction: column;
  min-width: 150px;
}

.filtre label {
  font-weight: 500;
  margin-bottom: 0.3rem;
}

.filtre select {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.produits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.produit-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.produit-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.produit-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.produit-code {
  font-weight: 600;
  color: #666;
}

.produit-niveau {
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.produit-niveau.debutant {
  background: #e1f5fe;
  color: #0288d1;
}

.produit-niveau.intermediaire {
  background: #e8f5e9;
  color: #388e3c;
}

.produit-niveau.avance {
  background: #f3e5f5;
  color: #8e24aa;
}

.produit-niveau.tous {
  background: #fff3e0;
  color: #f57c00;
}

.produit-card h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  color: #333;
}

.produit-categorie {
  color: #666;
  font-style: italic;
  margin-bottom: 1rem;
}

.produit-dates, .produit-lieu, .produit-animateur {
  margin: 0.3rem 0;
  color: #555;
}

.produit-prix {
  margin-top: auto;
  font-weight: 700;
  font-size: 1.2rem;
  color: rgb(37, 95, 142);
}

@media (max-width: 768px) {
  .produits-grid {
    grid-template-columns: 1fr;
  }
  
  .filtres {
    flex-direction: column;
  }
}
</style>
