## Architecture de la nouvelle structure front-end:

L'application est composée de 4 dossiers:

=>Le dossier models comprend deux interfaces (olympic.ts et participation.ts).
La création et le formatage de données via un model permettent d'apporter des modifications ultérieures à un seul endroit du code. 

=>Le dossier components comprend:
    =>un composant header. Ce dernier affiche un en-tête réutilisable par l'ensemble des pages. Ainsi, il est importé et utilisé à la racine de l'application dans App.component.html.
    => un composant pie-chart. Il gère la construction et l'affichage d'un diagramme rond de l'ensemble des pays dont les données figurent dans le tableau intégré au service.

=>Le dossier pages comporte trois composants: 
    =>dashboard-page: Celui-ci correspond à la page d'accueil. Elle affiche le nombre total de pays médaillés, le nombre total de jeux olympiques et un diagramme rond récapitulant les pays participants ainsi que leur nombre total de médailles.

    =>country-detail-page: ce composant parent contient deux composants enfant:
        =>country-card
        =>medal-chart
    Le composant country-detail-page correspond à la page dédiée à l'affichage des données et d'un diagramme en ligne du pays sélectionné par l'utilisateur. 
    Le composant enfant medal-chart gère la construction et l'affichage du diagramme en ligne du pays concerné dont les données figurent dans le tableau intégré au service. 
    Le composant enfant country-card affiche le nombre de participation, le nombre total de médailles et le nombre total d'athlètes du pays concerné.

    =>not-found-page: il affiche une page d'erreur. L'utilisateur est informé que l'URL saisie est incorrecte et a la possibilité de revenir sur la page d'accueil via un lien.

Les composants facilitent l'expérience utilisateur. Ils assurent la communication entre la vue et la logique applicative.

=> Le dossier service comprend un service (data.service.ts). La création de ce dossier et de ce fichier préparent l'intégration future d'une connexion au back-end/API.
Les services permettent, donc, de gérer cette connexion via des appels API REST.
Ils permettent de:
    =>centraliser les données,
    =>améliorer l'organisation du code en évitant de le répéter,
    =>partager des données et intéragir avec les différents composants dans toute l'application,
    =>possèder des données toujours à jour,
    =>éviter aux composant d'accèder aux injections de données (anti-patern),
    =>accroître la flexibilité de l'application.

Conclusion: 
La séparation des composants et des services contribue à l'économie des ressources, diminue le recours aux variables globales, augmente la modularité et la réutilisabilité et maintient une organisation compréhensible, plus lisible et plus facile à maintenir.
