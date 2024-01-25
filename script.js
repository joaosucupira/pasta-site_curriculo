// 1-Animação da seleção:

document.addEventListener('DOMContentLoaded', function () {
    console.log(document);
    const images = document.querySelectorAll('.animated-image');

    images.forEach(image => {
        image.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.1)';
        });

        image.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
        });
    });
});

// 2-Histograma:
document.addEventListener('DOMContentLoaded', function () {
    console.log(document);
    const histograms = document.querySelectorAll('.histogram');

    histograms.forEach(histogram => {
        const proficiency = histogram.dataset.proficiency;
        histogram.style.width = `${proficiency}%`;
       
    });
});

// 3-Transição de página
document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.circulo-interno');

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var destino = link.getAttribute('href');
            irParaPagina(destino);
        });
    });
});

function irParaPagina(destino) {
    var cobertura = document.getElementById('cobertura');
    cobertura.style.opacity = 1;

    setTimeout(function () {
        window.location.href = destino;
    }, 1000); // Tempo da transição em milissegundos (1 segundo no exemplo)
}

