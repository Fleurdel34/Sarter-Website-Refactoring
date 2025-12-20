# Liste des problèmes identifiés suite à l'analyse du code existant et à la lecture des spécifications fonctionnelles

## fichiers trop volumineux
Les fichiers home.component.ts, country.component.ts et olympic.json (données en dur dans l'application) sont trop volumineux. Le code peut être refactorisé en utilisant les services (appel API), en créant des composants, des fonctions et les design patterns. 

## code dupliqué ou obsolète
La méthode subscribe est dépréciée. Elle est utilisée dans la construction de la requête get. Elle est présente dans les fichiers home.component.ts et country.component.ts

La construction des graphiques via l'object new Chart est utilisé dans les deux composants home et country. La création d'un composant réutilisable permettrait d'éviter la duplication du code.

La classe css "center", présente dans le fichier css global de l'application, est réutilisée dans l'un des composants (not-found.scss). Une refactorisation du code pourrait être étudiée.

Le module RouterTestingModule est également déprécié. Il se situe dans le fichier app.component.spec.ts.

## appels HTTP dans les composants
L'appel de la requête get est réalisée dans les composants home et country. La bonne pratique serait de créer ces mêmes requêtes dans un service Angular dédié aux appels API.

## absence de type strict(any)
La présence du typage <any> est codé à tort dans la variable public totalEntries et dans l'appel de la requête get. Les deux fichiers country.component.ts et home.component.ts doivent être refactorisés.

## bout de code à supprimer(console.log())
La présence de deux "console.log" est à supprimer dans le fichier home.component.ts. 
La présence de la valeur private router: Router dans le constructor() du composant country n'est pas utilisé. Elle doit aussi être supprimée afin d'alléger le code.

## mauvaise gestion des observables
Aucune déclaration de type observable. 
Mauvaise utilisation de l'opérateur pipe et de la méthode subscribe (ordre erroné). L'enchainement des opérations est volumineux dans la méthode subscribe (). 
La création de fonctions réutilisables pourrait être une option. Ce constat est identique dans les composants home et country.

## données gérées directement dans le composant => notez comme anti-pattern
L'utilisation d'un fichier json dans les composants home et country et enregistré en dur dans l'application est une mauvaise pratique. Cela ralenti l'application (fichier volumineux) et peut entraîner une fuite de données.=>anti pattern

## fichiers mal placés (ex: service dans components)
Aucun dossier et fichier utilisant les services Angular ont été créés afin de réaliser un appel API ou un appel aux requêtes REST. L'appel s'effectue à tort dans les composants home et country. 
Il convient de créer un dossier et un fichier relatif au service pour l'appel de requêtes afin d'être utilisable par tous les composants de l'application.
Aucune donnée en dur ne doit être présente (dossier Mock avec le fichier au format json). Il convient de revoir la structure des composants.

## structure des fichiers et logique du code
### structure des fichiers
Il n'existe pas de composants et de fichiers comportant les models de données (ex:interface Participation et interface Olympic).
Il n'existe pas de composant HeaderComponent réutilisable et présent sur toutes les pages.
Il n'existe pas de composant correspondant à la page DashboardPage et CountryDetailPage.
Il n'existe pas de composant ou d'état loading.
Le composant dédié aux services n'est pas mise en place dans l'application.

## logique du code
Absence de balise h1 pour le titre principal.
Absence d'attribut Aria relatif à l'accessibilité.

Le path d'accès à la page détail du pays ne respecte pas la construction demandée. En effet, l'id du pays est un nombre or il a été codé avec le typage string correspondant au nom du pays.

Aucun code prévu si une donnée est vide(empty)=> message "aucune donnée" à rajouter.

Le message de la page error n'est pas clair, il doit être réécrit. Il existe deux routes pour accèder à la page d'error, il convient de n'en conserver qu'une seule.

Les balises html sont directement appelées dans les fichiers scss. Il s'agit d'une mauvaise pratique (création de classe ou d'id à prévoir).

Le routerLink possède une string à vide or il manque le symbole "/".

La création de fonction réutilisable est une solution pour optimiser la logique du code notamment afin de subscribe à un observable ou de construire un graphique.

Dans l'objet de configuration @Component, il manque le tableau des imports afin d'y ajouter les dépendances des composants.

## vérifier le comportement visuel 
Le site n'est pas responsive et ne respecte pas les principes de l'accessibilité. Les éléments suivants sont à améliorer : contraste, taille des focus, aria-label sur les boutons/icônes et descriptions textuelles pour les graphiques.

Absence de composant loading=> squelette simple ou spinner à mettre en place.

La fluidité de la navigation est à améliorer avec l'utilisation des design patterns et du routing.

Ajouter l'icône médaille dans le focus sur la page d'accueil car il est manquant.
Ajouter le logo dont l'image est présente dans le dossier assets/images.

Le visuel de la page d'accueil ou dashboard et de la page détail par pays sont à adapter en fonction des spécifications fonctionnelles et de la maquette figma (taille des caractères, affichages des pays, ordre donné dans les encadrés et texte à rectifier). 


## Schéma et explication de la nouvelle structure front-end:

## Schéma
src/app/
    |── components/ 
    |    ├──header/
    |    |        ├── header.component.ts
    |    |        ├── header.component.html
    |    |        └── header.component.css
    ├── pages/
    |    ├──dashboard-page/
    |    |        ├── dashboard-page.component.ts
    |    |        ├── dashboard-page.component.html
    |    |        └── dashboard-page.component.css               
    |    ├──country-detail-page/
    |    |        ├── country-detail-page.component.ts
    |    |        ├── country-detail-page.component.html
    |    |        └── country-detail-page.component.css                            
    ├── services/  
    |    ├──data.service.ts
    ├── models/
    |    ├──participation.interface.ts
    |    ├──olympic.interface.ts

## Explication

La structure proposée ci-dessus présente plusieurs avantages:

=> La séparation des composants et des services:
Les services seront créés à partir du design pattern "Singleton Pattern" car il permet de gérer la connexion au back-end et à la base de données. En séparant les composants des services et en utilisant le Singleton Pattern, cela économisera les ressources (la classe est instanciée une seule fois pour toute l'application) et diminuera le recours aux variables globales (effets de bord évités).

Les services permettent de:
    =>centraliser les données,
    =>améliorer l'organisation du code en évitant de le répéter,
    =>partager des données à tous les composants dans toute l'application. Ces derniers pourront accèder aux mêmes données,
    =>intéragir avec les différents composants,
    =>possèder des données toujours à jour,
    =>éviter aux composant d'accèder aux injections de données (anti-patern),
    =>accroître la flexibilité de l'application.


=> création des models:
La logique applicative inclut la notion de model. La vue correspond à ce que le model affiche. 
L'utilisation du constructor pattern permet de faciliter et de centraliser la création et le formatage des données du model. Ainsi, il permet d'apporter des modifications ultérieures à un seul endroit du code. 

=> création de composant:
La séparation entre les composants et les services augmente la modularité et la réutilisabilité.
Le composant facilite l'expérience utilisateur. Il assure la communication entre la vue et la logique applicative.

Conclusion: 
Cette structure permet de maintenir une organisation compréhensible, plus lisible et plus facile à maintenir.
