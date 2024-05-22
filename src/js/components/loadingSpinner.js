// Create the spinner HTML
const spinnerOverlay = document.createElement('div');
spinnerOverlay.id = 'spinnerOverlay';
spinnerOverlay.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 hidden';
spinnerOverlay.innerHTML = '<span class="loader"></span>';
document.body.appendChild(spinnerOverlay);

// Spinner CSS (assuming it's already included)

// Export the showSpinner and hideSpinner functions
export function showSpinner() {
    document.getElementById('spinnerOverlay').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

export function hideSpinner() {
    document.getElementById('spinnerOverlay').classList.add('hidden');
    document.body.style.overflow = '';
}
