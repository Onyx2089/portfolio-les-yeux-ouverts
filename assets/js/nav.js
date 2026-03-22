const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('nav-mobile');

// Sort le hamburger du navbar pour qu'il ait son propre contexte de superposition
document.body.appendChild(hamburger);

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
