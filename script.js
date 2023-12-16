// 1-Animação da seleção de cada ferramenta:

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
