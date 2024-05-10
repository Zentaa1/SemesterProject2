import { highestBid } from "./highestBid.js";
import { listingIsActive } from "./listingIsActive.js";

export async function updatePopularListing(popularListings, index) {
    const listing = popularListings[index];

    const listingTitle = document.getElementById('popularTitle');
    const listingImg = document.getElementById('popularImg');
    const listingState = document.getElementById('popularState');
    const listingPrice = document.getElementById('popularPrice');
    const listingLink = document.getElementById('popularLink');

    console.log(listing);

    listingTitle.textContent = listing.title;
    listingImg.src = listing.media[0].url;

    listingIsActive(listing, listingState);
    highestBid(listing, listingPrice);
}