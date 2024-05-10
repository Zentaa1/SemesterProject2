import { getListings } from "../../../api/Listings/getListing.js";
import { filterPopular } from "./filterPopular.js";
import { updatePopularListing } from "./updatePopularListing.js";

export default async function popularListing() {
    const listings = await getListings();
    const popularListings = await filterPopular(listings);

    console.log(popularListings);

    let currentIndex = 0;

    updatePopularListing(popularListings, currentIndex);

    const nextButton = document.getElementById('popularNext');
    nextButton.addEventListener('click', function() {
        currentIndex++;
        if (currentIndex >= popularListings.length) {
            currentIndex = 0;
        }

        updatePopularListing(popularListings, currentIndex);
    });

    const prevButton = document.getElementById('popularPrev');
    prevButton.addEventListener('click', function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = popularListings.length - 1;
        }
        updatePopularListing(popularListings, currentIndex);
    });


}