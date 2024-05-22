import { updateListingRequest } from "../../../api/Listings/updateListing.js";
import { load } from "../../../api/storage/load.js";

export async function updateListing(newListing, listing) {
    const updListing = newListing.querySelector('.updateBtn');
    const updFormDiv = document.getElementById('updListingDiv');
    const updFormX = document.getElementById('updListingX');
    const updForm = document.getElementById('updListingForm');

    try {
        const profile = load("profile");

        if (!profile) {
            throw new Error("No user profile found");
        }

        const seller = listing.seller.name;
        const loggedInUser = profile.name;
        const listingId = listing.id;

        if (seller === loggedInUser) {
            updListing.classList.remove('hidden');

            updListing.addEventListener('click', function() {
                updFormDiv.classList.remove('hidden');

                updForm.addEventListener('submit', async function(e) {
                    e.preventDefault();

                    const updFormTitle = document.getElementById('updListingTitle').value;
                    const updFormDesc = document.getElementById('updListingDesc').value;
                    const updFormImg = document.getElementById('updListingImg').value;

                    await updateListingRequest(listingId, updFormTitle, updFormDesc, updFormImg);
                    window.location.reload();
                });
            });
        }
    } catch (error) {
        console.error(error.message);
        updListing.classList.add('hidden');
    }

    updFormX.addEventListener('click', function() {
        updFormDiv.classList.add('hidden');
        updForm.reset();
    });
}
