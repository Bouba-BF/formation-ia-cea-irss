// Script de vérification d'authentification
// À inclure dans toutes les pages du site
function checkAuthentication() {
    if (sessionStorage.getItem('authenticated') !== 'true') {
        // Rediriger vers la page de connexion
        window.location.href = "login.html";
    }
}

// Exécuter la vérification au chargement de la page
checkAuthentication();
