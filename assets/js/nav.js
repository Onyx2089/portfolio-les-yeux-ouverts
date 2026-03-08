const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('nav-mobile');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('open');
	navMobile.classList.toggle('open');
	document.body.style.overflow = navMobile.classList.contains('open') ? 'hidden' : '';
});

// Ferme le menu au clic sur un lien
navMobile.querySelectorAll('a').forEach(link => {
	link.addEventListener('click', () => {
		hamburger.classList.remove('open');
		navMobile.classList.remove('open');
		document.body.style.overflow = '';
	});
});
