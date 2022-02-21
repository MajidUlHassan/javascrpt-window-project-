'use strict';

const openModal = document.querySelectorAll('.open-modal');
const closeModal = document.querySelectorAll('.btn-close');
const modal = document.querySelector('.modal-container');
const overlay = document.querySelector('.overlay');

// Methods to add and remove hidden class from html...
function openModalMethod() {
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
}
function closeModalMethod() {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
}
// Opening the modal window using click event...
for (let i = 0; i < openModal.length; i++) {
	openModal[i].addEventListener('click', openModalMethod);
}
// Closing the modal window using buttons...
for (let i = 0; i < closeModal.length; i++) {
	closeModal[i].addEventListener('click', closeModalMethod);
}
// Closing the modal window using 'Escape' key...
document.addEventListener('keydown', function (e) {
	console.log(e);
	if (
		e.key === 'Escape' ||
		(e.key === 'Enter' && !modal.classList.contains('hidden'))
	) {
		closeModalMethod();
	}
});
