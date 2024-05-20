import { API_AUCTION, API_BASE, API_KEY, API_LISTINGS } from "../auth/constants.js";
import { load } from "../storage/load.js";

export async function deleteListing(listingId) {
    const response = await fetch(`${API_BASE}${API_AUCTION}${API_LISTINGS}/${listingId}`, {
        headers: {
            Authorization: `Bearer ${load("token")}`,
            "X-Noroff-API-Key": API_KEY
        },
        method: "DELETE"
    });

    if (response.ok) {
        alert('Successfully deleted listing!')
    }

    throw new Error('Failed to delete listing.')
}