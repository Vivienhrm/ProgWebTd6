# Photobox - td6 progWeb JS
> * Herrmann Vivien DWM1

Projet de galerie de photo interactive réalisé dans le cadre du TD6 de **Programmation Web**.  
Il s'agit d'une **application web dynamique** permettant de consulter, naviguer et commenter une galerie de photos via une API REST.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=flat-square&logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![Handlebars](https://img.shields.io/badge/Handlebars-000000?style=flat-square&logo=handlebars.js&logoColor=white)

---

## Fonctionnalités principales

- **Affichage détaillé** d’une photo : titre, description, format, dimensions  
- **Informations contextuelles** : catégorie et commentaires liés à la photo  
- **Galerie interactive** : vignettes, navigation paginée, sélection de photo   
- **Navigation par URL** : accès direct à une photo via son `id` (ex : `#105`)  
- **Commentaires** :
  - Liste paginée des commentaires existants
  - Formulaire d’ajout de commentaire (POST)
  - Feedback utilisateur et validation des champs  
- **Interface responsive et accessible**

---

## Technologies

- **HTML5** : Structure de la page  
- **CSS3** : Mise en forme responsive (flexbox, transitions)  
- **JavaScript ES6+** : Modules, `fetch`, `async/await`  
- **Handlebars.js** : Rendu dynamique via templates  
- **API REST** : Communication backend  
- **esbuild** : Bundling des scripts

## Installation locale

### Prérequis

Il faut avoir accès au réseau IUT Nancy-Charlemagne ou d'utiliser le VPN.

### Etapes

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/Vivienhrm/ProgWebTd6.git
   ```

2. **Compiler le projet**
   ```bash
   npm run build
   ```

3. **Lancer un server local** (exemple : http-server)
   ```
   npx http-server . -p 8080 --cors
   ```

