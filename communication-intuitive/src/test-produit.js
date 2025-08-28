import { getProduitByCode } from './services/produits.js';

async function testGetProduitByCode() {
  try {
    console.log('Test de la fonction getProduitByCode...');
    console.log('Recherche du produit avec le code F001...');
    
    const produit = await getProduitByCode('F001');
    
    if (produit) {
      console.log('Produit trouvé !');
      console.log('Détails du produit :', JSON.stringify(produit, null, 2));
    } else {
      console.error('Produit non trouvé !');
    }
  } catch (error) {
    console.error('Erreur lors du test :', error);
  }
}

// Exécuter la fonction de test
testGetProduitByCode();
