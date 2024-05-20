import { API_AUCTION, API_BASE, API_KEY, API_LISTINGS } from "../auth/constants.js";
import { load } from "../storage/load.js";

export async function newBid(listingId, bidAmount) {
    const response = await fetch(`${API_BASE}${API_AUCTION}${API_LISTINGS}/${listingId}/bids`, {
        headers: {
            Authorization: `Bearer ${load("token")}`,
            "X-Noroff-API-Key": API_KEY,
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ amount: bidAmount })
    });

    if (response.ok) {
        const responseData = await response.json();
        return responseData;
    }

    throw new Error('Could not make a bid at this time' + response.statusText);
}