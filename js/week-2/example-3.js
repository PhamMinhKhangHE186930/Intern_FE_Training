const toggleBtn = document.getElementById('navbar__btn--colapse');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('collapsed');
});