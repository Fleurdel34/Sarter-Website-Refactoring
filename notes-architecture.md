# Liste des problèmes identifiés suite à l'analyse du code existant et à la lecture des spécifications fonctionnelles

## fichiers trop volumineux
Les fichiers home.component.ts, country.component.ts et olympic.json (données en dur dans l'application) sont trop volumineux. Le code peut être refactorisé en utilisant les services (appel API), en créant des composants, des fonction et les design patterns. 

## code dupliqué ou obsolète
La méthode subscribe est dépréciée. Elle est utilisée dans la construction de la requête get. Elle est présente dans les fichiers home.component.ts et country.component.ts

La construction des graphiques via l'object new Chart est utilisé dans les deux composants home et country. La création d'un composant réutilisable permettrait d'éviter la duplication du code.

La classe css "center", présente dans le fichier css global de l'application, est réutilisée dans l'un des composants (not-found.scss). Une refactorisation du code pourrait être étudiée.

Le module RouterTestingModule est également déprécié. Il se situe dans le fichier app.component.spec.ts.

## appels HTTP dans les composants
L'appel de la requête get est réalisée dans les composants home et country. La bonne pratique serait la création de ces mêmes requêtes dans un service Angular dédié aux appels API.

## absence de type strict(any)
La présence du typage <any> est codé à tort dans la variable public totalEntries et dans l'appel de la requête get. Les deux fichiers country.component.ts et home.component.ts doivent être refactorisés.

## bout de code à supprimer(console.log())
La présence de deux "console.log" est à supprimer dans le fichier home.component.ts. 
La présence de la valeur private router: Router dans le constructor() du composant countru n'est pas utilisé. Elle doit aussi être supprimée afin d'alléger le code.

## mauvaise gestion des observables
Aucune déclaration de type observable. Mauvaise utilisation de l'opérateur pipe et de la méthode subscribe (ordre erroné). L'enchainement des opérations est volumineux dans la méthode subscribe (). 
La création de fonctions réutilisable pourrait être une option.
Ce constat est identique dans les composants home et country.

## données gérées directement dans le composant => notez comme anti-pattern
L'utilisation d'un fichier json enregistré en dur dans l'application dans les composants Home et Country est une mauvaise pratique. Cela ralenti l'application (fichier volumineux) et peut entraîner une fuite de données.=>anti pattern

## fichiers mal placés (ex: service dans components)=>préparation du back end
Aucun dossier et fichier utilisant les services Angular ont été créé afin de réaliser un appel API ou l'appel aux requêtes REST.
L'appel s'effectue à tort dans les composants home et country. 
Il convient de créer un dossier et un fichier relatif au service et à l'appel de requête afin d'être utilisable par tous les composants de l'application si besoin.
Aucune donnée en dur ne doit être présente (dossier Mock avec le fichier au format json). Il convient de revoir la structure des composants.

## structure des fichiers et logique du code
### structure des fichiers
Il n'existe pas de composants et de fichiers comportant les models de données (ex:interface Participation et interface Olympic).
Il n'existe pas de composant HeaderComponent réutilisable et présent sur toutes les pages.
Il n'existe pas de composant correspondant à la page DashboardPage et CountryDetailPage.
Il n'existe pas de composant loadingPage.
Le composant dédié aux services n'est pas mise en place dans l'application.

## logique du code=>
Absence de balise h1 pour le titre principal.
Absence d'attribut Aria relatif à l'accessibilité.
Le path d'accès à la page détail du pays ne respecte pas la construction demandée. En effet, l'id du pays est un nombre or il a été codé avec le typage string correspondant au nom du pays.
Aucun code prévu si une donnée est vide(empty)=> message "aucune donnée" à rajouter.
Le message de la page error n'est pas clair, il doit être réécrit.

Les balises html sont directement appelées dans les fichiers scss. Il s'agit d'une mauvaise pratique (création de classe ou d'id à prévoir).

Le routerLink possède une string à vide or il manque le symbole "/".

La création de fonction réutilisable est une solution pour optimiser la logique du code notamment afin de subscribe à un observable ou de construire un graphique.

## vérifier le comportement visuel 
Le site n'est pas responsive et ne respecte pas les principes de l'accessibilité. Les éléments suivants sont à améliorer : contraste, taille des focus, aria-label sur les boutons et icônes et descriptions textuelles pour les graphiques.

Absence de la page loading=> squelette simple ou spinner à mettre en place.

La fluidité de la navigation est à améliorer avec l'utilisation des design patterns.

Ajouter l'icone médaille dans le focus sur la page d'accueil car il est manquant.

Le visuel de la page d'accueil ou dashboard et de la page détail par pays sont à adapter en fonction des spécifications fonctionnelles et de la maquette figma (taille des caractères, affichages des pays, ordre données dans les encadrés et texte à rectifier). 
