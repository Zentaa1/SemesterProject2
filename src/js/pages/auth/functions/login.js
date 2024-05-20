import { login } from "../../../api/auth/login.js";




export default function handleLogin() {
    document.getElementById('loginForm').addEventListener('submit', async function(e) {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        try {
            const response = await login(email, password);
            
            console.log('Login Successfully!', response);
            alert('Login successful!');

            window.location.reload();

        } catch (error) {
            console.error('There was a problem logging in', error.message);
            alert('Could Not login!')
        }
    })
}