import { updateProfileRequest } from "../../../api/profile/updateProfile.js";
import { load } from "../../../api/storage/load.js";

export async function updateProfile(visitedProfile) {
    const updProfile = document.querySelector('.updateProfileBtn');
    const updFormDiv = document.getElementById('updProfileDiv');
    const updFormX = document.getElementById('updProfileX');
    const updForm = document.getElementById('updProfileForm');
    const profileCredits = document.getElementById('profileCredits');

    try {
        const profile = load("profile");

        if (!profile) {
            throw new Error("No user profile found");
        }

        const seller = visitedProfile.data.name;
        const loggedInUser = profile.name;

        

        if (seller === loggedInUser) {
            updProfile.classList.remove('hidden');
            profileCredits.classList.remove('hidden');

            profileCredits.textContent = `Credits: ${visitedProfile.data.credits}`;

            updProfile.addEventListener('click', function() {
                updFormDiv.classList.remove('hidden');

                updForm.addEventListener('submit', async function(e) {
                    e.preventDefault();

                    const updFormDesc = document.getElementById('updProfileDesc').value;
                    const updFormImg = document.getElementById('updProfileAvatar').value;

                    await updateProfileRequest(loggedInUser, updFormDesc, updFormImg)
                    window.location.reload();
                });
            });
        }
    } catch (error) {
        console.error(error.message);
        updProfile.classList.add('hidden');
    }

    updFormX.addEventListener('click', function() {
        updFormDiv.classList.add('hidden');
        updForm.reset();
    });
}
