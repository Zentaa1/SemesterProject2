import { load } from "../../../api/storage/load.js";

export default function isLoggedIn() {
    let profile;
    try {
        profile = load("profile");
    } catch (error) {
        profile = null;
    }

    const authBtn = document.querySelectorAll('.authBtn');
    const logOutBtn = document.querySelectorAll('.logOutBtn');
    const authDiv = document.querySelector('.authDiv');
    const mobileAuthDiv = document.querySelector('.mobileAuthDiv');

    const existingProfileLink = document.querySelector('.tooltip-container');
    if (existingProfileLink) {
        existingProfileLink.remove();
    }

    const existingMobileProfileLink = document.querySelector('.mobileProfileLink');
    if (existingMobileProfileLink) {
        existingMobileProfileLink.remove();
    }

    if (profile !== null) {
        authBtn.forEach(btn => btn.classList.add('hidden'));
        logOutBtn.forEach(btn => btn.classList.remove('hidden'));

        const profileName = profile.name;

        const mobileProfileLink = document.createElement('a');
        mobileProfileLink.setAttribute('href', `../profile/?name=${profileName}`);
        mobileProfileLink.setAttribute('data-post-name', profileName);
        mobileProfileLink.classList.add('bg-secondary', 'order-first', 'mobileProfileLink','text-customWhite', 'px-4',
            'py-2', 'rounded', 'w-full'
        );
        mobileProfileLink.textContent = profileName;

        mobileAuthDiv.appendChild(mobileProfileLink);

        const profileLink = document.createElement('a');
        profileLink.setAttribute('href', `../profile/?name=${profileName}`);
        profileLink.setAttribute('data-post-name', profileName);

        const profileAvatar = document.createElement('img');
        profileAvatar.src = profile.avatar.url;
        profileAvatar.classList.add('rounded', 'w-6', 'mr-4');

        profileLink.appendChild(profileAvatar);

        profileLink.classList.add('tooltip-container');

        const tooltipText = document.createElement('span');
        tooltipText.textContent = profileName;
        tooltipText.classList.add('tooltip-text');

        profileLink.appendChild(tooltipText);

        authDiv.appendChild(profileLink);

    } else {
        authBtn.forEach(btn => btn.classList.remove('hidden'));
        logOutBtn.forEach(btn => btn.classList.add('hidden'));
    }
}
