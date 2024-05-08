import { clear } from "../../../api/storage/clear.js";

export function logOut() {
    const logOutBtn = document.querySelector('.logOutBtn');

    logOutBtn.addEventListener('click', async => {
        clear("token");
        clear("profile");

        window.location.reload();
    })
}