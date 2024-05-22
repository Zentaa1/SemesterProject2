import { hideSpinner, showSpinner } from "../../../components/loadingSpinner.js";
import { highestBid } from "../../landingPage/functions/highestBid.js";
import { listingImage } from "../../landingPage/functions/listingImg.js";
import { listingIsActive } from "../../landingPage/functions/listingIsActive.js";

export async function renderListings(filteredData) {
    try {
        const listings = filteredData;

        const listingContainer = document.getElementById('listingContainer');
        const listingTemplate = document.getElementById('listingTemplate');
    
        listingContainer.innerHTML = "";
    
        listings.forEach(listing => {
            const newListing = listingTemplate.cloneNode(true);
            newListing.classList.remove('hidden');
    
            const listingTitle = listing.title;
            const listingId = listing.id;
    
            newListing.querySelector('.listingTitle').textContent = listingTitle;
    
            const listingState = newListing.querySelector('.listingState');
            const listingPrice = newListing.querySelector('.listingPrice');
            const listingImg = newListing.querySelector('.listingImg');
            const listingLink = newListing.querySelector('.listingLink');

            listingLink.setAttribute('href', `../listing/?id=${listingId}`);
            listingLink.setAttribute('data-listing-id', listingId);
    
            listingImage(listing, listingImg);
    
            highestBid(listing, listingPrice);
    
            listingIsActive(listing, listingState);
    
            listingContainer.appendChild(newListing);
        });
    } catch (error) {
        console.error(error);
        hideSpinner();
    }
}

