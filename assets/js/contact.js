const form = document.querySelector('.contact-form');
const successMsg = document.getElementById('form-success');

form.addEventListener('submit', async (e) => {
	e.preventDefault();

	const data = new FormData(form);

	try {
		const response = await fetch(form.action, {
			method: 'POST',
			body: data,
			headers: { 'Accept': 'application/json' }
		});

		if (response.ok) {
			form.style.display = 'none';
			successMsg.style.display = 'flex';
		} else {
			const json = await response.json();
			const msg = json.errors ? json.errors.map(e => e.message).join(', ') : 'Une erreur est survenue.';
			alert(msg);
		}
	} catch {
		alert('Une erreur est survenue. Veuillez réessayer.');
	}
});
