// Script de vérification d'authentification amélioré
function checkAuthentication() {
    // Vérifier si nous sommes déjà sur la page de connexion pour éviter une redirection en boucle
    if (window.location.pathname.includes('login.html')) {
        return; // Ne rien faire si nous sommes déjà sur la page de connexion
    }
    
    if (sessionStorage.getItem('authenticated') !== 'true') {
        // Sauvegarder la page actuelle pour y revenir après connexion
        sessionStorage.setItem('redirectAfterLogin', window.location.href);
        // Rediriger vers la page de connexion
        window.location.href = "login.html";
    }
}

// Exécuter la vérification au chargement de la page, mais après un court délai
// pour permettre au DOM de se charger complètement
window.addEventListener('DOMContentLoaded', function() {
    setTimeout(checkAuthentication, 100);
});
