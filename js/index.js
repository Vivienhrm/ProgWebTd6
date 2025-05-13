import { loadPicture } from './photoloader.js';

async function getPicture(id) {
    try {
        const photoData = await loadPicture(id);
        console.log('Title:', photoData.photo.titre);
        console.log('Type:', photoData.photo.type);
        console.log('URL:', photoData.photo.url);
    } catch (error) {
        console.error('Failed to get picture:', error);
    }
}

// Get photo ID from URL hash or default to 105
const photoId = window.location.hash ? window.location.hash.substr(1) : 105;
getPicture(photoId);