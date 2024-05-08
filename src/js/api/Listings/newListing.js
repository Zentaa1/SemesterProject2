import { API_AUCTION, API_AUTH, API_BASE, API_KEY, API_LISTINGS } from "../auth/constants";

export async function newListing(listingTitle, listingEndsAt, listingDescription, listingMedia) {
    const response = await fetch(API_BASE + API_AUTH + API_AUCTION + API_LISTINGS, {
        headers: {
            Authorization: `Bearer ${load("token")}`,
            "X-Noroff-API-Key": API_KEY,
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ title: listingTitle, endsAt: listingEndsAt, description: listingDescription, media: listingMedia })
    });

    if (response.ok) {
        const responseData = await response.json();
        return responseData;
    }

    throw new Error('Could not post listing at this time' + response.statusText);
}