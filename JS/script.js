var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  function renderCards(data, contenedor) {
    for (let dato of data) {
        contenedor.innerHTML +=`<div class="card align-self-strecht" style="width: 18rem;">
            <img src="${dato.image}" alt="${dato.name}" class="carta card-img-top">
            <div class="card-body text-center">
                <h5 class="card-title">${dato.name}</h5>
                <p class="card-text">Dirección: ${dato.direccion}</p>
                <p class="card-text">Teléfono: ${dato.telefono}</p>
                <a href="mailto:${dato.mail}">${dato.mail}</a>
                <p class="card-text">Ubicación:${dato.ubicacion}</p>
                <iframe src="${dato.frame}" width="240px" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
        </div>`;
    }
}

function renderCards2(data, contenedor) {
  for (let dato of data) {
      contenedor.innerHTML +=`<div class="card align-self-strecht" style="width: 18rem;">
          <img src="${dato.image}" alt="${dato.name}" class="carta card-img-top">
          <div class="card-body text-center">
              <h5 class="card-title">${dato.name}</h5>
              <p class="card-text">Dirección: ${dato.direccion}</p>
              <p class="card-text">Teléfono: ${dato.telefono}</p>
              <p class="card-text">Ubicación:${dato.ubicacion}</p>
              <iframe src="${dato.frame}" width="240" height="200" frameborder="0" style="border:0" allowfullscreen></iframe>
          </div>
      </div>`;
  }
}

  