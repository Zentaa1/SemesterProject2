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

    const authDiv = document.querySelector('.authDiv');

    console.log(profile);

    if (profile !== null) {
        loginBtn.classList.add('hidden');
        logOutBtn.classList.remove('hidden');

        const profileName = profile.name;

        const profileLink = document.createElement('a');
        profileLink.setAttribute('href', `../profile/?name=${profileName}`);
        profileLink.setAttribute('data-post-name', profileName);

        const profileAvatar = document.createElement('img');
        profileAvatar.src = profile.avatar.url;
        profileAvatar.classList.add('rounded', 'w-6', 'mr-4')

        profileLink.appendChild(profileAvatar);

        profileLink.classList.add('tooltip-container');

        const tooltipText = document.createElement('span');
        tooltipText.textContent = profileName;
        tooltipText.classList.add('tooltip-text');

        profileLink.appendChild(tooltipText);

        authDiv.appendChild(profileLink);

    } else {
        loginBtn.classList.remove('hidden');
        logOutBtn.classList.add('hidden');
    }
}
