// Se ejecuta cuando el contenido del DOM se ha cargado completamente
window.addEventListener('DOMContentLoaded', event => {

    // Función para reducir el tamaño de la barra de navegación
    var navbarShrink = function () {
        // Selecciona el elemento de la barra de navegación con el id 'mainNav'
        const navbarCollapsible = document.body.querySelector('#mainNav');
        
        // Si no existe la barra de navegación, se sale de la función
        if (!navbarCollapsible) {
            return;
        }

        // Comprueba si el desplazamiento vertical es cero (la página está en la parte superior)
        if (window.scrollY === 0) {
            // Remueve la clase 'navbar-shrink' si estamos en la parte superior
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            // Agrega la clase 'navbar-shrink' si no estamos en la parte superior
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    // Llama a la función para reducir el tamaño de la barra de navegación en la carga de la página
    navbarShrink();

    // Agrega un evento de escucha al desplazamiento de la página para reducir la barra de navegación
    document.addEventListener('scroll', navbarShrink);

    // Activa la funcionalidad ScrollSpy de Bootstrap en el elemento de la barra de navegación principal
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav', // Objetivo del ScrollSpy
            rootMargin: '0px 0px -40%', // Margen para activar las secciones en el ScrollSpy
        });
    }

    // Maneja el colapso de la barra de navegación en pantallas pequeñas
    const navbarToggler = document.body.querySelector('.navbar-toggler'); // Botón de toggler de la barra de navegación
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link') // Todos los enlaces de navegación dentro del contenedor '#navbarResponsive'
    );

    // Agrega un evento de escucha a cada enlace de navegación para manejar el colapso de la barra de navegación
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            // Verifica si el botón de toggler es visible
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                // Simula un clic en el botón de toggler para colapsar la barra de navegación
                navbarToggler.click();
            }
        });
    });

});
