import { API_AUCTION, API_BASE, API_KEY, API_PROFILES } from "../auth/constants.js";
import { load } from "../storage/load.js";

export async function getProfile(name) {
    const response = await fetch(`${API_BASE}${API_AUCTION}${API_PROFILES}/${name}`, {
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

    throw new Error('failed to fetch profile');
}