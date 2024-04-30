document.querySelectorAll('.show-more').forEach(item => {
    item.addEventListener('click', event => {
        const card = item.parentNode; // Obtiene el contenedor de la tarjeta
        const moreInfo = item.nextElementSibling; // Obtiene el contenedor de información adicional

        if (moreInfo.style.display === 'none' || !moreInfo.style.display) {
            moreInfo.style.display = 'block'; // Muestra la información adicional si está oculta
            item.textContent = 'Ver menos'; // Cambia el texto del enlace a "Ver menos"
            card.style.height = 'auto'; // Hace que la tarjeta ajuste automáticamente su altura para mostrar toda la información
        } else {
            moreInfo.style.display = 'none'; // Oculta la información adicional si está visible
            item.textContent = 'Ver más'; // Cambia el texto del enlace a "Ver más"
            card.style.height = '20rem'; // Restaura la altura original de la tarjeta
        }
    });
});