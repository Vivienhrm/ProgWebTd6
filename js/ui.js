export const displayPicture = (photoData) => {
    const photoContainer = document.querySelector('#la_photo');
    const template = document.querySelector('#photoTemplate').innerHTML;
    const compiledTemplate = Handlebars.compile(template);
    
    try {
        // // Check if photoData is valid
        // if (!photoData || !photoData.photo || !photoData.photo.url || !photoData.photo.url.href) {
        //     console.error('Invalid photo data structure:', photoData);
        //     throw new Error('Invalid photo data');
        // }


        // // Ensure URL is properly formatted
        // if (photoData.photo.url && !photoData.photo.url.startsWith('http')) {
        //     photoData.photo.url = `https://webetu.iutnc.univ-lorraine.fr${photoData.photo.url}`;
        // }
        // Clean and construct proper URL
        const baseUrl = 'https://webetu.iutnc.univ-lorraine.fr';
        
        let photoUrl = photoData.photo.url.href;
        if (!photoUrl.startsWith('http')) {
            photoUrl = baseUrl + photoUrl; 
            photoData.photo.url.href = photoUrl;
        }

        // Convertir l'URL de la catégorie
        let categorieUrl = photoData.links.categorie.href;
        if (!categorieUrl.startsWith('http')) {
            categorieUrl = baseUrl + categorieUrl;
            photoData.links.categorie.href = categorieUrl;
        }

        // Convertir l'URL des commentaires
        let commentsUrl = photoData.links.comments.href;
        if (!commentsUrl.startsWith('http')) {
            commentsUrl = baseUrl + commentsUrl;
            photoData.links.comments.href = commentsUrl;
        }

        const renderedHtml = compiledTemplate(photoData);
        photoContainer.innerHTML = renderedHtml;

        console.log('Photo data:', photoData);

    } catch (error) {
        console.error('Error displaying picture:', error);
        photoContainer.innerHTML = `<p>Error loading photo: ${error.message}</p>`;
    }
};