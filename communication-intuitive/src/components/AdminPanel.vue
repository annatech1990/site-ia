<template>
  <div class="admin-panel">
    <h2>Panneau d'administration</h2>
    
    <div class="admin-actions">
      <div class="action-card">
        <h3>Initialisation de la base de données</h3>
        <p>Cette action va créer des produits de test dans votre base de données Firebase.</p>
        <button @click="initialiserDB" class="btn-action" :disabled="loading">
          {{ loading ? 'Initialisation en cours...' : 'Initialiser les produits' }}
        </button>
        <p v-if="resultMessage" :class="{'success-message': success, 'error-message': !success}">
          {{ resultMessage }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ajouterProduits } from '../services/produits';

const loading = ref(false);
const resultMessage = ref('');
const success = ref(false);

// Fonction pour initialiser la base de données
const initialiserDB = async () => {
  if (loading.value) return;
  
  try {
    loading.value = true;
    resultMessage.value = '';
    
    // Confirmation avant initialisation
    if (!confirm('Êtes-vous sûr de vouloir initialiser la base de données avec des produits de test ? Cette action ne peut pas être annulée.')) {
      loading.value = false;
      return;
    }
    
    const nombreProduits = await ajouterProduits();
    
    success.value = true;
    resultMessage.value = `Initialisation réussie ! ${nombreProduits} produits ont été ajoutés à la base de données.`;
  } catch (error) {
    console.error('Erreur lors de l\'initialisation :', error);
    success.value = false;
    resultMessage.value = `Erreur : ${error.message}`;
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.admin-panel {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
}

.admin-actions {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.action-card {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid rgb(37, 95, 142);
}

h3 {
  margin-top: 0;
  color: rgb(37, 95, 142);
}

.btn-action {
  background: rgb(37, 95, 142);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 1rem;
}

.btn-action:hover:not(:disabled) {
  background: rgb(28, 72, 109);
}

.btn-action:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.success-message {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #e8f5e9;
  color: #2e7d32;
  border-radius: 4px;
}

.error-message {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #ffebee;
  color: #c62828;
  border-radius: 4px;
}
</style>
