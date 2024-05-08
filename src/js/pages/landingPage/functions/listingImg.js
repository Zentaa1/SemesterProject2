export async function listingImage(listing, listingImg) {
    if (listing.media[0] != undefined) {
        listingImg.src = listing.media[0].url;
    } else {
        listingImg.src = "../../src/img/placeholder.jpg";
    }
}
