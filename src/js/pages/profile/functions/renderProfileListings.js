import { deleteBtn } from "../../../components/deleteBtn.js";
import { highestBid } from "../../landingPage/functions/highestBid.js";
import { listingImage } from "../../landingPage/functions/listingImg.js";
import { listingIsActive } from "../../landingPage/functions/listingIsActive.js";
import { updateListing } from "../../listings/functions/updateListing.js";

export async function renderProfileListings(data) {
    try {

        const listings = data;

        const listingContainer = document.getElementById('listingContainer');
        const listingTemplate = document.getElementById('listingTemplate');
    
        listingContainer.innerHTML = "";
    
        listings.forEach(listing => {
            const newListing = listingTemplate.cloneNode(true);
            newListing.classList.remove('hidden');
    
            const listingTitle = listing.title;
            const listingId = listing.id;
    
            newListing.querySelector('.profileTitle').textContent = listingTitle;
    
            const listingState = newListing.querySelector('.profileState');
            const listingPrice = newListing.querySelector('.profilePrice');
            const listingImg = newListing.querySelector('.profileImg');
            const listingLink = newListing.querySelector('.listingLink');
            const listingDelBtn = newListing.querySelector('.delBtn');

            listingLink.setAttribute('href', `../listing/?id=${listingId}`);
            listingLink.setAttribute('data-listing-id', listingId);


            listingImage(listing, listingImg);
    
            highestBid(listing, listingPrice);
    
            listingIsActive(listing, listingState);

            updateListing(newListing, listing);

            deleteBtn(listingDelBtn, listing);
    
            listingContainer.appendChild(newListing);

        });
    } catch (error) {
        console.error(error);
    }
}