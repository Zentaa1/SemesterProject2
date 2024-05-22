import { API_AUCTION, API_BASE, API_KEY, API_LISTINGS } from "../auth/constants.js";
import { load } from "../storage/load.js";

export async function newListing(listingTitle, listingEndsAt, listingDescription, listingMedia) {
    const listingDate = new Date(listingEndsAt);

    const response = await fetch(API_BASE + API_AUCTION + API_LISTINGS, {
        headers: {
            Authorization: `Bearer ${load("token")}`,
            "X-Noroff-API-Key": API_KEY,
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ title: listingTitle, endsAt: listingDate, description: listingDescription, media:[{ url: listingMedia}] })
    });

    if (response.ok) {
        const responseData = await response.json();
        return responseData;
    }

    throw new Error('Could not post listing at this time' + response.statusText);
}