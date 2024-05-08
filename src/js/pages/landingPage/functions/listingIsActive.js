export async function listingIsActive(listing, listingState) {
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
        listingState.classList.remove('bg-red-400');
    } else {
        listingState.textContent = 'SOLD';
        listingState.classList.add('bg-red-400');
        listingState.classList.remove('bg-green-400');
    }
}