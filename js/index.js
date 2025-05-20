import { loadPicture } from './photoloader.js';
import { displayPicture } from './ui.js';

async function getPicture(id) {
    try {
        const photoData = await loadPicture(id);
        displayPicture(photoData);
        
    } catch (error) {
        console.error('Failed to get picture:', error);
    }
}

// Get photo ID from URL hash or default to 105
const photoId = window.location.hash ? window.location.hash.substr(1) : 105;
getPicture(photoId);