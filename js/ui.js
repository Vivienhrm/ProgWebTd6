export const displayPicture = (photoData) => {
    const photoContainer = document.querySelector('#la_photo');
    const template = document.querySelector('#photoTemplate').innerHTML;
    const compiledTemplate = Handlebars.compile(template);
    
    try {
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

export const displayCategory = (categoryData) => {
    const categoryElement = document.querySelector('#la_categorie');
    const template = document.querySelector('#categoryTemplate').innerHTML;
    const compiledTemplate = Handlebars.compile(template);
    if (categoryElement) {
        // categoryElement.innerHTML = compiledTemplate(categoryData);
        const catName = {nom: categoryData.categorie.nom};
        categoryElement.innerHTML = compiledTemplate(catName);
    }
};

export const displayComments = (commentsData) => {
    // const commentsList = document.querySelector('#les_commentaires');
    // const template = document.querySelector('#commentsTemplate').innerHTML;
    // const compiledTemplate = Handlebars.compile(template);

    // if (commentsList) {
    //     commentsList.innerHTML = compiledTemplate(commentsData);
    // }
    const commentsList = document.querySelector('#les_commentaires');
    if (!commentsList) {
        console.error('Element #les_commentaires not found in the DOM.');
        return;
    }

    const template = document.querySelector('#commentsTemplate').innerHTML;
    const compiledTemplate = Handlebars.compile(template);

    commentsList.innerHTML = compiledTemplate(commentsData);
};