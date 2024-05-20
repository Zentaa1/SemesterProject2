import { searchListings } from "../../../api/Listings/searchlistings.js";
import { renderListings } from "./renderListings.js";

export async function searchFunction() {
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', async (event) => {
        const searchText = event.target.value.trim();

        console.log(searchText);

        if (searchText.length > 0) {
            try {
                const response = await searchListings(searchText);
                const data = response.data;
                console.log(data)

                renderListings(data);
            } catch (error) {
                console.error('Error fetching search results', error);
            }
        }
    });
}