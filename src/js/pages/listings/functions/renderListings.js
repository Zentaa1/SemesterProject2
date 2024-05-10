import { highestBid } from "../../landingPage/functions/highestBid.js";
import { listingImage } from "../../landingPage/functions/listingImg.js";
import { listingIsActive } from "../../landingPage/functions/listingIsActive.js";

export async function renderListings(data) {
    try {
        const listings = data.data;

        const listingContainer = document.getElementById('listingContainer');
        const listingTemplate = document.getElementById('listingTemplate');
    
        listingContainer.innerHTML = "";
    
        listings.forEach(listing => {
            const newListing = listingTemplate.cloneNode(true);
            newListing.classList.remove('hidden');
    
            const listingTitle = listing.title;
    
            newListing.querySelector('.listingTitle').textContent = listingTitle;
    
            const listingState = newListing.querySelector('.listingState');
            const listingPrice = newListing.querySelector('.listingPrice');
            const listingImg = newListing.querySelector('.listingImg');
    
            listingImage(listing, listingImg);
    
            highestBid(listing, listingPrice);
    
            listingIsActive(listing, listingState);
    
            listingContainer.appendChild(newListing);
        });
    } catch (error) {
        console.error(error);
    }
}