import { getProfile } from "../../../api/profile/getProfile.js";
import { getProfileListings } from "../../../api/profile/getProfileListings.js";
import { renderProfileListings } from "./renderProfileListings.js";

export async function renderProfile() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const profileName = urlParams.get('name');

        const profile = await getProfile(profileName);

        const profileListings = await getProfileListings(profileName);
        const profileListingsData = profileListings.data;

        renderProfileListings(profileListingsData);

        document.getElementById('profileAvatar').src = profile.data.avatar.url;
        document.getElementById('profileName').textContent = profile.data.name;
        

    } catch (error) {
        
    }
}