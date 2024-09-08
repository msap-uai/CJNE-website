// Función para obtener publicaciones de MercadoLibre
async function fetchMercadoLibrePosts() {
    try {
      const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=club%20jardin%20nautico%20escobar');
      const data = await response.json();
      return data.results.map(post => ({
        ...post,
        imageUrl: post.thumbnail.replace('-I.jpg', '-F.jpg'), // Ajusta el sufijo según lo que necesites
        postUrl: post.permalink // URL de la publicación
      }));
    } catch (error) {
      console.error('Error fetching data from MercadoLibre:', error);
    }
  }
  
  // Función para construir el carrusel
  async function buildCarousel() {
    const posts = await fetchMercadoLibrePosts();
    const carouselInner = document.querySelector('#propiedades-carousel');
  
    posts.forEach((post, index) => {
      const activeClass = index === 0 ? 'active' : '';
      const item = document.createElement('div');
      item.className = `carousel-item ${activeClass}`;
      item.innerHTML = `
        <a href="${post.postUrl}" target="_blank"> <!-- Enlace a la publicación -->
          <img src="${post.imageUrl}" class="d-block w-100" alt="${post.title}">
        </a>
        <div class="carousel-caption d-none d-md-block">
          <h5>${post.title}</h5>
          <p>${post.price} ${post.currency_id}</p>
        </div>
      `;
      carouselInner.appendChild(item);
    });
  }
  
  // Inicializa el carrusel cuando la página esté lista
  document.addEventListener('DOMContentLoaded', buildCarousel);
  