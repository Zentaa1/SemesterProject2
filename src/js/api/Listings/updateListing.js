import { API_AUCTION, API_BASE, API_KEY, API_LISTINGS } from "../auth/constants.js";
import { load } from "../storage/load.js";

export async function updateListingRequest(listingId, listingTitle, listingDescription, listingMedia) {
    const response = await fetch(`${API_BASE}${API_AUCTION}${API_LISTINGS}/${listingId}`, {
        headers: {
            Authorization: `Bearer ${load("token")}`,
            "X-Noroff-API-Key": API_KEY,
            "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify({title: listingTitle, description: listingDescription, media:[{ url: listingMedia }]})
    })

    if (response.ok) {
        const responseData = await response.json();
        return responseData;
    }

    throw new Error('Could not Update listing at this time' + response.statusText);
}