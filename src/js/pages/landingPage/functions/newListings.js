import { getListings } from "../../../api/Listings/getListing.js";
import { renderNewLastListings } from "./NewLastListings.js";

export async function newListings() {
    try {
        const response = await getListings();
        const listings = response.data;

        console.log(listings);

        const currentTime = new Date();

        listings.forEach(listing => {
            listing.endsAt = new Date(listing.endsAt);
            listing.remainingTime = listing.endsAt - currentTime;
        });

        listings.sort((a, b) => b.remainingTime - a.remainingTime);

        const newestListings = listings.slice(0, 3);

        console.log(newestListings);

        renderNewLastListings(newestListings);
    } catch(error) {
        console.error('Error:', error);
    }
}
