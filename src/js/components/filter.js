import { renderListings } from "../pages/listings/functions/renderListings.js";

export async function listingFilter(data) {
    const dropdownButton = document.getElementById('sortDropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const selectedOption = document.getElementById('selectedOption');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    dropdownButton.addEventListener('click', function () {
        dropdownMenu.classList.toggle('hidden');
    });

    dropdownItems.forEach(item => {
        item.addEventListener('click', function () {
            selectedOption.textContent = this.textContent;
            dropdownMenu.classList.add('hidden');

            const selectedFilter = this.id;
            switch (selectedFilter) {
                case 'latestOption':
                    const latestListings = data.sort((a, b) => new Date(b.created) - new Date(a.created));
                    console.log(latestListings);
                    renderListings(latestListings);
                    break;
                case 'oldestOption':
                    const oldestListings = data.sort((a, b) => new Date(a.created) - new Date(b.created));
                    console.log(oldestListings);
                    renderListings(oldestListings);
                    break;
                case 'popularOption':
                    console.log('Popular filter selected');
                    const sortedListings = data.sort((a, b) => b._count.bids - a._count.bids);
                    const popularListings = sortedListings.filter(listing => listing._count.bids > 0);
                    console.log(popularListings);
                    renderListings(popularListings);
                    break;
                default:
                    console.log('No specific action for this filter');
            }
        });
    });

    // Hide dropdown if clicked outside
    document.addEventListener('click', function (event) {
        if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.add('hidden');
        }
    });
}
