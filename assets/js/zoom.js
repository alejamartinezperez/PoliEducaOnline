document.addEventListener('DOMContentLoaded', function() {
    const zoomContainer = document.querySelector('#zoom');
    
    zoomContainer.addEventListener('click', function() {
        const image = this.querySelector('img');
        image.classList.toggle('zoomed');
    });
});

