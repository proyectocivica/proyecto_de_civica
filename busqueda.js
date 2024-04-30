document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

    // Obtén el valor del campo de búsqueda
    var searchTerm = document.getElementById('search-input').value.trim().toLowerCase();

    // Redirige a la página correspondiente según la búsqueda
    switch (searchTerm) {
        case "qué es la educación":
            window.location.href = 'educación.html';
            break;
        case "objetivos":
            window.location.href = 'objetivos.html';
            break;
        case "importancia y funciones":
            window.location.href = 'Funciones.html';
            break;
        case "instituciones encargadas":
            window.location.href = 'Instituciones.html';
            break;
        case "a quién beneficia":
            window.location.href = 'Beneficia.html';
            break;
        default:
            // Si la búsqueda no coincide con ninguna opción, puedes mostrar un mensaje de error o redirigir a una página de resultados genérica
            // Por ejemplo:
            window.location.href = 'resultados.html?query=' + encodeURIComponent(searchTerm);
    }

    // Limpia el campo de búsqueda después de enviar el formulario
    document.getElementById('search-input').value = '';
});