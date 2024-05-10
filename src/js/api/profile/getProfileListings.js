import { API_AUCTION, API_BASE, API_KEY, API_PROFILES } from "../auth/constants.js";
import { load } from "../storage/load.js";

export async function getProfileListings(name, includeBids = true, includeSeller = true) {
    const queryParams = new URLSearchParams();
    if (includeBids) queryParams.append('_bids', includeBids);
    if (includeSeller) queryParams.append('_seller', includeSeller);
    const response = await fetch(`${API_BASE}${API_AUCTION}${API_PROFILES}/${name}/listings?${queryParams}`, {
        headers: {
            "X-Noroff-API-Key": API_KEY,
            Authorization: `Bearer ${load("token")}`
        },
        method: "GET"
    });

    if (response.ok) {
        const responseData = await response.json();
        return responseData;
    }

    throw new Error('Failed to fetch listings for profile')
}