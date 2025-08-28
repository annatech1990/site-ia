import { ajouterProduits } from './services/produits';

// Fonction qui sera appelée pour initialiser les données
async function initialiserDonnees() {
  try {
    console.log('Début de l\'initialisation des produits...');
    const nombreProduits = await ajouterProduits();
    console.log(`Initialisation terminée ! ${nombreProduits} produits ont été ajoutés à la base de données.`);
  } catch (error) {
    console.error('Erreur lors de l\'initialisation des données :', error);
  }
}

// Décommentez la ligne suivante pour exécuter l'initialisation des données
// initialiserDonnees();

export { initialiserDonnees };
