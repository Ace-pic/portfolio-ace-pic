// Charger les traductions
let translations = {};

fetch('/translations.json')
    .then(response => response.json())
    .then(data => {
        translations = data;
        initLanguage();
    });

// Initialiser la langue (EN par défaut)
function initLanguage() {
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
}

// Changer la langue
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    
    // Mettre à jour tous les éléments avec data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Mettre en évidence la langue active
    document.querySelectorAll('.language-selector a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`.language-selector a[data-lang="${lang}"]`)?.classList.add('active');
}

// Ajouter les event listeners aux liens de langue
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.language-selector a[data-lang]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            setLanguage(this.getAttribute('data-lang'));
        });
    });
});
