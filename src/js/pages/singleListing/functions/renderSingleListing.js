import { getSingleListing } from "../../../api/Listings/getSingleListing.js";
import { newBid } from "../../../api/Listings/newBid.js";
import { hideSpinner, showSpinner } from "../../../components/loadingSpinner.js";
import { updateListing } from "../../listings/functions/updateListing.js";

export async function renderSingleListing() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const listingId = urlParams.get('id');

        const listing = await getSingleListing(listingId);

        const listingImg = document.getElementById('listingImg');
        const listingTitle = document.getElementById('listingTitle');
        const listingSellerAvatar = document.getElementById('listingSellerAvatar');
        const listingSellerName = document.getElementById('listingSellerName');
        const listingBidsTable = document.getElementById('listingBids');
        const listingTime = document.getElementById('listingTimeRemaining');
        const bidBtn = document.getElementById('bidBtn');
        const biddingForm = document.getElementById('biddingFormDiv');

        updateListing(document, listing.data);


        bidBtn.addEventListener('click', function() {
            biddingForm.classList.remove('hidden');

            document.getElementById('biddingForm')
                .addEventListener('submit', function(e) {
                    e.preventDefault();

                    const bidAmount = parseFloat(document.getElementById('bidAmount').value);

                    newBid(listingId, bidAmount);
                })
        })

        document.getElementById('biddingFormX')
            .addEventListener('click', function() {
                biddingForm.classList.add('hidden');
            })

        const bids = listing.data.bids;
        
        const endTime = new Date(listing.data.endsAt).getTime();

        const countdownTimer = setInterval(() => {
        const now = new Date().getTime();

        const timeRemaining = endTime - now;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        listingTime.innerHTML = `Ends in: ${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (timeRemaining <= 0) {
            clearInterval(countdownTimer);
            listingTime.innerHTML = "Expired";
        }
        }, 1000);

        listingImg.src = listing.data.media[0].url;
        listingTitle.textContent = listing.data.title;
        listingSellerAvatar.src = listing.data.seller.avatar.url;
        listingSellerName.textContent = listing.data.seller.name;

        bids.forEach(bid => {
            const bidder = bid.bidder.name;
            const bidAmount = bid.amount;
            const bidTime = "yesterday";
            
            const newBidRow = document.createElement('tr');
            
            const bidderCell = document.createElement('td');
            bidderCell.textContent = bidder;
            bidderCell.classList.add('border', 'px-4', 'py-2');
            newBidRow.appendChild(bidderCell);
        
            const bidAmountCell = document.createElement('td');
            bidAmountCell.textContent = bidAmount;
            bidAmountCell.classList.add('border', 'px-4', 'py-2');
            newBidRow.appendChild(bidAmountCell);
        
            const bidTimeCell = document.createElement('td');
            bidTimeCell.textContent = bidTime;
            bidTimeCell.classList.add('border', 'px-4', 'py-2');
            newBidRow.appendChild(bidTimeCell);
        
            listingBidsTable.appendChild(newBidRow);
        });
        
    } catch(error) {
        console.log(error);
    }
}