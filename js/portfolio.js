// <!-- JavaScript for responsive mobile navigation -->

const mobileMenuButton = document.querySelector('.md:hidden');
const mobileMenu = document.querySelector('.hidden.md\\:flex');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// <!-- script for the modal -->

const navbarIcon = document.querySelector('.navbar-icon');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');

navbarIcon.addEventListener('click', () => {
modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
modal.style.display = 'none';
});
