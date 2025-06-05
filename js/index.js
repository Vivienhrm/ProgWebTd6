import { loadPicture, loadResource } from './photoloader.js';
import { displayPicture, displayCategory, displayComments } from './ui.js';
import { loadGallery } from './gallery.js';
import { displayGallery } from './gallery_ui.js';


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
        // displayComments(commentsData);
        if (commentsData && Array.isArray(commentsData)) {
            displayComments(commentsData);
        } else {
            console.error('Invalid comments data:', commentsData);
        }
        
    } catch (error) {
        console.error('Failed to get picture:', error);
    }
}

document.querySelector('#loadGalleryButton').addEventListener('click', async () => {
    try {
        const { photos, links } = await loadGallery();
        galerieLinks = links;
        displayGallery({ photos });
    } catch (error) {
        console.error('Failed to load and display gallery:', error);
    }
});

function updatePaginationButtons(links) {
    const buttons = {
        first_page: document.getElementById("first_page"),
        prev_page: document.getElementById("prev_page"),
        next_page: document.getElementById("next_page"),
        last_page: document.getElementById("last_page")
    };

    // Désactiver/activer les boutons selon dispo des liens
    buttons.first_page.disabled = !links?.first?.href;
    buttons.prev_page.disabled = !links?.prev?.href;
    buttons.next_page.disabled = !links?.next?.href;
    buttons.last_page.disabled = !links?.last?.href;
}

function setupPagination() {
  document.getElementById("next_page").addEventListener("click", async () => {
    if (galerieLinks?.next?.href) {
      const { photos, links } = await loadGallery(galerieLinks.next.href);
      galerieLinks = links;
      displayGallery({ photos });
      updatePaginationButtons(links);
    }
  });

  document.getElementById("prev_page").addEventListener("click", async () => {
    if (galerieLinks?.prev?.href) {
      const { photos, links } = await loadGallery(galerieLinks.prev.href);
      galerieLinks = links;
      displayGallery({ photos });
    }
  });

  document.getElementById("first_page").addEventListener("click", async () => {
    if (galerieLinks?.first?.href) {
      const { photos, links } = await loadGallery(galerieLinks.first.href);
      galerieLinks = links;
      displayGallery({ photos });
    }
  });

  document.getElementById("last_page").addEventListener("click", async () => {
    if (galerieLinks?.last?.href) {
      const { photos, links } = await loadGallery(galerieLinks.last.href);
      galerieLinks = links;
      displayGallery({ photos });
    }
  });
}

setupPagination();

// Get photo ID from URL hash or default to 105
const photoId = window.location.hash ? window.location.hash.substr(1) : 106;
getPicture(photoId);