# Annonces d'appartements
## Installation
1. Cloner le dépôt GitHub : `git@github.com:maelmane/annonce-appartements.git`
2. Accéder au répertoire du projet : `cd annonce-appartements`
3. Installer les dépendances : `npm install`

## Backend - API d'annonces de propriétés
Ce projet vise à créer une API simple pour fournir des données sur les annonces d'appartements. L'API permet aux utilisateurs d'accéder aux annonces et éventuellement de filtrer les résultats en fonction de certains critères.

### Technologies utilisées
Ce projet a été développé en utilisant [Node.js](https://nodejs.org/) pour le backend de l'API.

### Exécution
Pour exécuter l'API, utilisez la commande suivante :
`npm start`

L'API sera accessible à l'adresse `http://localhost:8000`.

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

## Frontend - Tableau de bord
Ce projet vise à construire un tableau de bord web simple qui affiche une liste d'appartements disponibles à la location. Le tableau de bord doit permettre aux utilisateurs de voir les détails des appartements.

### Technologies utilisées
Ce projet a été développé en utilisant [React](https://react.dev/) pour le frontend.

### Exécution
1. Accéder au répertoire de l'application web : `cd client`
2. Exécuter l'application web, utilisez la commande suivante :`npm start`
L'application web sera accessible à l'adresse `http://localhost:3000`.

## Auteur
Ce projet a été réalisé par Maël Mane.

## Licence
Ce projet est sous licence GPLv3. Consultez le fichier LICENSE.md pour plus de détails.
