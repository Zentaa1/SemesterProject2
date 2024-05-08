export async function filterPopular(listings) {
    listings.data.sort((a, b) => b._count.bids - a._count.bids);

    const popularThreshold = 8;  //Filter out every listing that has under 8 bids.

    const popularListings = listings.data.filter(listing => listing._count.bids >= popularThreshold);

    return popularListings;
}
