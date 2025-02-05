document.addEventListener('DOMContentLoaded', function() {

    // WhatsApp
    document.getElementById('whatsapp-button').addEventListener('click', function () {
        const phone = '+5521980892914';
        const message = 'Olá, gostaria de saber mais sobre viagens.';
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url, '_blank');
    });  
});

  // Função para procurar o formulário
  function getParametroUrl(nome) {
    const params = new URLSearchParams(window.location.search);
    return params.get(nome);
  }

  window.onload = function() {
    const destinoSelecionado = getParametroUrl("destino");
    if (destinoSelecionado) {
      document.getElementById("destino").value = destinoSelecionado;
    }
  };

  // Função para intercalar o botão do menu
  document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const navbarNav = document.getElementById("navbarNav");

    navbarNav.addEventListener("shown.bs.collapse", function () {
        menuButton.textContent = "close";
    });

    navbarNav.addEventListener("hidden.bs.collapse", function () {
        menuButton.textContent = "menu";
    });
});

