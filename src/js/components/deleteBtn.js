import { deleteListing } from "../api/Listings/deleteListing.js";
import { load } from "../api/storage/load.js";

export async function deleteBtn(deleteBtn, listing) {

    const profile = load("profile");

    const seller = listing.seller.name;
    const loggedInUser = profile.name;

    const listingId = listing.id;

    const delPromptDiv = document.createElement('div');
    delPromptDiv.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'h-full', 'flex', 'justify-center', 'items-center', 'bg-gray-900', 'bg-opacity-50', 'z-50', 'hidden');

    const delPromptInnerDiv = document.createElement('div');
    delPromptInnerDiv.classList.add('bg-white', 'p-8', 'rounded-lg', 'w-full', 'md:w-2/6', 'relative');

    const delPromptX = document.createElement('button');
    delPromptX.classList.add('absolute', 'top-0', 'right-0', 'text-gray-600', 'hover:text-gray-900', 'focus:outline-none', 'text-3xl');
    delPromptX.textContent = 'x';

    const delPromptText = document.createElement('h2');
    delPromptText.classList.add('text-2xl', 'font-bold', 'mb-4');
    delPromptText.textContent = "Are you sure you want to delete this listing?";

    const delPromptYesBtn = document.createElement('button');
    delPromptYesBtn.classList.add('bg-secondary', 'text-white', 'px-4', 'py-2', 'rounded-md', 'focus:outline-none');
    delPromptYesBtn.textContent = "Yes";

    const delPromptNoBtn = document.createElement('button');
    delPromptNoBtn.classList.add('bg-primary', 'text-white', 'ml-4', 'px-4', 'py-2', 'rounded-md', 'focus:outline-none');
    delPromptNoBtn.textContent = "No";

    delPromptInnerDiv.appendChild(delPromptX);
    delPromptInnerDiv.appendChild(delPromptText);
    delPromptInnerDiv.appendChild(delPromptYesBtn);
    delPromptInnerDiv.appendChild(delPromptNoBtn);

    delPromptDiv.appendChild(delPromptInnerDiv);

    document.body.appendChild(delPromptDiv);

    deleteBtn.addEventListener('click', function() {
        delPromptDiv.classList.remove('hidden');
        console.log('Prompt displayed');
    });

    delPromptX.addEventListener('click', function() {
        delPromptDiv.classList.add('hidden');
    });

    delPromptNoBtn.addEventListener('click', function() {
        delPromptDiv.classList.add('hidden');
    });

    delPromptYesBtn.addEventListener('click', async function() {
        try {
            deleteListing(listingId);
            delPromptDiv.classList.add('hidden');
        } catch (error) {
            console.error('Error deleting listing:', error);
        }
    });
}
