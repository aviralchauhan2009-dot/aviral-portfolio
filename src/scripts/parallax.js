const parallax = () => {
    const layers = document.querySelectorAll('.parallax-layer');

    const updateLayers = () => {
        const scrollPosition = window.pageYOffset;

        layers.forEach(layer => {
            const depth = layer.getAttribute('data-depth');
            const movement = -(scrollPosition * depth);
            layer.style.transform = `translateY(${movement}px)`;
        });
    };

    window.addEventListener('scroll', updateLayers);
};

document.addEventListener('DOMContentLoaded', parallax);