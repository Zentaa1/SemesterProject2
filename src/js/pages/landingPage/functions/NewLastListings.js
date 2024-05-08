export async function newLastListings() {
    const newBtn = document.getElementById('newListingBtn');
    const lastBtn = document.getElementById('lastChanceBtn');

    newBtn.addEventListener('click', function() {
        lastBtn.classList.remove('font-semibold', 'border-b', 'border-primary');
        newBtn.classList.add('font-semibold', 'border-b', 'border-primary');
    })

    lastBtn.addEventListener('click', function() {
        lastBtn.classList.add('font-semibold', 'border-b', 'border-primary');
        newBtn.classList.remove('font-semibold', 'border-b', 'border-primary');
    })
}