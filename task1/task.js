const textarea = document.getElementById('editor');
const clear = document.getElementById('button');

textarea.value = localStorage.getItem('text');

textarea.addEventListener('input', () => {
    localStorage.setItem('text', textarea.value);
});

button.addEventListener('click', () => {
    textarea.value = '';
    localStorage.clear();
});