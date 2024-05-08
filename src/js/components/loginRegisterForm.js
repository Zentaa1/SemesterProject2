export default function authForm() {

    const loginForm = document.querySelector('.loginForm');
    const registerForm = document.querySelector('.registerForm');

    const loginFormX = document.querySelector('.loginFormX');
    loginFormX.addEventListener('click', function() {
        loginForm.classList.add('hidden');
    })

    const registerFormX = document.querySelector('.registerFormX');
    registerFormX.addEventListener('click', function() {
        registerForm.classList.add('hidden');
    })

    const registerNowBtn = document.querySelector('.registerNowBtn');
    registerNowBtn.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    })

    const loginNowBtn = document.querySelector('.loginNowBtn');
    loginNowBtn.addEventListener('click', function(e) {
        e.preventDefault();
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    })

    const authBtn = document.querySelector('.authBtn');
    authBtn.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.classList.remove('hidden');
    })
}