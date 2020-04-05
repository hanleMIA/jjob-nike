const logindiv = document.getElementById('login-div');
const loginopen = document.getElementById('login-open');
const loginclose = document.getElementById('login-close');

loginopen.addEventListener('click', () => {
  logindiv.classList.add('login-open');
  logindiv.classList.remove('login-close');
});

loginclose.addEventListener('click', () => {
  logindiv.classList.remove('login-open');
  logindiv.classList.add('login-close');
});