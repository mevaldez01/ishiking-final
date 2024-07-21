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
        modal.classList.add('modal');

        const imgElement = document.createElement('img');
        imgElement.src = `images/${image}`;

        const closeModal = document.createElement('span');
        closeModal.textContent = '×';
        closeModal.classList.add('modal-close');
        closeModal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        modal.appendChild(imgElement);
        modal.appendChild(closeModal);
        document.body.appendChild(modal);
    }
});
