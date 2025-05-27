import { loadPicture, loadResource } from './photoloader.js';
import { displayPicture, displayCategory, displayComments } from './ui.js';

async function getCategory(photoData) {
    try {
        const categoryData = await loadResource(photoData.links.categorie.href);
        return categoryData;
    } catch (error) {
        console.error('Failed to load category:', error);
        throw error;
    }
}

async function getComments(photoData) {
    try {
        // const commentsData = await loadResource(photoData.links.comments.href);
        // return commentsData;
        const commentsResponse = await loadResource(photoData.links.comments.href);
        if (commentsResponse && Array.isArray(commentsResponse.comments)) {
            return commentsResponse.comments;
        } else {
            console.error('Invalid comments response structure:', commentsResponse);
            return []; 
        }
    } catch (error) {
        console.error('Failed to load comments:', error);
        throw error;
    }
}

async function getPicture(id) {
    try {
        const photoData = await loadPicture(id);
        displayPicture(photoData);

        const categoryData = await getCategory(photoData);
        displayCategory(categoryData);

        const commentsData = await getComments(photoData);
        displayComments(commentsData);
        if (commentsData && Array.isArray(commentsData)) {
            displayComments(commentsData);
        } else {
            console.error('Invalid comments data:', commentsData);
        }
        
    } catch (error) {
        console.error('Failed to get picture:', error);
    }
}

// Get photo ID from URL hash or default to 105
const photoId = window.location.hash ? window.location.hash.substr(1) : 106;
getPicture(photoId);