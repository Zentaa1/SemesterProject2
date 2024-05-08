import { load } from "../../../api/storage/load.js";

export default function isLoggedIn() {
    let profile;
    try {
        profile = load("profile");
    } catch (error) {
        profile = null;
    }

    const loginBtn = document.querySelector('.authBtn');
    const logOutBtn = document.querySelector('.logOutBtn');

    if (profile !== null) {
        loginBtn.classList.add('hidden');
        logOutBtn.classList.remove('hidden');
    } else {
        loginBtn.classList.remove('hidden');
        logOutBtn.classList.add('hidden');
    }
}
