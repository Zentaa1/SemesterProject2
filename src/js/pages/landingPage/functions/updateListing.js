export async function updateListing(popularListings, index) {
    const listing = popularListings[index];

    const listingTitle = document.getElementById('popularTitle');
    const listingImg = document.getElementById('popularImg');
    const listingState = document.getElementById('popularState');
    const listingPrice = document.getElementById('popularPrice');
    const listingLink = document.getElementById('popularLink');

    console.log(listing);

    listingTitle.textContent = listing.title;
    listingImg.src = listing.media[0].url;

    const highestBidAmount = Math.max(...listing.bids.map(bid => bid.amount));

    listingPrice.textContent = highestBidAmount + ' NOK';

    const endsAt = new Date(listing.endsAt);
    const currentTime = new Date();
    const isActive = endsAt > currentTime;

    if (isActive) {
        const timeDifference = endsAt - currentTime;
        const hoursLeft = Math.floor(timeDifference / (1000 * 60 * 60));

        let timeRemaining;
        if (hoursLeft >= 24) {
            const daysLeft = Math.floor(hoursLeft / 24);
            const remainingHours = hoursLeft % 24;
            timeRemaining = `${daysLeft}D ${remainingHours}H`
        } else {
            timeRemaining = `${hoursLeft} H`
        }

        listingState.textContent = timeRemaining;
        listingState.classList.add('bg-green-400')
    } else {

        listingState.textContent = 'SOLD';
        listingState.classList.add('bg-red-400');
    }
}