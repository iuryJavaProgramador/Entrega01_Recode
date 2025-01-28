document.addEventListener('DOMContentLoaded', function() {

    // WhatsApp integration
    document.getElementById('whatsapp-button').addEventListener('click', function () {
        const phone = '+5521980892914';
        const message = 'Olá, gostaria de saber mais sobre viagens.';
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url, '_blank');
    });
  
});