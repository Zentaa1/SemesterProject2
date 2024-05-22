import { API_AUCTION, API_BASE, API_KEY, API_PROFILES } from "../auth/constants.js";
import { load } from "../storage/load.js";

export async function updateProfileRequest(profileName,  profileDescription, profileMedia) {
    const response = await fetch(`${API_BASE}${API_AUCTION}${API_PROFILES}/${profileName}`, {
        headers: {
            Authorization: `Bearer ${load("token")}`,
            "X-Noroff-API-Key": API_KEY,
            "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify({ bio: profileDescription, avatar:{ url: profileMedia }})
    })

    console.log(response)

    if (response.ok) {
        const responseData = await response.json();
        return responseData;
    }

    throw new Error('Could not Update listing at this time' + response.statusText);
}