import { API_URL } from "./config.js";

export const loadPicture = async (idPicture) => {
  try {
    const response = await fetch(`${API_URL}/photos/${idPicture}`, {
      credentials: 'include'
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Loaded picture data:', data);
    return data;
  } catch (error) {
    console.error('Error loading picture:', error);
    throw error;
  }
};

export const loadResource = async (uri) => {
    try {
        const response = await fetch(uri, {
            credentials: 'include'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Loaded resource data:', data);
        return data;
    } catch (error) {
        console.error('Error loading resource:', error);
        throw error;
    }
};