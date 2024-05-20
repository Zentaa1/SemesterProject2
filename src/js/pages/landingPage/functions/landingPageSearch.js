import { searchListings } from "../../../api/Listings/searchlistings.js";

export async function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const searchTemplate = document.getElementById('searchTemplate');

    searchResults.classList.add('hidden');

    searchInput.addEventListener('input', async (event) => {
        const searchText = event.target.value.trim();

        console.log(searchText);

        searchResults.innerHTML = '';

        if (searchText.length > 0) {
            try {
                const searchResultsData = await searchListings(searchText);
                renderSearchResults(searchResultsData, searchTemplate);
            } catch (error) {
                console.error('Error fetching search results', error);
            }
        } else {
            searchResults.classList.add('hidden');
        }
    });
}

function renderSearchResults(results, searchTemplate) {
    searchResults.innerHTML = '';
    searchResults.style.maxHeight = '200px';
    searchResults.style.overflowY = 'auto';
    searchResults.style.overflowX = 'hidden';


    results.data.forEach(result => {
        const searchListings = searchTemplate.cloneNode(true);

        console.log(result)
        searchResults.classList.remove('hidden');

        searchListings.querySelector('.searchTitle').textContent = result.title;


        searchListings.setAttribute('href', `../listing/?id=${result.id}`);
        searchListings.setAttribute('data-listing-id', result.id);


            searchResults.appendChild(searchListings);
    })
}