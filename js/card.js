// Card SwipperJS
new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },

        768: {
            slidesPerView: 2
        },

        1024: {
            slidesPerView: 3
        },
    }
});


function selecionarLugar(lugar, botao) {
    console.log("Botão clicado!", lugar);
    if (!botao) return;

    
    const timestamp = new Date().getTime();
    window.location.replace(`index.html?destino=${encodeURIComponent(lugar)}&t=${timestamp}#agendamentos`);
}


window.onload = function () {
    document.querySelectorAll(".card-button").forEach((button) => {
        button.addEventListener("click", function () {
            const pais = this.getAttribute("data-pais");
            selecionarLugar(pais, this);
        });
    });

    const destinoSelecionado = new URLSearchParams(window.location.search).get("destino");
    if (destinoSelecionado) {
        const campoDestino = document.getElementById("destino");
        if (campoDestino) {
            campoDestino.value = destinoSelecionado;
        }
    }
};

