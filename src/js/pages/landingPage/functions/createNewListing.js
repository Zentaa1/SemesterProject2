import { newListing } from "../../../api/Listings/newListing.js";

export async function createNewListing() {

    const newListingForm = document.getElementById('newListingForm');
    document.getElementById('createNewListing').addEventListener('click', function() {
        newListingForm.classList.remove('hidden');
        console.log('hei')
    })

    document.getElementById('newListingX').addEventListener('click', function() {
        newListingForm.classList.add('hidden');
    })

    document.getElementById('newListingForm').addEventListener('submit', async function(e) {
        e.preventDefault();

        const title = document.getElementById('newListingTitle').value;
        const desc = document.getElementById('newListingDesc').value;
        const image = document.getElementById('newListingImg').value;
        const endsAt = document.getElementById('newListingDate').value;

        try {
            const response = await newListing(title, endsAt, desc, image);

            console.log('New Listing Created', response);
            alert('New Listing created!');
        } catch (error) {
            console.error('There was a problem creating Listing', error.message);
            alert('Could not create a Listing at this time, please try again later.');
        }
    })
}