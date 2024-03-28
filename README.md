# test-housing-hawk
## Backend - API d'annonces de propriétés
Ce projet vise à créer une API simple pour fournir des données sur les annonces d'appartements. L'API permet aux utilisateurs d'accéder aux annonces et éventuellement de filtrer les résultats en fonction de certains critères.

### Technologies utilisées
Ce projet a été développé en utilisant [Node.js](https://nodejs.org/) pour le backend de l'API.

### Installation
1. Cloner le dépôt GitHub : `git clone https://github.com/maelmane/test-housing-hawk.git`
2. Accéder au répertoire du projet : `cd test-housing-hawk`
3. Installer les dépendances : `npm install`

### Exécution
Pour exécuter l'API, utilisez la commande suivante :
`npm start`

L'API sera accessible à l'adresse `http://localhost:3000`.

### Points de terminaison

#### 1. Récupérer toutes les annonces
- **Endpoint**: `/proprietes`
- **Méthode HTTP**: GET
- **Description**: Renvoie toutes les annonces d'appartements.

#### 2. Récupérer une annonce
- **Endpoint**: `/proprietes/{id}`
- **Méthode HTTP**: GET
- **Description**: Renvoie l'annonce de l'appartement ayant l'id spécifié.

### Stockage des données
Les données des annonces sont stockées dans une base de données MongoDB.


