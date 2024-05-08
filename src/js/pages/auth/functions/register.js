import { registerUser } from "../../../api/auth/register.js";

export default function handleRegister() {
    document.getElementById('registerForm').addEventListener('submit', async function (e) {
        e.preventDefault();

        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        try {
            const response = await registerUser(name, email, password);

            console.log('Registered successfully', response);
        } catch (error) {
            console.error('There was a problem registering', error.message);
        }
    })
}