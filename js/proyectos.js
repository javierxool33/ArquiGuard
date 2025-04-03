
function toggleMenu() {
    document.querySelector('.menu').classList.toggle('active');
}

const carousel = document.querySelector('.carrocel');
const carouselItems = document.querySelectorAll('.carrocel-item');
const prevBtn = document.querySelector('.antes');
const nextBtn = document.querySelector('.despues');
const modalBtns = document.querySelectorAll('.modal-bton');
const modals = document.querySelectorAll('.mimodal');
const closeBtns = document.querySelectorAll('.cerrar');

let index = 0;

nextBtn.addEventListener('click', () => {
  index = (index + 1) % carouselItems.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + carouselItems.length) % carouselItems.length;
  updateCarousel();
});

function updateCarousel() {
  carousel.style.transform = `translateX(${-index * 100 / 3}%)`;
}

modalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.modal;
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
    modal.style.display = 'block';
  });
});

closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.mimodal');
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300);
  });
});

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.classList.remove('show');
    setTimeout(() => {
      event.target.style.display = 'none';
    }, 300);
  }
});

