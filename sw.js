/**
 * SERVICE WORKER (Le Veilleur de Nuit)
 * Ce fichier permet à votre application d'être reconnue comme une vraie application
 * mobile par Android et iOS, permettant ainsi l'installation sur l'écran d'accueil.
 */

// L'événement 'install' se déclenche une seule fois lors de la première visite
self.addEventListener('install', (event) => {
    console.log('Veilleur de nuit : Je suis installé et prêt à surveiller.');
    // Force le service worker à devenir actif immédiatement
    self.skipWaiting();
});

// L'événement 'activate' se déclenche quand le veilleur prend son poste
self.addEventListener('activate', (event) => {
    console.log('Veilleur de nuit : Je suis maintenant actif.');
});

// L'événement 'fetch' est obligatoire pour que l'app soit installable.
// Il intercepte les demandes de ressources (images, scripts, etc.).
// Ici, on laisse tout passer normalement sans rien changer.
self.addEventListener('fetch', (event) => {
    // On ne fait rien de spécial, on laisse le navigateur gérer la connexion
});
