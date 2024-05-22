import { getListings } from "../../../api/Listings/getListing.js";
import { renderNewLastListings } from "./NewLastListings.js";

export async function soonEndingListings() {
    try {
        const response = await getListings();
        const listings = response.data;
    
        listings.forEach(listing => {
            listing.endsAt = new Date(listing.endsAt);
        });
    
        const currentTime = new Date();
    
        const activeListings = listings.filter(listing => listing.endsAt > currentTime);
    
        activeListings.sort((a, b) => a.endsAt - b.endsAt);
    
        const soonestListings = activeListings.slice(0, 3);


        renderNewLastListings(soonestListings);
    } catch (error) {
        console.error('Error', error);
    }
}
