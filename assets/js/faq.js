const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
	const btn  = item.querySelector('.accordion-btn');
	const icon = item.querySelector('.accordion-icon');

	btn.addEventListener('click', () => {
		const isOpen = item.classList.contains('open');

		// Ferme tous les items
		items.forEach(i => {
			i.classList.remove('open');
			i.querySelector('.accordion-icon').textContent = '+';
		});

		// Ouvre celui cliqué s'il était fermé
		if (!isOpen) {
			item.classList.add('open');
			icon.textContent = '−';
		}
	});
});
