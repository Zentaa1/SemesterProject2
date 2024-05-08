export async function highestBid(listing, listingPrice) {
    const highestBidAmount = Math.max(...listing.bids.map(bid => bid.amount));

    if (highestBidAmount >= 0) {
        listingPrice.textContent = highestBidAmount + ' NOK';
    } else {
        listingPrice.textContent = 'No bids';
    }
}