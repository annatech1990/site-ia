import { db } from '../firebase';
import { collection, addDoc, Timestamp, query, where, getDocs } from 'firebase/firestore';

// Fonction pour ajouter des produits à Firestore
export async function ajouterProduits() {
  try {
    const produitsCollection = collection(db, 'produits');
    
    // Liste des produits à ajouter
    const produits = [
      {
        code: 'F001',
        dateDebut: Timestamp.fromDate(new Date('2025-09-15T09:00:00')),
        dateFin: Timestamp.fromDate(new Date('2025-09-17T17:00:00')),
        lieu: 'Paris',
        pays: 'France',
        niveau: 'debutant',
        titre: 'Initiation à la communication intuitive',
        categorie: 'Formation',
        animateur: 'Anna Evans',
        prix: 350
      },
      {
        code: 'F002',
        dateDebut: Timestamp.fromDate(new Date('2025-10-10T10:00:00')),
        dateFin: Timestamp.fromDate(new Date('2025-10-12T16:00:00')),
        lieu: 'Lyon',
        pays: 'France',
        niveau: 'intermediaire',
        titre: 'Approfondissement de la communication animale',
        categorie: 'Formation',
        animateur: 'Anna Evans',
        prix: 450
      },
      {
        code: 'F003',
        dateDebut: Timestamp.fromDate(new Date('2025-11-05T09:30:00')),
        dateFin: Timestamp.fromDate(new Date('2025-11-08T18:00:00')),
        lieu: 'Genève',
        pays: 'Suisse',
        niveau: 'avance',
        titre: 'Communication intuitive professionnelle',
        categorie: 'Formation',
        animateur: 'Anna Evans',
        prix: 750
      },
      {
        code: 'W001',
        dateDebut: Timestamp.fromDate(new Date('2025-09-25T14:00:00')),
        dateFin: Timestamp.fromDate(new Date('2025-09-25T17:00:00')),
        lieu: 'En ligne',
        pays: 'International',
        niveau: 'debutant',
        titre: 'Webinaire d\'introduction',
        categorie: 'Webinaire',
        animateur: 'Anna Evans',
        prix: 60
      },
      {
        code: 'C001',
        dateDebut: Timestamp.fromDate(new Date('2025-12-01T18:30:00')),
        dateFin: Timestamp.fromDate(new Date('2025-12-01T21:00:00')),
        lieu: 'Marseille',
        pays: 'France',
        niveau: 'tous',
        titre: 'Conférence : L\'intelligence animale',
        categorie: 'Conférence',
        animateur: 'Anna Evans',
        prix: 25
      },
      {
        code: 'F004',
        dateDebut: Timestamp.fromDate(new Date('2026-01-20T09:00:00')),
        dateFin: Timestamp.fromDate(new Date('2026-01-23T17:00:00')),
        lieu: 'Bruxelles',
        pays: 'Belgique',
        niveau: 'intermediaire',
        titre: 'Communication avec les animaux sauvages',
        categorie: 'Formation',
        animateur: 'Anna Evans',
        prix: 550
      },
      {
        code: 'R001',
        dateDebut: Timestamp.fromDate(new Date('2025-10-05T10:00:00')),
        dateFin: Timestamp.fromDate(new Date('2025-10-09T16:00:00')),
        lieu: 'Domaine Equestre',
        pays: 'France',
        niveau: 'tous',
        titre: 'Retraite avec les chevaux',
        categorie: 'Retraite',
        animateur: 'Anna Evans',
        prix: 890
      },
      {
        code: 'F005',
        dateDebut: Timestamp.fromDate(new Date('2025-11-15T09:00:00')),
        dateFin: Timestamp.fromDate(new Date('2025-11-17T17:00:00')),
        lieu: 'Montpellier',
        pays: 'France',
        niveau: 'debutant',
        titre: 'Initiation à la communication intuitive',
        categorie: 'Formation',
        animateur: 'Anna Evans',
        prix: 350
      },
      {
        code: 'C002',
        dateDebut: Timestamp.fromDate(new Date('2025-12-15T19:00:00')),
        dateFin: Timestamp.fromDate(new Date('2025-12-15T21:30:00')),
        lieu: 'Toulouse',
        pays: 'France',
        niveau: 'tous',
        titre: 'Conférence : Éthique et communication animale',
        categorie: 'Conférence',
        animateur: 'Anna Evans',
        prix: 25
      },
      {
        code: 'F006',
        dateDebut: Timestamp.fromDate(new Date('2026-02-10T09:00:00')),
        dateFin: Timestamp.fromDate(new Date('2026-02-14T17:00:00')),
        lieu: 'Barcelone',
        pays: 'Espagne',
        niveau: 'avance',
        titre: 'Perfectionnement à la communication intuitive',
        categorie: 'Formation',
        animateur: 'Anna Evans',
        prix: 850
      }
    ];
    
    // Ajouter chaque produit à la collection
    for (const produit of produits) {
      await addDoc(produitsCollection, produit);
      console.log(`Produit ${produit.code} ajouté avec succès !`);
    }
    
    console.log('Tous les produits ont été ajoutés à la base de données.');
    return produits.length;
  } catch (error) {
    console.error('Erreur lors de l\'ajout des produits :', error);
    throw error;
  }
}

// Fonction pour récupérer les produits par niveau
export async function getProduitsByNiveau(niveau) {
  try {
    const produitsRef = collection(db, 'produits');
    let q;
    
    if (niveau && niveau !== 'tous') {
      q = query(produitsRef, where('niveau', '==', niveau));
    } else {
      q = query(produitsRef);
    }
    
    const querySnapshot = await getDocs(q);
    const produits = [];
    
    querySnapshot.forEach((doc) => {
      produits.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return produits;
  } catch (error) {
    console.error('Erreur lors de la récupération des produits par niveau :', error);
    throw error;
  }
}

// Fonction pour récupérer un produit par son code
export async function getProduitByCode(code) {
  try {
    const produitsRef = collection(db, 'produits');
    const q = query(produitsRef, where('code', '==', code));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      console.error(`Aucun produit trouvé avec le code ${code}`);
      return null;
    }
    
    const doc = querySnapshot.docs[0];
    return {
      id: doc.id,
      ...doc.data()
    };
  } catch (error) {
    console.error(`Erreur lors de la récupération du produit ${code} :`, error);
    throw error;
  }
}
