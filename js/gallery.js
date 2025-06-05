import { loadResource } from './photoloader.js';
import { API_URL } from './config.js';

export async function loadGallery(uri) {
  const fullUri = uri
    ? new URL(uri, "https://webetu.iutnc.univ-lorraine.fr").href
    : `${API_URL}/photos`;

    const data = await loadResource(fullUri);
    return {
        photos: data.photos,
        links: data.links
  };
}