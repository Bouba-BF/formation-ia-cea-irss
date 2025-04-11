// Script amélioré pour les menus déroulants
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier si nous sommes sur la page de connexion
    if (window.location.pathname.includes('login.html')) {
        return; // Ne pas initialiser les menus déroulants sur la page de connexion
    }
    
    console.log("Initialisation des menus déroulants...");
    
    // Fonction pour afficher le menu déroulant
    function showDropdown(event) {
        var dropdownContent = this.querySelector('.dropdown-content');
        if (dropdownContent) {
            dropdownContent.style.display = 'block';
            // Forcer le rendu
            dropdownContent.offsetHeight;
        }
    }
    
    // Fonction pour masquer le menu déroulant
    function hideDropdown(event) {
        var dropdownContent = this.querySelector('.dropdown-content');
        if (dropdownContent) {
            dropdownContent.style.display = 'none';
        }
    }
    
    // Ajouter des écouteurs d'événements pour chaque menu déroulant
    var dropdowns = document.querySelectorAll('.dropdown');
    console.log('Menus déroulants initialisés: ' + dropdowns.length + ' trouvés');
    
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('mouseenter', showDropdown);
        dropdown.addEventListener('mouseleave', hideDropdown);
        
        // Ajouter également des écouteurs pour le clic (utile sur mobile)
        var dropbtn = dropdown.querySelector('.dropbtn');
        if (dropbtn) {
            dropbtn.addEventListener('click', function(e) {
                e.preventDefault();
                var content = dropdown.querySelector('.dropdown-content');
                if (content.style.display === 'block') {
                    content.style.display = 'none';
                } else {
                    content.style.display = 'block';
                }
            });
        }
    });
});
