import { API_AUCTION, API_BASE, API_KEY, API_LISTINGS } from "../auth/constants.js";

export async function getListings(includeBids = true, includeSeller = true) {
    const queryParams = new URLSearchParams();
    if (includeBids) queryParams.append('_bids', includeBids);
    if (includeSeller) queryParams.append('_seller', includeSeller);
    const response = await fetch(`${API_BASE}${API_AUCTION}${API_LISTINGS}?${queryParams}`, {
        headers: {
            "X-Noroff-API-Key": API_KEY
        }
    });

    if (response.ok) {
        const responseData = await response.json();
        return responseData;
    }

    throw new Error('Failed to fetch listings');
}