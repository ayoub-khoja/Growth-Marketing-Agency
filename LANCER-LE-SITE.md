# Lancer le site growth Marketing Agency

## La première fois (une seule fois)

1. Installez **Node.js** (version 20 ou plus) depuis https://nodejs.org (bouton « LTS »), puis redémarrez le PC.
2. Ouvrez le dossier `growthmarketingagency.tn` sur le Bureau.
3. Cliquez dans la barre d'adresse de l'explorateur, tapez `cmd` puis Entrée : une fenêtre noire s'ouvre dans le bon dossier.
4. Tapez :

   ```
   npm install
   ```

   Attendez la fin (1 à 2 minutes).

## Voir le site sur votre PC

Dans la même fenêtre, tapez :

```
npm run dev
```

Puis ouvrez **http://localhost:3000** dans votre navigateur.
Chaque modification enregistrée s'affiche aussitôt. Pour arrêter : `Ctrl + C` dans la fenêtre noire.

## Modifier les textes

| Ce que vous voulez changer | Fichier à ouvrir |
| --- | --- |
| Téléphone, WhatsApp, e-mail, adresse, réseaux sociaux | `src/config/site.ts` |
| Chiffres, services, réalisations, étapes, avis, FAQ | `src/content/home.ts` |
| Logo | `public/logo-growth.png` |

⚠️ **Avant la mise en ligne**, remplacez :
- le numéro de téléphone et le numéro WhatsApp (actuellement `+216 00 000 000`) ;
- les chiffres du haut de page, les 4 réalisations et les 3 avis clients : ce sont des **exemples** à remplacer par vos vrais résultats.

## Mettre en ligne

Le plus simple est **Vercel** (gratuit pour démarrer) : créez un compte sur https://vercel.com, importez le dossier
(via GitHub), puis reliez le domaine `growthmarketingagency.tn` dans les réglages du projet.

Pour tester la version finale sur votre PC : `npm run build` puis `npm start`.
