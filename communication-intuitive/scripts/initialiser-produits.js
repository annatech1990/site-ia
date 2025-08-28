import { ajouterProduits } from './services/produits.js';

// Fonction principale pour initialiser les données
async function main() {
  try {
    console.log('Début de l\'initialisation des produits dans Firestore...');
    const nombreProduits = await ajouterProduits();
    console.log(`Initialisation terminée ! ${nombreProduits} produits ont été ajoutés à la base de données.`);
  } catch (error) {
    console.error('Erreur lors de l\'initialisation des données :', error);
  } finally {
    // Terminer le processus pour éviter que le script ne reste en attente
    process.exit(0);
  }
}

// Exécuter la fonction principale
main();
