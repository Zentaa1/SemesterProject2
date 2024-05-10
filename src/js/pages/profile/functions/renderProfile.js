import { getProfile } from "../../../api/profile/getProfile.js";

export async function renderProfile() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const profileName = urlParams.get('name');


        console.log(profileName);

        const profile = await getProfile(profileName);

        console.log(profile);
    } catch (error) {
        
    }
}