// -----------------------------------------------
// Filtres
// -----------------------------------------------

const filterBtns = document.querySelectorAll('.filter-btn');
const photoItems = document.querySelectorAll('.photo-item');

filterBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		filterBtns.forEach(b => b.classList.remove('active'));
		btn.classList.add('active');

		const filter = btn.dataset.filter;

		photoItems.forEach(item => {
			if (filter === 'tous' || item.dataset.category === filter) {
				item.classList.remove('hidden');
			} else {
				item.classList.add('hidden');
			}
		});
	});
});

// -----------------------------------------------
// Lightbox
// -----------------------------------------------

const lightbox     = document.getElementById('lightbox');
const lightboxImg  = document.getElementById('lightbox-img');
const closeBtn     = document.getElementById('lightbox-close');
const prevBtn      = document.getElementById('lightbox-prev');
const nextBtn      = document.getElementById('lightbox-next');

let visibleItems = [];
let currentIndex = 0;

function getVisible() {
	return [...document.querySelectorAll('.photo-item:not(.hidden)')];
}

function openLightbox(index) {
	visibleItems = getVisible();
	currentIndex = index;
	lightboxImg.src = visibleItems[currentIndex].querySelector('img').src;
	lightbox.classList.add('open');
	document.body.style.overflow = 'hidden';
}

function closeLightbox() {
	lightbox.classList.remove('open');
	document.body.style.overflow = '';
	lightboxImg.src = '';
}

function showPrev() {
	visibleItems = getVisible();
	currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
	lightboxImg.src = visibleItems[currentIndex].querySelector('img').src;
}

function showNext() {
	visibleItems = getVisible();
	currentIndex = (currentIndex + 1) % visibleItems.length;
	lightboxImg.src = visibleItems[currentIndex].querySelector('img').src;
}

photoItems.forEach(item => {
	item.addEventListener('click', () => {
		const visible = getVisible();
		const index = visible.indexOf(item);
		if (index !== -1) openLightbox(index);
	});
});

closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

lightbox.addEventListener('click', e => {
	if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', e => {
	if (!lightbox.classList.contains('open')) return;
	if (e.key === 'Escape')      closeLightbox();
	if (e.key === 'ArrowLeft')   showPrev();
	if (e.key === 'ArrowRight')  showNext();
});
