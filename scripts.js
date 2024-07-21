document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const menu = document.getElementById('menu');
    const imageGrid = document.querySelector('.image-grid');

    // Toggle menu
    menuButton.addEventListener('click', function() {
        menu.classList.toggle('open');
        menuButton.querySelector('.menu-circle').classList.toggle('spin');
    });

    // Image gallery
    const images = [
        'image1.jpg',
        'image2.jpg',
        // List all image file names here
    ];

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `images/${image}`;
        imgElement.addEventListener('click', () => openImageInModal(image));
        imageGrid.appendChild(imgElement);
    });

    function openImageInModal(image) {
        const modal = document.createElement('div');
        modal