import { highestBid } from "./highestBid.js";
import { listingImage } from "./listingImg.js";
import { listingIsActive } from "./listingIsActive.js";
import { newListings } from "./newListings.js";
import { soonEndingListings } from "./soonEndingListings.js";

export async function newLastListings() {
    const newBtn = document.getElementById('newListingBtn');
    const lastBtn = document.getElementById('lastChanceBtn');

    soonEndingListings();

    newBtn.addEventListener('click', function() {
        lastBtn.classList.remove('font-semibold', 'border-b', 'border-primary');
        newBtn.classList.add('font-semibold', 'border-b', 'border-primary');

        newListings();
    })

    lastBtn.addEventListener('click', function() {
        lastBtn.classList.add('font-semibold', 'border-b', 'border-primary');
        newBtn.classList.remove('font-semibold', 'border-b', 'border-primary');

        soonEndingListings();
    })
}

export async function renderNewLastListings(listings) {
    try {
        const listingContainer = document.getElementById('listingContainer');
        const listingTemplate = document.getElementById('listingTemplate');

        listingContainer.innerHTML = "";

        listings.forEach(listing => {
            const newListing = listingTemplate.cloneNode(true)
            newListing.classList.remove('hidden');

            const listingTitle = listing.title;

            console.log(listingTitle);

            newListing.querySelector('.newLastTitle').textContent = listingTitle;

            const listingState = newListing.querySelector('.newLastState');
            const listingPrice = newListing.querySelector('.newLastPrice');
            const listingImg = newListing.querySelector('.newLastImg');

            listingImage(listing, listingImg);

            highestBid(listing, listingPrice);

            listingIsActive(listing, listingState);

            listingContainer.appendChild(newListing);


        })
    } catch(error) {
        console.error(error);
    }
}