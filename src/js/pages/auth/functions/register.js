import { registerUser } from "../../../api/auth/register.js";

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}

export default function handleRegister() {
    document.getElementById('registerForm').addEventListener('submit', async function (e) {
        e.preventDefault();

        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        const validationMessage = document.getElementById('validationMessage');
        validationMessage.textContent = '';

        if (!validateEmail(email)) {
            validationMessage.textContent = 'Please use a valid @stud.noroff.no email.';
            return;
        }

        if (!validatePassword(password)) {
            validationMessage.textContent = 'Password must be at least 8 characters long.';
            return;
        }

        try {
            const response = await registerUser(name, email, password);
            console.log('Registered successfully', response);
        } catch (error) {
            console.error('There was a problem registering', error.message);
            validationMessage.textContent = 'There was a problem registering. Please try again.';
        }
    });
}
