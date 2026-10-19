const openRegister = document.getElementById('openRegister');
const closeRegister = document.getElementById('closeRegister');
const registerModal = document.getElementById('registerModal');

function openModal() {
  registerModal.showModal();
}
function closeModal() {
  registerModal.close();
}
openRegister.addEventListener('click', openModal);
closeRegister.addEventListener('click', closeModal);

// Close when clicking outside the registration card.
registerModal.addEventListener('click', function (event) {
  if (event.target === registerModal) closeModal();
});

// Keep this assignment as a frontend demonstration.
document.querySelectorAll('form').forEach(function (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.querySelector('.status').textContent = form.id === 'loginForm'
      ? 'Demo only: no login request was sent. Use the official MUST portal to sign in.'
      : 'Demo only: no account was created or password sent. Register on the official MUST portal to continue.';
  });
});
